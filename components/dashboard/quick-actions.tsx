import Link from "next/link";
import type { ComponentType } from "react";
import { BoxIcon, CalendarIcon, CartIcon, type IconProps, SunriseIcon } from "@/components/ui/icons";
import { quickActions } from "@/lib/dashboard-content";

const icons: Record<(typeof quickActions.items)[number]["icon"], ComponentType<IconProps>> = {
  sunrise: SunriseIcon,
  box: BoxIcon,
  cart: CartIcon,
  calendar: CalendarIcon,
};

const hrefs: Record<(typeof quickActions.items)[number]["id"], string> = {
  open: "/checklist",
  inventory: "/inventory",
  order: "/inventory",
  reservation: "/reservations",
};

export function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="mt-7 px-5">
      <p id="quick-actions-heading" className="text-[15.5px] font-bold text-ink-900">
        {quickActions.title}
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2.5">
        {quickActions.items.map((action) => {
          const Icon = icons[action.icon];
          return (
            <Link
              key={action.id}
              href={hrefs[action.id]}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white py-4 shadow-soft transition-transform active:scale-95"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon className="size-5" />
              </span>
              <span className="text-[12.5px] font-bold text-ink-700">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
