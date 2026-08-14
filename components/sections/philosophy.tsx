import { Mascot } from "@/components/ui/mascot";
import { Container } from "@/components/ui/container";
import { philosophy } from "@/lib/content";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-sun-50 to-cream py-20 sm:py-28">
      <div
        className="pointer-events-none absolute top-0 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand-700 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {philosophy.eyebrow}
        </span>

        <h2 className="mt-5 text-[1.85rem] leading-[1.35] font-extrabold text-ink-900 sm:text-4xl lg:text-[2.75rem]">
          {philosophy.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-10 flex max-w-xl flex-col items-center gap-6 sm:mt-12 sm:gap-7">
          {philosophy.paragraphs.map((lines) => (
            <p
              key={lines.join(" ")}
              className="text-lg leading-[1.5] font-medium text-ink-700 sm:text-xl lg:text-[1.6rem]"
            >
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ))}
        </div>

        <Mascot className="animate-float mt-10 size-16 sm:mt-12" />
      </Container>
    </section>
  );
}
