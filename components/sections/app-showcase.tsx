import type { ComponentType } from "react";
import { BriefingScreen } from "@/components/screens/briefing-screen";
import { ChecklistScreen } from "@/components/screens/checklist-screen";
import { DashboardScreen } from "@/components/screens/dashboard-screen";
import { InventoryScreen } from "@/components/screens/inventory-screen";
import { OrderScreen } from "@/components/screens/order-screen";
import { RecipeScreen } from "@/components/screens/recipe-screen";
import { ReviewScreen } from "@/components/screens/review-screen";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { appShowcase } from "@/lib/content";

const screenComponents: Record<(typeof appShowcase.screens)[number]["id"], ComponentType> = {
  dashboard: DashboardScreen,
  briefing: BriefingScreen,
  checklist: ChecklistScreen,
  inventory: InventoryScreen,
  order: OrderScreen,
  recipe: RecipeScreen,
  review: ReviewScreen,
};

export function AppShowcase() {
  return (
    <section className="bg-cream-soft py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={appShowcase.eyebrow} headline={appShowcase.headline} body={appShowcase.body} />

        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-12 sm:gap-x-10">
          {appShowcase.screens.map((screen) => {
            const ScreenComponent = screenComponents[screen.id];
            return (
              <div key={screen.id} className="flex w-[224px] flex-col items-center gap-4">
                <PhoneFrame size="md">
                  <ScreenComponent />
                </PhoneFrame>
                <p className="text-[13.5px] font-semibold text-ink-700">{screen.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
