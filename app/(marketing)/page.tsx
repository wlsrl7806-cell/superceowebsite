import { Checklist } from "@/components/sections/checklist";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Inventory } from "@/components/sections/inventory";
import { Message } from "@/components/sections/message";
import { Order } from "@/components/sections/order";
import { Philosophy } from "@/components/sections/philosophy";
import { Problem } from "@/components/sections/problem";
import { Recipes } from "@/components/sections/recipes";
import { Reservation } from "@/components/sections/reservation";
import { Review } from "@/components/sections/review";

// Every feature section below pairs one real app screenshot (public/app-screens/)
// with a short message via the shared FeatureSection + AppScreen components —
// see lib/app-screens.ts to swap screenshots and lib/content.ts for copy.
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Reservation />
      <Review />
      <Inventory />
      <Order />
      <Message />
      <Checklist />
      <Recipes />
      <Philosophy />
      <FinalCta />
    </>
  );
}
