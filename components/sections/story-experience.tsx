import { StoryScreen } from "@/components/screens/story-screen";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyExperience } from "@/lib/story-content";

export function StoryExperience() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <SectionHeading
            eyebrow={storyExperience.eyebrow}
            headline={[storyExperience.headline]}
            body={storyExperience.body}
            size="lg"
          />
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <PhoneFrame size="lg">
            <StoryScreen />
          </PhoneFrame>
        </Reveal>
      </Container>
    </section>
  );
}
