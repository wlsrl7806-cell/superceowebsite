import { appScreens } from "@/lib/app-screens";
import { order } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

// Preserve the real flow this screen represents: 재고 확인 → 부족 품목 선택 →
// 발주 품목 이동 → 품목 체크 → 문자 자동 작성 → 바로 문자 발송. This section
// only shows the screenshot — the flow itself lives in the app.
export function Order() {
  return (
    <FeatureSection eyebrow={order.eyebrow} headline={order.headline} body={order.body} reverse>
      <AppScreen src={appScreens.order} alt="슈퍼사장 발주 화면" />
    </FeatureSection>
  );
}
