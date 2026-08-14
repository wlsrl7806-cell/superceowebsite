import { Mascot } from "@/components/ui/mascot";
import { BoxIcon, CalendarIcon, CartIcon, SunriseIcon } from "@/components/ui/icons";
import { ScreenBottomNav } from "@/components/ui/screen-kit";
import { hero } from "@/lib/content";

const quickActionIcons = { sunrise: SunriseIcon, box: BoxIcon, cart: CartIcon, calendar: CalendarIcon };

/**
 * The hero dashboard mockup — the single most important screen on the site.
 * Deliberately shows only 빠른작업 + AI 운영브리핑, per the product brief.
 */
export function DashboardScreen() {
  return (
    <div className="flex h-full flex-col px-3.5 pt-8 pb-14">
      <div className="flex items-center justify-between px-0.5">
        <div>
          <p className="text-[10px] font-bold text-ink-900">{hero.greeting}</p>
          <p className="mt-0.5 text-[9px] text-ink-400">{hero.todayCount}</p>
        </div>
        <span className="flex size-6 items-center justify-center rounded-full bg-ink-50 text-[10px]">
          🔔
        </span>
      </div>

      <div className="relative mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-sun-100 via-sun-100 to-brand-50 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold text-brand-700">{hero.briefingTitle}</p>
          <Mascot className="size-8 shrink-0" />
        </div>
        <ul className="mt-1.5 space-y-1">
          {hero.briefingItems.map((item) => (
            <li key={item.text} className="flex items-start gap-1.5 text-[10px] leading-[1.45] text-ink-800">
              <span aria-hidden="true">{item.emoji}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-3.5 px-0.5 text-[10px] font-bold text-ink-500">{hero.quickActionsTitle}</p>
      <div className="mt-1.5 grid flex-1 grid-cols-2 gap-2">
        {hero.quickActions.map(({ label, icon }) => {
          const Icon = quickActionIcons[icon];
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

      <ScreenBottomNav active={0} />
    </div>
  );
}
