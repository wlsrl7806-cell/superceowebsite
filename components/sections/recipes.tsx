import { appScreens } from "@/lib/app-screens";
import { recipes } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

// Flow the real screen follows: 매장 선택 → 해당 매장 레시피 → 메뉴 선택 → 레시피 확인.
export function Recipes() {
  return (
    <FeatureSection eyebrow={recipes.eyebrow} headline={recipes.headline} body={recipes.body} tone="cream-soft">
      <AppScreen src={appScreens.recipe} alt="슈퍼사장 매장 레시피 화면" />
    </FeatureSection>
  );
}
