import { BoxIcon, CalendarIcon, CartIcon, SunriseIcon } from "@/components/ui/icons";
import { ScreenHeader } from "@/components/ui/screen-kit";

const actions = [
  { label: "오픈", caption: "오늘 오픈 준비 확인", Icon: SunriseIcon },
  { label: "재고", caption: "부족한 품목 확인", Icon: BoxIcon },
  { label: "발주", caption: "거래처에 문자 발송", Icon: CartIcon },
  { label: "예약", caption: "오늘 예약 3건", Icon: CalendarIcon },
];

/** 빠른작업 — a dedicated, spacious screen for the quick-actions spotlight. */
export function QuickActionsScreen() {
  return (
    <div className="flex h-full flex-col pb-8">
      <ScreenHeader title="빠른작업" subtitle="자주 하는 일을 바로 실행해요" />
      <div className="grid flex-1 grid-cols-2 gap-3 px-4">
        {actions.map(({ label, caption, Icon }) => (
          <div
            key={label}
            className="flex flex-col justify-between rounded-2xl bg-white p-3.5 shadow-[0_1px_2px_rgba(22,24,29,0.06)]"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon className="size-4.5" />
            </span>
            <div className="mt-3">
              <p className="text-[13px] font-extrabold text-ink-900">{label}</p>
              <p className="mt-0.5 text-[10px] leading-snug text-ink-400">{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
