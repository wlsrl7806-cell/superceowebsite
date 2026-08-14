import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { LegalSection } from "@/components/legal/legal-section";
import { siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: `이용약관 | ${siteMeta.name}`,
  description: "슈퍼사장의 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <LegalPageShell eyebrow="정책" title="이용약관" updated="최초 작성일: 2026년 8월 (출시 전 예시 템플릿)">
      <LegalSection title="1. 목적">
        <p>
          이 약관은 슈퍼사장(이하 &ldquo;회사&rdquo;)이 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리,
          의무 및 책임 사항을 규정함을 목적으로 합니다.
        </p>
      </LegalSection>

      <LegalSection title="2. 서비스의 정의 및 제공">
        <p>
          슈퍼사장은 매장 운영에 필요한 오픈 체크, 재고, 발주, 예약, 리뷰, 레시피 확인 등을 한곳에서 챙길 수
          있도록 돕는 모바일 애플리케이션입니다. 서비스는 현재 개발 중이며, Google Play와 App Store를 통한 정식
          출시 전까지 이 약관의 세부 내용은 변경될 수 있습니다.
        </p>
      </LegalSection>

      <LegalSection title="3. 이용자의 의무">
        <p>이용자는 서비스 이용 시 관계 법령과 이 약관에서 정한 사항을 준수해야 하며, 다음 행위를 해서는 안 됩니다.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>서비스 운영을 방해하는 행위</li>
          <li>타인의 정보를 도용하는 행위</li>
          <li>회사의 지식재산권을 침해하는 행위</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. 서비스의 변경 및 중단">
        <p>회사는 서비스의 내용, 운영상 또는 기술상의 필요에 따라 제공하는 서비스의 전부 또는 일부를 변경하거나 중단할 수 있으며, 이 경우 사전에 공지합니다.</p>
      </LegalSection>

      <LegalSection title="5. 책임의 제한">
        <p>회사는 천재지변, 서비스 개발 및 출시 준비 과정에서 발생하는 불가피한 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</p>
      </LegalSection>

      <LegalSection title="6. 약관의 변경">
        <p>이 약관은 서비스 출시 및 운영 상황에 따라 개정될 수 있으며, 개정 시 서비스 내 공지 등을 통해 안내합니다.</p>
      </LegalSection>

      <LegalSection title="7. 문의처">
        <p>서비스 이용과 관련한 문의는 아래 연락처로 접수해 주세요.</p>
        <p className="font-semibold text-ink-800">이메일: hello@supercheo.app (예시)</p>
      </LegalSection>
    </LegalPageShell>
  );
}
