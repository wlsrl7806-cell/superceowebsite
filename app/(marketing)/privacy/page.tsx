import type { Metadata } from "next";
import { LegalFactList } from "@/components/legal/legal-fact-list";
import { LegalItemGroup } from "@/components/legal/legal-item-group";
import { LegalNote } from "@/components/legal/legal-note";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { LegalSection } from "@/components/legal/legal-section";
import { LegalSubheading } from "@/components/legal/legal-subheading";
import { LegalTable } from "@/components/legal/legal-table";
import { siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${siteMeta.name}`,
  description: "슈퍼사장의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="정책"
      title="슈퍼사장 개인정보처리방침(초안)"
      updated="최초 작성일: 2026년 8월 (출시 전 예시 템플릿)"
    >
      <div className="space-y-3">
        <p>
          주식회사 캠비아(이하 “회사”)는 통합 매장 경영관리 서비스 ‘슈퍼사장’(이하 “서비스”)을 제공함에 있어
          이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관계 법령을 준수합니다.
        </p>
        <p>
          회사는 본 개인정보처리방침을 통해 어떠한 개인정보를 어떤 목적으로 처리하는지, 개인정보를 얼마나 보유하고
          어떻게 보호하는지 등을 안내합니다.
        </p>
      </div>

      <LegalSection id="section-1" title="1. 처리하는 개인정보의 항목 및 수집방법">
        <LegalSubheading>가. 처리하는 개인정보의 항목</LegalSubheading>
        <p>회사는 회원가입 및 서비스 제공을 위해 다음과 같은 개인정보를 처리할 수 있습니다.</p>

        <LegalItemGroup heading="① 회원가입 및 계정관리">
          <ul className="list-inside list-disc space-y-1">
            <li>이름</li>
            <li>휴대전화번호</li>
            <li>이메일</li>
            <li>로그인 및 인증정보</li>
            <li>사업자명 또는 상호</li>
            <li>사업자등록번호</li>
            <li>사업장명</li>
            <li>사업장 주소</li>
            <li>사업장 전화번호</li>
            <li>대표자 정보</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="② 매장 및 직원관리 서비스 이용 시">
          <ul className="list-inside list-disc space-y-1">
            <li>매장정보</li>
            <li>직원 이름</li>
            <li>연락처</li>
            <li>근무 매장</li>
            <li>근무일정</li>
            <li>출·퇴근 기록</li>
            <li>오픈·마감 체크리스트 및 업무수행 기록</li>
          </ul>
          <LegalNote>
            ※ 직원정보의 구체적인 처리항목과 사업자와 회사 간 개인정보 처리관계는 실제 직원관리 기능 확정 후
            반영합니다.
          </LegalNote>
        </LegalItemGroup>

        <LegalItemGroup heading="③ 예약관리 서비스 이용 시">
          <ul className="list-inside list-disc space-y-1">
            <li>예약자명</li>
            <li>연락처</li>
            <li>예약일시</li>
            <li>예약인원</li>
            <li>예약내용 및 요청사항</li>
            <li>예약경로</li>
          </ul>
          <LegalNote>
            ※ 외부 예약플랫폼과 연동하는 경우 연동 대상 및 제공받는 개인정보 항목을 실제 제휴·연동 구조에 따라
            추가합니다.
          </LegalNote>
        </LegalItemGroup>

        <LegalItemGroup heading="④ 발주·매입관리 서비스 이용 시">
          <ul className="list-inside list-disc space-y-1">
            <li>거래처 정보</li>
            <li>발주내역</li>
            <li>매입내역</li>
            <li>품목 및 수량</li>
            <li>거래금액</li>
            <li>거래일자</li>
            <li>세금계산서 등 거래 관련 정보</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="⑤ 매출·손익 및 AI 경영관리 서비스 이용 시">
          <ul className="list-inside list-disc space-y-1">
            <li>매출정보</li>
            <li>매입·지출정보</li>
            <li>거래일자 및 거래금액</li>
            <li>거래처 및 거래내역</li>
            <li>카드매출 관련 정보</li>
            <li>계좌 거래 관련 정보 [연동 시 확정 필요]</li>
            <li>세금계산서 관련 정보 [연동 시 확정 필요]</li>
          </ul>
          <p className="mt-2">
            회사는 위 정보를 활용하여 매입·지출내역 분류, 손익 분석 및 경영정보 제공 등 AI 기반 경영관리 기능을
            제공할 수 있습니다.
          </p>
        </LegalItemGroup>

        <LegalItemGroup heading="⑥ 문의 및 제휴서비스 이용 시">
          <ul className="list-inside list-disc space-y-1">
            <li>이름</li>
            <li>회사명</li>
            <li>전화번호</li>
            <li>이메일</li>
            <li>문의 및 제휴내용</li>
            <li>이용자가 직접 첨부한 파일에 포함된 정보</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="⑦ 서비스 이용 과정에서 자동으로 생성될 수 있는 정보">
          <ul className="list-inside list-disc space-y-1">
            <li>서비스 이용기록</li>
            <li>접속기록</li>
            <li>접속 IP</li>
            <li>기기정보</li>
            <li>오류기록</li>
            <li>쿠키 등 [실제 적용 여부 확인 필요]</li>
          </ul>
        </LegalItemGroup>

        <LegalSubheading>나. 개인정보의 수집방법</LegalSubheading>
        <p>회사는 다음과 같은 방법으로 개인정보를 수집할 수 있습니다.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>홈페이지 및 슈퍼사장 앱·웹서비스</li>
          <li>회원가입 및 서비스 이용 과정에서 이용자가 직접 입력</li>
          <li>이용자가 직접 파일 또는 자료를 업로드</li>
          <li>이용자의 동의를 받은 외부 서비스 및 제휴서비스와의 연동</li>
          <li>고객문의 및 제휴문의</li>
          <li>서비스 이용 과정에서 자동 생성되는 정보</li>
        </ul>
      </LegalSection>

      <LegalSection id="section-2" title="2. 개인정보의 처리 목적">
        <p>회사는 수집한 개인정보를 다음의 목적으로 처리합니다.</p>

        <LegalItemGroup heading="① 회원 및 사업자 관리">
          <ul className="list-inside list-disc space-y-1">
            <li>회원가입 및 본인확인</li>
            <li>사업자 및 사업장 확인</li>
            <li>계정관리</li>
            <li>서비스 이용자 식별</li>
            <li>부정이용 방지</li>
            <li>회원탈퇴 및 이용계약 관리</li>
            <li>공지사항 전달</li>
            <li>고객문의 및 민원처리</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="② 매장 운영관리 서비스 제공">
          <ul className="list-inside list-disc space-y-1">
            <li>매장정보 통합관리</li>
            <li>예약관리</li>
            <li>발주 및 매입관리</li>
            <li>직원 출·퇴근 및 근무관리</li>
            <li>매장 오픈·마감 체크리스트 관리</li>
            <li>매장별 업무수행 현황 제공</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="③ 매출·매입·손익 및 AI 경영관리 서비스 제공">
          <ul className="list-inside list-disc space-y-1">
            <li>매출·매입·지출정보 통합</li>
            <li>거래내역 분류 및 정리</li>
            <li>매출 및 비용구조 분석</li>
            <li>손익정보 제공</li>
            <li>비용 변동 및 주요 경영지표 분석</li>
            <li>AI를 활용한 경영정보 및 매장 운영정보 제공</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="④ 서비스 개선 및 안정적인 운영">
          <ul className="list-inside list-disc space-y-1">
            <li>서비스 이용현황 분석</li>
            <li>기능 개선</li>
            <li>오류 및 장애 대응</li>
            <li>부정이용 방지 및 보안</li>
            <li>신규 기능 및 서비스 개발</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="⑤ 문의 및 제휴업무">
          <ul className="list-inside list-disc space-y-1">
            <li>고객문의 접수 및 답변</li>
            <li>제휴·사업협력 제안 검토</li>
            <li>제휴업체 및 담당자 연락</li>
          </ul>
        </LegalItemGroup>

        <LegalItemGroup heading="⑥ 마케팅 및 광고">
          <p>
            회사가 이벤트, 프로모션, 맞춤형 광고 등 마케팅 목적으로 개인정보를 이용하는 경우에는 필요한 경우 별도의
            동의를 받아 처리합니다.
          </p>
        </LegalItemGroup>
      </LegalSection>

      <LegalSection id="section-3" title="3. 개인정보의 처리 및 보유기간">
        <p>회사는 개인정보의 처리목적이 달성되면 해당 개인정보를 지체 없이 파기하는 것을 원칙으로 합니다.</p>

        <LegalFactList
          items={[
            ["회원정보", "회원탈퇴 또는 서비스 이용계약 종료 시까지"],
            ["매장 운영 관련 정보", "서비스 이용기간 동안 보유하며 회원탈퇴 또는 해당 매장 삭제 후 [보유기간 확정 필요]"],
            ["문의 및 제휴정보", "문의 또는 제휴업무 종료 후 [예: 1년 / 확정 필요]"],
          ]}
        />

        <p>다만 관계 법령에 따라 일정 기간 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 별도로 보관합니다.</p>
        <p>
          향후 슈퍼사장에서 유료결제·전자상거래 등이 이루어지는 경우 계약·결제·소비자 불만 및 분쟁처리 등에 관한
          법정 보존기간을 실제 서비스 구조에 맞춰 추가합니다.
        </p>
      </LegalSection>

      <LegalSection id="section-4" title="4. 개인정보의 제3자 제공">
        <p>
          회사는 원칙적으로 이용자의 개인정보를 수집·이용 목적 범위 내에서 처리하며 이용자의 개인정보를 제3자에게
          제공하지 않습니다.
        </p>
        <p>다만 다음의 경우에는 예외로 합니다.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>이용자가 개인정보 제공에 사전에 동의한 경우</li>
          <li>관계 법령에 특별한 규정이 있는 경우</li>
          <li>기타 개인정보 보호법에서 허용하는 경우</li>
        </ul>
        <p>
          향후 슈퍼사장은 이용자의 선택에 따라 세무·노무, 금융·보험, 식자재·소모품, 매장 수리·유지보수, 매장
          양도·양수 등 제휴서비스를 연결할 수 있습니다.
        </p>
        <p>
          해당 서비스를 이용하기 위해 개인정보를 제휴업체에 제공할 필요가 있는 경우, 회사는 관계 법령에 따라
          제공받는 자, 제공 목적, 제공하는 개인정보 항목, 보유·이용기간 등을 이용자에게 안내하고 필요한 동의를 받은
          후 제공합니다.
        </p>
        <p>즉, 단순히 슈퍼사장 회원이라는 이유만으로 제휴업체에 개인정보를 임의 제공하지 않습니다.</p>
      </LegalSection>

      <LegalSection id="section-5" title="5. 개인정보 처리업무의 위탁">
        <p>회사는 원활한 서비스 제공을 위하여 개인정보 처리업무의 일부를 외부 전문업체에 위탁할 수 있습니다.</p>
        <p>실제 슈퍼사장 개발·운영 환경이 확정되면 다음 형식으로 공개합니다.</p>

        <LegalTable
          head={["수탁자", "위탁업무"]}
          rows={[
            ["[클라우드 사업자]", "서버 운영 및 데이터 보관"],
            ["[문자/알림톡 사업자]", "SMS·알림톡 등 메시지 발송"],
            ["[이메일 사업자]", "이메일 발송"],
            ["[본인인증 사업자]", "회원 본인확인 및 인증"],
            ["[결제 사업자]", "유료서비스 결제처리"],
            ["[기타 실제 사용업체]", "해당 위탁업무"],
          ]}
        />

        <p>
          회사는 개인정보 처리업무를 위탁하는 경우 관계 법령에 따라 수탁자가 개인정보를 안전하게 처리하도록 필요한
          사항을 계약 등에 반영하고 관리·감독합니다.
        </p>
        <LegalNote>※ 이 표는 실제 서버와 API 업체가 정해진 다음 반드시 실제 업체명으로 교체해야 합니다.</LegalNote>
      </LegalSection>

      <LegalSection id="section-6" title="6. 사업자 회원이 입력하는 직원·고객 등의 개인정보">
        <p>
          슈퍼사장은 사업자 회원이 매장을 관리하는 과정에서 직원정보, 예약고객정보 등 사업자 회원이 관리하는
          개인정보를 처리할 수 있습니다.
        </p>
        <p>
          회사는 이러한 개인정보를 슈퍼사장 서비스 제공을 위해 필요한 범위에서만 처리하며, 회사가 해당 정보를
          독자적인 목적으로 임의 이용하지 않습니다.
        </p>
        <p>
          해당 정보에 대한 회사와 사업자 회원 간 개인정보 처리관계 및 필요한 위탁·재위탁 사항은 실제 서비스 구조 및
          기능에 따라 별도로 정하여 공개합니다.
        </p>
        <p className="rounded-xl border border-dashed border-ink-200 bg-ink-50 px-4 py-3 text-[13.5px] text-ink-500">
          → 이 부분은 슈퍼사장에서 상당히 중요해서 출시 전 변호사 검토 추천.
        </p>
      </LegalSection>

      <LegalSection id="section-7" title="7. 개인정보의 파기절차 및 방법">
        <p>
          회사는 개인정보 보유기간이 경과하거나 처리목적이 달성되어 개인정보가 불필요하게 되었을 때 해당 개인정보를
          지체 없이 파기합니다.
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>전자적 파일 형태로 저장된 개인정보는 복구 또는 재생되지 않도록 안전한 방법으로 삭제합니다.</li>
          <li>종이 문서에 기록된 개인정보가 있는 경우 분쇄 또는 소각 등의 방법으로 파기합니다.</li>
          <li>관계 법령에 따라 일정 기간 보존해야 하는 개인정보는 다른 개인정보와 분리하여 보관합니다.</li>
        </ul>
      </LegalSection>

      <LegalSection id="section-8" title="8. 이용자의 권리 및 행사방법">
        <p>이용자는 관계 법령에 따라 자신의 개인정보에 대해 다음과 같은 권리를 행사할 수 있습니다.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>개인정보 열람 요구</li>
          <li>개인정보 정정·삭제 요구</li>
          <li>개인정보 처리정지 요구</li>
          <li>동의 철회</li>
          <li>회원탈퇴 등 관계 법령에서 인정하는 권리</li>
        </ul>
        <p>
          회원정보 중 이용자가 직접 수정할 수 있는 정보는 슈퍼사장 내 회원정보 관리기능을 통해 변경할 수 있도록
          제공할 수 있으며, 기타 개인정보 관련 요청은 개인정보 보호 담당부서를 통해 접수할 수 있습니다.
        </p>
        <p>회사는 이용자의 권리행사 요청이 있는 경우 관계 법령에 따라 필요한 조치를 취합니다.</p>
      </LegalSection>

      <LegalSection id="section-9" title="9. 개인정보 자동수집 장치에 관한 사항">
        <p>
          회사는 서비스 이용현황 분석 및 서비스 개선 등을 위해 쿠키(cookie) 또는 이와 유사한 기술을 사용할 수
          있습니다.
        </p>
        <p>이용자는 웹브라우저 등의 설정을 통해 쿠키 저장을 허용하거나 거부할 수 있습니다.</p>
        <p>
          다만 쿠키 사용 여부와 Google Analytics 등 외부 분석도구 사용 여부는 실제 슈퍼사장 웹·앱의 기술구성이
          확정된 후 구체적인 내용을 추가합니다.
        </p>
      </LegalSection>

      <LegalSection id="section-10" title="10. 개인정보의 안전성 확보조치">
        <p>회사는 개인정보의 안전성 확보를 위해 관계 법령에 따라 필요한 기술적·관리적·물리적 보호조치를 시행합니다.</p>
        <ul className="list-inside list-disc space-y-1">
          <li>개인정보 접근권한 관리</li>
          <li>개인정보 접근통제</li>
          <li>개인정보 전송 및 저장 시 필요한 보호조치</li>
          <li>접속기록 관리</li>
          <li>보안프로그램 및 시스템 관리</li>
          <li>개인정보 취급자 최소화 및 관리</li>
          <li>개인정보 유출·침해사고 대응체계 운영</li>
        </ul>
      </LegalSection>

      <LegalSection id="section-11" title="11. 개인정보 보호책임자 및 문의처">
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄하고 이용자의 개인정보 관련 문의 및 불만을 처리하기 위하여
          개인정보 보호책임자 및 담당부서를 지정합니다.
        </p>

        <LegalSubheading>개인정보 보호책임자</LegalSubheading>
        <LegalFactList
          items={[
            ["회사명", "주식회사 캠비아"],
            ["성명/직책", "[확정 필요]"],
            ["전화번호", "[확정 필요]"],
            ["이메일", "[확정 필요]"],
          ]}
        />

        <p>
          이용자는 슈퍼사장 이용 중 발생한 개인정보 관련 문의, 불만처리, 피해구제 등에 관한 사항을 위 담당자에게
          문의할 수 있습니다.
        </p>
      </LegalSection>

      <LegalSection id="section-12" title="12. 개인정보처리방침의 변경">
        <p>
          본 개인정보처리방침의 내용이 변경되는 경우 회사는 변경사항을 슈퍼사장 서비스 또는 홈페이지를 통해 관계
          법령에 따라 안내합니다.
        </p>
        <LegalFactList
          items={[
            ["공고일자", "2026년 [ ]월 [ ]일"],
            ["시행일자", "2026년 [ ]월 [ ]일"],
          ]}
        />
      </LegalSection>
    </LegalPageShell>
  );
}
