import { Container } from "@/components/ui/container";
import { ParagraphBlock } from "@/components/ui/paragraph-block";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { storyReal } from "@/lib/story-content";

export function StoryReal() {
  return (
    <section className="bg-cream-soft py-20 sm:py-28">
      <Container className="flex flex-col items-center">
        <Reveal className="flex flex-col items-center">
          <SectionHeading eyebrow={storyReal.eyebrow} headline={[storyReal.headline]} size="lg" />
          <ParagraphBlock paragraphs={storyReal.body} className="mt-8 max-w-lg" />
        </Reveal>

        <div className="mt-14 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {storyReal.highlights.map((label, i) => (
            <Reveal key={label} delay={150 + i * 90}>
              <div className="flex h-full flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-soft">
                <span className="flex size-8 items-center justify-center rounded-full bg-brand-50 text-[13px] font-extrabold text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14.5px] leading-snug font-semibold text-ink-800">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
