import { QuickActionsScreen } from "@/components/screens/quick-actions-screen";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { quickActionsSpotlight } from "@/lib/content";

/** Section 4 — one idea: everyday tasks are one tap away. */
export function QuickActionsSpotlight() {
  return (
    <section className="py-24 sm:py-36">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <SectionHeading
            eyebrow={quickActionsSpotlight.eyebrow}
            headline={quickActionsSpotlight.headline}
            body={quickActionsSpotlight.body}
            size="lg"
          />
        </Reveal>

        <Reveal delay={150} className="mt-16 sm:mt-20">
          <PhoneFrame size="xl">
            <QuickActionsScreen />
          </PhoneFrame>
        </Reveal>
      </Container>
    </section>
  );
}
