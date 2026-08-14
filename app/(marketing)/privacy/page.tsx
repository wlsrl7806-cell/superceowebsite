import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { LegalSection } from "@/components/legal/legal-section";
import { siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${siteMeta.name}`,
  description: "슈퍼사장의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell eyebrow="정책" title="개인정보처리방침" updated="최초 작성일: 2026년 8월 (출시 전 예시 템플릿)">
      <LegalSection title="1. 수집하는 개인정보 항목">
        <p>
          슈퍼사장은 제휴 문의 등 사장님이 직접 남겨주시는 정보를 수집합니다. 수집 항목은 이름, 연락처(전화번호
          또는 이메일), 매장명, 문의 내용이며, 그 외 개인정보는 사장님이 별도로 제공하지 않는 한 수집하지
          않습니다.
        </p>
      </LegalSection>

      <LegalSection title="2. 개인정보의 수집 및 이용 목적">
        <p>수집한 정보는 다음 목적을 위해서만 이용합니다.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>제휴 및 서비스 문의에 대한 답변</li>
          <li>서비스 출시 안내 및 공지 전달</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. 개인정보의 보유 및 이용 기간">
        <p>
          문의 처리가 완료된 이후 일정 기간 보관 후 파기하며, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안
          보관합니다.
        </p>
      </LegalSection>

      <LegalSection title="4. 개인정보의 제3자 제공">
        <p>슈퍼사장은 사장님의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 법령에 근거가 있는 경우는 예외로 합니다.</p>
      </LegalSection>

      <LegalSection title="5. 이용자의 권리">
        <p>
          사장님은 언제든지 본인의 개인정보에 대한 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 아래 문의처로
          연락해 주시면 신속히 처리하겠습니다.
        </p>
      </LegalSection>

      <LegalSection title="6. 개인정보 보호책임자 및 문의처">
        <p>개인정보 관련 문의는 아래 연락처로 접수해 주세요.</p>
        <p className="font-semibold text-ink-800">이메일: privacy@supercheo.app (예시)</p>
      </LegalSection>
    </LegalPageShell>
  );
}
