import { BellIcon, ClockIcon } from "@/components/ui/icons";
import { ScreenChip, ScreenHeader } from "@/components/ui/screen-kit";

const reservations = [
  { time: "17:00", name: "김OO · 4명", status: "확정" },
  { time: "17:30", name: "이OO · 2명", status: "확정" },
  { time: "19:00", name: "박OO · 3명", status: "신규" },
];

export function ReservationScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="예약 알림" subtitle="오늘 예약 6건" />
      <div className="flex-1 space-y-2 px-3.5">
        {reservations.map((r) => (
          <div key={r.time + r.name} className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <ClockIcon className="size-3" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10.5px] font-bold whitespace-nowrap text-ink-900">{r.time}</p>
              <p className="truncate text-[9.5px] text-ink-400">{r.name}</p>
            </div>
            <ScreenChip tone={r.status === "신규" ? "brand" : "mint"}>{r.status}</ScreenChip>
          </div>
        ))}
        <div className="flex items-center gap-1.5 rounded-xl border border-dashed border-ink-200 p-2.5 text-ink-400">
          <BellIcon className="size-3" />
          <p className="text-[9.5px]">네이버 예약 알림을 실시간으로 확인해요</p>
        </div>
      </div>
    </div>
  );
}
