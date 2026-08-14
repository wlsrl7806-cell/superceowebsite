import type { ComponentType } from "react";
import { BoxIcon, CalendarIcon, ChatIcon, CheckCircleIcon, type IconProps } from "@/components/ui/icons";
import { recentNotifications } from "@/lib/dashboard-content";

const icons: Record<(typeof recentNotifications.items)[number]["icon"], ComponentType<IconProps>> = {
  chat: ChatIcon,
  calendar: CalendarIcon,
  box: BoxIcon,
  checkCircle: CheckCircleIcon,
};

export function RecentNotifications() {
  return (
    <section aria-labelledby="recent-notifications-heading" className="mt-7 px-5">
      <p id="recent-notifications-heading" className="text-[15.5px] font-bold text-ink-900">
        {recentNotifications.title}
      </p>

      <div className="mt-3 divide-y divide-ink-50 overflow-hidden rounded-2xl bg-white shadow-soft">
        {recentNotifications.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.id} className="flex items-center gap-3 px-4 py-3.5">
              <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-50 text-ink-600">
                <Icon className="size-4.5" />
                {item.unread ? (
                  <span
                    className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-500 ring-2 ring-white"
                    aria-hidden="true"
                  />
                ) : null}
              </span>
              <span
                className={`flex-1 text-[14px] ${item.unread ? "font-bold text-ink-900" : "font-medium text-ink-600"}`}
              >
                {item.label}
              </span>
              <span className="shrink-0 text-[12px] text-ink-400">{item.time}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
