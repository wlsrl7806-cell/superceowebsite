import { Mascot } from "@/components/ui/mascot";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { philosophy } from "@/lib/content";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-sun-50 to-cream py-28 sm:py-40">
      <div
        className="pointer-events-none absolute top-0 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand-700 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
            <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            {philosophy.eyebrow}
          </span>

          <h2 className="mt-6 text-[2.15rem] leading-[1.25] font-extrabold text-ink-900 sm:text-5xl lg:text-[3.75rem]">
            {philosophy.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-12 flex max-w-xl flex-col items-center gap-7 sm:mt-16 sm:gap-8">
          {philosophy.paragraphs.map((lines, i) => (
            <Reveal key={lines.join(" ")} delay={200 + i * 220}>
              <p className="text-lg leading-[1.5] font-medium text-ink-700 sm:text-xl lg:text-[1.6rem]">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200 + philosophy.paragraphs.length * 220}>
          <Mascot className="animate-float mt-12 size-16 sm:mt-16" />
        </Reveal>
      </Container>
    </section>
  );
}
