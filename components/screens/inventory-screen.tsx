import { ScreenChip, ScreenHeader } from "@/components/ui/screen-kit";

const items = [
  { name: "우유 1L", stock: "2개", low: true, checked: true },
  { name: "생크림", stock: "1개", low: true, checked: true },
  { name: "원두", stock: "12개", low: false, checked: false },
  { name: "종이컵", stock: "충분", low: false, checked: false },
];

/** 재고 확인 — step 1 of the inventory → order flow. */
export function InventoryScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="재고 확인" subtitle="부족한 품목을 선택해 주세요" />
      <div className="flex-1 space-y-1.5 px-3.5">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-2 rounded-xl border p-2.5 ${
              item.checked ? "border-brand-300 bg-brand-50" : "border-transparent bg-white"
            }`}
          >
            <span
              className={`flex size-4 shrink-0 items-center justify-center rounded-md border-[1.5px] ${
                item.checked ? "border-brand-500 bg-brand-500" : "border-ink-200 bg-white"
              }`}
            >
              {item.checked ? <span className="size-1.5 rounded-sm bg-white" /> : null}
            </span>
            <span className="flex-1 truncate text-[10.5px] font-semibold text-ink-800">{item.name}</span>
            <ScreenChip tone={item.low ? "red" : "ink"}>{item.low ? "부족" : item.stock}</ScreenChip>
          </div>
        ))}
      </div>
      <div className="mx-3.5 mt-2 rounded-full bg-ink-900 py-2.5 text-center text-[11px] font-bold text-white">
        발주 목록으로 이동 · 2
      </div>
    </div>
  );
}
