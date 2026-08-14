import { Container } from "@/components/ui/container";
import { ParagraphBlock } from "@/components/ui/paragraph-block";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyIdea } from "@/lib/story-content";

export function StoryIdea() {
  return (
    <section className="bg-cream-soft py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow={storyIdea.eyebrow} headline={storyIdea.headline} size="lg" />
          <ParagraphBlock paragraphs={storyIdea.body} className="mt-8 max-w-lg" />
        </Reveal>

        <Reveal delay={150} className="mt-12 w-full max-w-2xl">
          <blockquote className="rounded-[2rem] bg-white px-7 py-10 text-center shadow-soft sm:px-14 sm:py-14">
            <p className="text-[1.3rem] leading-[1.5] font-bold text-ink-900 sm:text-[1.65rem]">
              “{storyIdea.quote[0]}
              <br />
              {storyIdea.quote[1]}”
            </p>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
