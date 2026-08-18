import { PartnershipButton } from "@/components/contact/partnership-button";
import { Container } from "@/components/ui/container";
import { Mascot } from "@/components/ui/mascot";
import { Reveal } from "@/components/ui/reveal";
import { finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section id="contact" className="py-24 sm:py-36">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-brand-500 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            className="pointer-events-none absolute -top-16 -left-16 size-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 -bottom-20 size-72 rounded-full bg-brand-700/30 blur-2xl"
            aria-hidden="true"
          />

          <Mascot className="relative mx-auto size-16 drop-shadow-sm" />

          <h2 className="relative mt-6 text-[1.7rem] leading-[1.25] font-extrabold text-white sm:text-5xl sm:leading-[1.15] lg:text-[3.25rem]">
            {finalCta.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="relative mt-4 text-[15.5px] text-brand-50 sm:text-lg">
            {finalCta.body.map((line, i) => (
              <span key={line}>
                {line}
                {i < finalCta.body.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

          <div className="relative mt-9 flex justify-center">
            <PartnershipButton variant="inverse" size="lg">
              {finalCta.primaryCta.label}
            </PartnershipButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
