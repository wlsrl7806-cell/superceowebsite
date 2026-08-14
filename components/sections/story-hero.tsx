import { Container } from "@/components/ui/container";
import { ParagraphBlock } from "@/components/ui/paragraph-block";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyHero } from "@/lib/story-content";

export function StoryHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center">
        <SectionHeading eyebrow={storyHero.eyebrow} headline={[storyHero.headline]} size="lg" />
        <ParagraphBlock paragraphs={storyHero.body} className="mt-8 max-w-lg" />
      </Container>
    </section>
  );
}
