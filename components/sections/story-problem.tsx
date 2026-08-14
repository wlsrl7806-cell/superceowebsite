import { Container } from "@/components/ui/container";
import { ParagraphBlock } from "@/components/ui/paragraph-block";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyProblem } from "@/lib/story-content";

// A small fixed tilt pattern — deterministic so server/client output matches.
const rotations = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];

export function StoryProblem() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow={storyProblem.eyebrow} headline={storyProblem.headline} size="lg" />
          <ParagraphBlock paragraphs={storyProblem.body} className="mt-8 max-w-lg" />
        </Reveal>

        {/* Scattered, editorial — plain labels, not icon cards. */}
        <Reveal delay={150} className="mt-14 flex max-w-xl flex-wrap items-center justify-center gap-3 sm:gap-4">
          {storyProblem.labels.map((label, i) => (
            <span
              key={label}
              className={`inline-block rounded-full border border-ink-200 px-5 py-2 text-[15px] font-semibold text-ink-600 ${rotations[i % rotations.length]}`}
            >
              {label}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
