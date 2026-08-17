import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { appScreens } from "@/lib/app-screens";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-36">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center text-center">
        <div className="animate-fade-up flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-[1.85rem] leading-[1.28] font-extrabold tracking-tight text-ink-900 sm:text-6xl sm:leading-[1.15] lg:text-[4.25rem]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink-500 sm:text-lg">
            {hero.body.map((line, i) => (
              <span key={line}>
                {line}
                {i < hero.body.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <div className="animate-float">
            <PhoneFrame size="xl" className="mx-auto !w-[390px]" showNotch={false}>
              <Image
                src={appScreens.main}
                alt="슈퍼사장 메인 화면"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 390px"
                className="object-contain"
              />
            </PhoneFrame>
          </div>
          <div
            className="pointer-events-none absolute -bottom-8 left-1/2 h-20 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-2xl"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}
