import Link from "next/link";
import type { ComponentType } from "react";
import { BoxIcon, CalendarIcon, ChatIcon, CheckCircleIcon, type IconProps } from "@/components/ui/icons";
import { Mascot } from "@/components/ui/mascot";
import { aiBriefing } from "@/lib/dashboard-content";

const icons: Record<(typeof aiBriefing.items)[number]["icon"], ComponentType<IconProps>> = {
  box: BoxIcon,
  chat: ChatIcon,
  calendar: CalendarIcon,
  checkCircle: CheckCircleIcon,
};

// Each briefing item links to the screen that resolves it — tapping what
// needs attention is how a store owner is meant to act on the briefing.
const hrefs: Record<(typeof aiBriefing.items)[number]["icon"], string> = {
  box: "/inventory",
  chat: "/reviews",
  calendar: "/reservations",
  checkCircle: "/checklist",
};

/**
 * The first thing a store owner sees — deliberately the most prominent
 * card on the screen. Everything below is secondary to this.
 */
export function AiBriefingCard() {
  return (
    <section aria-labelledby="ai-briefing-heading" className="mx-5 mt-4">
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-sun-50 via-brand-50 to-sun-50 p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <Mascot className="size-11 shrink-0" />
          <div className="min-w-0">
            <p id="ai-briefing-heading" className="text-[12.5px] font-bold text-brand-700">
              {aiBriefing.title}
            </p>
            <p className="mt-0.5 text-[17px] leading-snug font-extrabold text-ink-900">{aiBriefing.lead}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {aiBriefing.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.label}>
                <Link
                  href={hrefs[item.icon]}
                  className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_1px_2px_rgba(22,24,29,0.04)]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-[14.5px] font-semibold text-ink-800">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
