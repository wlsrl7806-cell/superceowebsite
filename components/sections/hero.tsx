import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { DashboardScreen } from "@/components/screens/dashboard-screen";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-[26rem] rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 size-80 rounded-full bg-sun-100/70 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-fade-up flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 text-[1.85rem] leading-[1.32] font-extrabold tracking-tight text-ink-900 sm:text-5xl sm:leading-[1.25] lg:text-[3.1rem]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-500 sm:text-lg">
            {hero.body.map((line, i) => (
              <span key={line}>
                {line}
                {i < hero.body.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="animate-float">
            <PhoneFrame size="lg" className="mx-auto">
              <DashboardScreen />
            </PhoneFrame>
          </div>
          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-56 -translate-x-1/2 rounded-full bg-brand-500/20 blur-2xl"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}
