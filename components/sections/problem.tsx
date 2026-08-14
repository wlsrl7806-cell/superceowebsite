import type { ComponentType } from "react";
import { Container } from "@/components/ui/container";
import {
  ArrowRightIcon,
  BookIcon,
  BoxIcon,
  CalculatorIcon,
  CalendarIcon,
  ChatIcon,
  CheckCircleIcon,
  TruckIcon,
  type IconProps,
} from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo-mark";
import { SectionHeading } from "@/components/ui/section-heading";
import { problem } from "@/lib/content";

const icons: Record<(typeof problem.tasks)[number]["icon"], ComponentType<IconProps>> = {
  box: BoxIcon,
  truck: TruckIcon,
  checkCircle: CheckCircleIcon,
  calendar: CalendarIcon,
  chat: ChatIcon,
  book: BookIcon,
  calculator: CalculatorIcon,
};

// A small fixed tilt pattern — keeps the grid feeling hand-placed without
// relying on random values that would mismatch between server and client.
const tilts = ["-rotate-1", "rotate-1", "rotate-0", "rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];

export function Problem() {
  return (
    <section id="service" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={problem.eyebrow} headline={problem.headline} />

        {/* Scattered — everything a store owner has to keep in their head */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {problem.tasks.map((task, i) => {
            const Icon = icons[task.icon];
            return (
              <div
                key={task.label}
                className={`flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 sm:p-6 ${tilts[i % tilts.length]}`}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="size-5" />
                </span>
                <p className="text-[14.5px] leading-snug font-semibold text-ink-800 sm:text-[15px]">
                  {task.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Resolved — it all lands in one place */}
        <div className="mt-3 flex justify-center">
          <ArrowRightIcon className="size-6 rotate-90 text-ink-200" aria-hidden="true" />
        </div>

        <div className="mx-auto mt-3 flex max-w-lg flex-col items-center gap-3 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 px-8 py-9 text-center shadow-soft sm:px-12 sm:py-11">
          <div className="rounded-2xl bg-white p-2 shadow-soft">
            <LogoMark className="size-8" />
          </div>
          <p className="text-[15px] font-bold text-white">{problem.resolved.title}</p>
          <p className="text-[14.5px] leading-relaxed text-white/70 sm:text-[15.5px]">
            {problem.resolved.body.map((line, i) => (
              <span key={line}>
                {line}
                {i < problem.resolved.body.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
