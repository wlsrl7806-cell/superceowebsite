import { BriefingScreen } from "@/components/screens/briefing-screen";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiBriefingSpotlight } from "@/lib/content";

/** Section 3 — one idea: today gets sorted for you before you ask. */
export function AiBriefingSpotlight() {
  return (
    <section id="features" className="bg-cream-soft py-24 sm:py-36">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <SectionHeading
            eyebrow={aiBriefingSpotlight.eyebrow}
            headline={aiBriefingSpotlight.headline}
            body={aiBriefingSpotlight.body}
            size="lg"
          />
        </Reveal>

        <Reveal delay={150} className="mt-16 sm:mt-20">
          <PhoneFrame size="xl">
            <BriefingScreen />
          </PhoneFrame>
        </Reveal>
      </Container>
    </section>
  );
}
