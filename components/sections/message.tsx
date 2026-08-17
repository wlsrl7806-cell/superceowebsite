import { appScreens } from "@/lib/app-screens";
import { message } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

export function Message() {
  return (
    <FeatureSection eyebrow={message.eyebrow} headline={message.headline} body={message.body} tone="cream-soft">
      <AppScreen
        src={appScreens.message}
        alt="슈퍼사장 발주 문자 작성 및 발송 화면"
      />
    </FeatureSection>
  );
}
