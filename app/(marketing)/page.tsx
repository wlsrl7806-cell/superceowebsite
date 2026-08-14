import { AiBriefingSpotlight } from "@/components/sections/ai-briefing-spotlight";
import { Checklist } from "@/components/sections/checklist";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { InventoryOrderFlow } from "@/components/sections/inventory-order-flow";
import { Philosophy } from "@/components/sections/philosophy";
import { Problem } from "@/components/sections/problem";
import { QuickActionsSpotlight } from "@/components/sections/quick-actions-spotlight";
import { ReservationReviews } from "@/components/sections/reservation-reviews";

// The homepage tells one story, one idea per section — see each section
// component for the single message it's responsible for. Recipes and the
// full app-screen showcase grid still exist (components/sections/recipes.tsx,
// app-showcase.tsx) but are deliberately left out of this narrative; wire
// them into a dedicated page if/when they're needed again.
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <AiBriefingSpotlight />
      <QuickActionsSpotlight />
      <InventoryOrderFlow />
      <Checklist />
      <ReservationReviews />
      <Philosophy />
      <FinalCta />
    </>
  );
}
