import { Container } from "@/components/ui/container";
import { Mascot } from "@/components/ui/mascot";
import { ParagraphBlock } from "@/components/ui/paragraph-block";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyFuture } from "@/lib/story-content";

export function StoryFuture() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-sun-50 to-cream py-20 sm:py-28">
      <div
        className="pointer-events-none absolute top-0 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow={storyFuture.eyebrow} headline={storyFuture.headline} size="lg" />
          <ParagraphBlock paragraphs={storyFuture.body} className="mt-8 max-w-lg" />
        </Reveal>

        <Reveal delay={250} className="mt-14 flex flex-col items-center">
          <Mascot className="animate-float size-14" />
          <p className="mt-6 text-[1.5rem] leading-[1.35] font-extrabold text-ink-900 sm:text-[2rem]">
            {storyFuture.closing.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
