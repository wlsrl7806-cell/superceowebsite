"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useContactModal } from "@/components/contact/contact-provider";
import { CheckIcon, CloseIcon } from "@/components/ui/icons";

type FormState = {
  company: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const emptyForm: FormState = { company: "", name: "", phone: "", email: "", message: "" };

type FieldErrors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "이름을 입력해주세요.";
  if (!form.phone.trim()) errors.phone = "연락처를 입력해주세요.";
  if (!form.email.trim()) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = "올바른 이메일 형식이 아니에요.";
  }
  if (!form.message.trim()) errors.message = "문의 내용을 입력해주세요.";
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-[14.5px] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";
const errorInputClasses = "border-red-300 focus:border-red-400 focus:ring-red-100";
const labelClasses = "text-[13px] font-semibold text-ink-700";

export function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Reset to a clean slate every time the modal closes, so reopening it
  // later never shows a stale success/error state or old input.
  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setForm(emptyForm);
      setErrors({});
      setStatus("idle");
      setServerError("");
    }, 200);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const field = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setServerError(data?.error || "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setServerError("네트워크 오류로 문의를 보내지 못했습니다. 잠시 후 다시 시도해주세요.");
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-8"
      role="presentation"
    >
      <button
        type="button"
        aria-label="배경 닫기"
        tabIndex={-1}
        className="fixed inset-0 bg-ink-900/45 backdrop-blur-sm"
        onClick={close}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative w-full max-w-md animate-fade-up rounded-[2rem] bg-white p-6 shadow-card sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          aria-label="닫기"
          className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-50 hover:text-ink-700"
        >
          <CloseIcon className="size-4.5" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <CheckIcon className="size-7" strokeWidth={2.25} />
            </span>
            <h2 id="contact-modal-title" className="mt-5 text-[19px] font-extrabold text-ink-900">
              문의가 접수되었습니다
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
              문의 내용을 확인한 후 담당자가 연락드립니다.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              닫기
            </button>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-700">
              <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              제휴 문의
            </span>
            <h2 id="contact-modal-title" className="mt-4 text-[21px] font-extrabold text-ink-900 sm:text-[23px]">
              슈퍼사장과 함께해요
            </h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-500">
              아래 내용을 남겨주시면 확인 후 연락드릴게요.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-company" className={labelClasses}>
                  회사명
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={form.company}
                  onChange={field("company")}
                  className={`mt-1.5 ${inputClasses}`}
                  placeholder="회사명 (선택)"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor="contact-name" className={labelClasses}>
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={field("name")}
                  className={`mt-1.5 ${inputClasses} ${errors.name ? errorInputClasses : ""}`}
                  placeholder="이름"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-1.5 text-[12.5px] text-red-500">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-phone" className={labelClasses}>
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={field("phone")}
                  className={`mt-1.5 ${inputClasses} ${errors.phone ? errorInputClasses : ""}`}
                  placeholder="010-1234-5678"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                />
                {errors.phone ? (
                  <p id="contact-phone-error" className="mt-1.5 text-[12.5px] text-red-500">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClasses}>
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={field("email")}
                  className={`mt-1.5 ${inputClasses} ${errors.email ? errorInputClasses : ""}`}
                  placeholder="you@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="mt-1.5 text-[12.5px] text-red-500">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClasses}>
                  문의 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={field("message")}
                  rows={4}
                  className={`mt-1.5 resize-none ${inputClasses} ${errors.message ? errorInputClasses : ""}`}
                  placeholder="제휴 관련 문의 내용을 남겨주세요."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 text-[12.5px] text-red-500">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {status === "error" ? (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-[13.5px] text-red-600" role="alert">
                  {serverError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <span
                      className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      aria-hidden="true"
                    />
                    보내는 중…
                  </>
                ) : (
                  "제휴 문의 보내기"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
