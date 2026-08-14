import type { Metadata } from "next";
import { AiBriefingCard } from "@/components/dashboard/ai-briefing-card";
import { BottomNav } from "@/components/dashboard/bottom-nav";
import { GreetingHeader } from "@/components/dashboard/greeting-header";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentNotifications } from "@/components/dashboard/recent-notifications";
import { TodayTasks } from "@/components/dashboard/today-tasks";

export const metadata: Metadata = {
  title: "메인 대시보드 | 슈퍼사장",
  description: "사장님이 오늘 확인할 일을 한눈에 보여주는 슈퍼사장 앱의 메인 화면입니다.",
};

/**
 * The 슈퍼사장 app's main dashboard screen — a standalone app-shell route,
 * not a marketing page (no site header/footer; see app/(marketing)).
 *
 * Full-bleed on an actual phone; presented inside a device frame on larger
 * screens so it can be reviewed on desktop without looking stretched.
 */
export default function DashboardPage() {
  return (
    <div className="flex min-h-[100dvh] justify-center bg-ink-100 md:items-center md:py-10">
      <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-cream-soft md:h-[860px] md:w-[400px] md:rounded-[3rem] md:border-[10px] md:border-ink-900 md:shadow-2xl">
        <div className="flex-1 overflow-y-auto pb-6">
          <GreetingHeader />
          <AiBriefingCard />
          <QuickActions />
          <TodayTasks />
          <RecentNotifications />
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
