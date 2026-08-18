import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: ContactPayload): string | null {
  if (!body.name?.trim()) return "이름을 입력해주세요.";
  if (!body.phone?.trim()) return "연락처를 입력해주세요.";
  if (!body.email?.trim() || !emailPattern.test(body.email.trim())) return "올바른 이메일을 입력해주세요.";
  if (!body.message?.trim()) return "문의 내용을 입력해주세요.";
  return null;
}

// Minimal HTML-escaping — every field below is interpolated into an email
// body, and user input must never be trusted as safe markup.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Missing RESEND_API_KEY, CONTACT_EMAIL, or FROM_EMAIL environment variable.");
    return NextResponse.json(
      { error: "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 },
    );
  }

  const company = body.company?.trim() || "";
  const name = body.name!.trim();
  const phone = body.phone!.trim();
  const email = body.email!.trim();
  const message = body.message!.trim();

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[제휴 문의] ${name}${company ? ` (${company})` : ""}`,
      text: [
        `회사명: ${company || "-"}`,
        `이름: ${name}`,
        `연락처: ${phone}`,
        `이메일: ${email}`,
        "",
        "문의 내용:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #16181d;">
          <h2 style="margin: 0 0 16px;">슈퍼사장 제휴 문의</h2>
          <table style="border-collapse: collapse;">
            <tbody>
              <tr><td style="padding: 4px 12px 4px 0; color: #6b7280;">회사명</td><td>${escapeHtml(company) || "-"}</td></tr>
              <tr><td style="padding: 4px 12px 4px 0; color: #6b7280;">이름</td><td>${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 4px 12px 4px 0; color: #6b7280;">연락처</td><td>${escapeHtml(phone)}</td></tr>
              <tr><td style="padding: 4px 12px 4px 0; color: #6b7280;">이메일</td><td>${escapeHtml(email)}</td></tr>
            </tbody>
          </table>
          <p style="margin: 20px 0 4px; color: #6b7280;">문의 내용</p>
          <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend failed to send contact inquiry:", error);
      return NextResponse.json(
        { error: "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending contact inquiry:", err);
    return NextResponse.json(
      { error: "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 },
    );
  }
}
