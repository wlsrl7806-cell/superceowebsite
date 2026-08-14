import { ScreenChip, ScreenHeader } from "@/components/ui/screen-kit";

const orderItems = [
  { name: "우유 1L", qty: 10, unit: "개" },
  { name: "생크림", qty: 5, unit: "개" },
];

/** 발주 품목 이동 + 품목 체크 — steps 3–4 of the inventory → order flow. */
export function OrderScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="발주 목록" subtitle="수량을 확인해 주세요" />
      <div className="flex-1 space-y-2 px-3.5">
        {orderItems.map((item) => (
          <div key={item.name} className="rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
            <div className="flex items-center justify-between">
              <span className="text-[10.5px] font-bold text-ink-900">{item.name}</span>
              <ScreenChip tone="mint">체크완료</ScreenChip>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[9.5px] text-ink-400">거래처: 신선유통</span>
              <div className="flex items-center gap-1.5 rounded-full bg-ink-50 px-1.5 py-0.5">
                <span className="flex size-3.5 items-center justify-center text-[10px] text-ink-500">–</span>
                <span className="text-[9.5px] font-bold text-ink-800">
                  {item.qty}
                  {item.unit}
                </span>
                <span className="flex size-3.5 items-center justify-center text-[10px] text-ink-500">+</span>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-ink-200 p-2.5 text-center text-[9.5px] text-ink-400">
          품목을 모두 체크했어요
        </div>
      </div>
      <div className="mx-3.5 mt-2 rounded-full bg-brand-500 py-2.5 text-center text-[11px] font-bold text-white">
        다음 · 문자 작성하기
      </div>
    </div>
  );
}
