import { BoxIcon, CalendarIcon, CartIcon, CheckCircleIcon, type IconProps } from "@/components/ui/icons";
import { ScreenBottomNav } from "@/components/ui/screen-kit";
import { storyExperience } from "@/lib/story-content";
import type { ComponentType } from "react";

const quickActionIcons: Record<string, ComponentType<IconProps>> = {
  예약: CalendarIcon,
  재고: BoxIcon,
  발주: CartIcon,
  체크리스트: CheckCircleIcon,
};

/** The "first screen" mockup for the /story page — today's tasks first. */
export function StoryScreen() {
  const { greeting, todayCount, items, quickActionsTitle, quickActions } = storyExperience.screen;

  return (
    <div className="flex h-full flex-col px-3.5 pt-8 pb-14">
      <div>
        <p className="text-[12.5px] font-bold text-ink-900">{greeting}</p>
        <p className="mt-1 text-[10.5px] text-ink-400">{todayCount}</p>
      </div>

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-white px-3.5 py-3 text-[11px] font-semibold text-ink-800 shadow-[0_1px_2px_rgba(22,24,29,0.06)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[10px] font-bold text-ink-500">{quickActionsTitle}</p>
      <div className="mt-1.5 grid grid-cols-2 gap-2">
        {quickActions.map((label) => {
          const Icon = quickActionIcons[label];
          return (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(22,24,29,0.06)]"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Icon className="size-3.5" />
              </span>
              <span className="text-[10px] font-semibold text-ink-800">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="flex-1" />
      <ScreenBottomNav active={0} />
    </div>
  );
}
