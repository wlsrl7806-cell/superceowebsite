import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ParagraphBlock } from "@/components/ui/paragraph-block";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyBuilding } from "@/lib/story-content";

export function StoryBuilding() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <Reveal>
          <SectionHeading eyebrow={storyBuilding.eyebrow} headline={storyBuilding.headline} size="lg" />
        </Reveal>

        <Reveal delay={150} className="mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {storyBuilding.sequence.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-white px-4 py-2 text-[14px] font-bold text-ink-800 shadow-soft">
                {step}
              </span>
              {i < storyBuilding.sequence.length - 1 ? (
                <ArrowRightIcon className="size-4 shrink-0 text-ink-300" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </Reveal>

        <ParagraphBlock paragraphs={[storyBuilding.body]} className="mt-10 max-w-lg" />
      </Container>
    </section>
  );
}
