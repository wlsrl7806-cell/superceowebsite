import { appScreens } from "@/lib/app-screens";
import { review } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

export function Review() {
  return (
    <FeatureSection eyebrow={review.eyebrow} headline={review.headline} body={review.body} reverse>
      <AppScreen
        src={appScreens.review}
        alt="슈퍼사장 리뷰 관리 화면"
      />
    </FeatureSection>
  );
}
