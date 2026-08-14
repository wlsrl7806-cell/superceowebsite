"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import { BoxIcon, CheckCircleIcon, HomeIcon, type IconProps, MoreIcon } from "@/components/ui/icons";
import { bottomNav } from "@/lib/dashboard-content";

const icons: Record<(typeof bottomNav)[number]["icon"], ComponentType<IconProps>> = {
  home: HomeIcon,
  checkCircle: CheckCircleIcon,
  box: BoxIcon,
  more: MoreIcon,
};

const hrefs: Record<(typeof bottomNav)[number]["id"], string> = {
  home: "/dashboard",
  checklist: "/checklist",
  inventory: "/inventory",
  more: "/more",
};

/**
 * The app's persistent tab bar. Real navigation (not just a visual "active"
 * toggle) — this is the entry point into the rest of the prototype.
 */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="앱 탭 메뉴"
      className="flex items-center justify-around border-t border-ink-100 bg-white/95 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur"
    >
      {bottomNav.map((tab) => {
        const Icon = icons[tab.icon];
        const href = hrefs[tab.id];
        const isActive = pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
        return (
          <Link
            key={tab.id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className="flex flex-col items-center gap-1 px-3 py-1"
          >
            <Icon className={`size-5 ${isActive ? "text-brand-600" : "text-ink-400"}`} strokeWidth={isActive ? 2.1 : 1.75} />
            <span className={`text-[10.5px] font-semibold ${isActive ? "text-brand-600" : "text-ink-400"}`}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
