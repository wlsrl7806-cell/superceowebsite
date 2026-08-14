import { AppShowcase } from "@/components/sections/app-showcase";
import { Checklist } from "@/components/sections/checklist";
import { CoreExperience } from "@/components/sections/core-experience";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { InventoryOrderFlow } from "@/components/sections/inventory-order-flow";
import { Philosophy } from "@/components/sections/philosophy";
import { Problem } from "@/components/sections/problem";
import { Recipes } from "@/components/sections/recipes";
import { ReservationReviews } from "@/components/sections/reservation-reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <CoreExperience />
      <Checklist />
      <InventoryOrderFlow />
      <Recipes />
      <ReservationReviews />
      <Philosophy />
      <AppShowcase />
      <FinalCta />
    </>
  );
}
