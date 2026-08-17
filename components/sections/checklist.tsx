import { appScreens } from "@/lib/app-screens";
import { checklist } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

// The real checklist screen groups repeating store tasks into expandable
// sections (open / close, etc.) rather than one flat list — this section
// just shows that screen, it doesn't rebuild the checklist UI itself.
export function Checklist() {
  return (
    <FeatureSection
      id="how-it-works"
      eyebrow={checklist.eyebrow}
      headline={checklist.headline}
      body={checklist.body}
      reverse
    >
      <AppScreen src={appScreens.checklist} alt="슈퍼사장 오픈 체크리스트 화면" />
    </FeatureSection>
  );
}
