import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type FeatureSectionProps = {
  id?: string;
  eyebrow: string;
  headline: string[];
  body: string[];
  /** Desktop only — puts the screenshot on the left, text on the right. */
  reverse?: boolean;
  tone?: "cream" | "cream-soft";
  children: ReactNode;
};

/**
 * Shared "text + real screenshot" layout used by every feature section on
 * the homepage (reservation, review, inventory, order, message, checklist,
 * recipe). Mobile is always text-first, screenshot below; desktop
 * alternates left/right via `reverse`.
 */
export function FeatureSection({
  id,
  eyebrow,
  headline,
  body,
  reverse = false,
  tone = "cream",
  children,
}: FeatureSectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${tone === "cream-soft" ? "bg-cream-soft" : ""}`}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={`flex flex-col items-center lg:items-start ${reverse ? "lg:order-2" : ""}`}>
          <SectionHeading eyebrow={eyebrow} headline={headline} body={body} align="left" />
        </Reveal>

        <Reveal
          delay={150}
          className={`flex w-full justify-center ${reverse ? "lg:order-1 lg:justify-start" : "lg:justify-end"}`}
        >
          <div className="w-full max-w-[520px]">{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}
