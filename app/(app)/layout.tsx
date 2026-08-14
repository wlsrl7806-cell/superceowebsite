import type { ReactNode } from "react";
import { BottomNav } from "@/components/dashboard/bottom-nav";

/**
 * Shared shell for the app prototype screens (checklist, inventory,
 * recipes, reservations, reviews, more). Deliberately plain — this is a
 * UX-flow prototype, not a visual design pass. Mirrors /dashboard's
 * container sizing so navigating between them doesn't jump around, but
 * skips the device-bezel styling.
 */
export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] justify-center bg-ink-50 md:items-center md:py-10">
      <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-white md:h-[860px] md:w-[400px] md:rounded-2xl md:border md:border-ink-200">
        <div className="flex-1 overflow-y-auto">{children}</div>
        <BottomNav />
      </div>
    </div>
  );
}
