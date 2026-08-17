import { appScreens } from "@/lib/app-screens";
import { inventory } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

export function Inventory() {
  return (
    <FeatureSection eyebrow={inventory.eyebrow} headline={inventory.headline} body={inventory.body} tone="cream-soft">
      <AppScreen
        src={appScreens.inventory}
        alt="슈퍼사장 재고 관리 화면"
      />
    </FeatureSection>
  );
}
