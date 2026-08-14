import { ScreenHeader } from "@/components/app-shell/screen-header";
import { reservationNote, reservations } from "@/lib/app-content";

export default function ReservationsPage() {
  return (
    <div className="pb-6">
      <ScreenHeader title="예약" subtitle={`오늘 예약 ${reservations.length}건`} />

      <div className="space-y-2 p-4">
        {reservations.map((r) => (
          <div key={r.id} className="flex items-center gap-3 rounded-xl border border-ink-100 p-3">
            <span className="text-[14px] font-bold text-ink-900">{r.time}</span>
            <span className="flex-1 text-[14px] text-ink-600">
              {r.name} · {r.people}명
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${
                r.status === "신규" ? "bg-brand-50 text-brand-700" : "bg-mint-100 text-mint-500"
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>

      <p className="px-4 text-[12px] text-ink-400">{reservationNote}</p>
    </div>
  );
}
