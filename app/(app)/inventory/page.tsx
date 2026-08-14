"use client";

import { useState } from "react";
import Link from "next/link";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { inventoryItems } from "@/lib/app-content";

export default function InventoryPage() {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(inventoryItems.filter((i) => i.low).map((i) => [i.id, true])),
  );
  const selectedCount = Object.values(selected).filter(Boolean).length;

  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="재고 확인" subtitle="부족한 품목을 선택해 발주 목록으로 보내요" />

      <div className="flex-1 space-y-2 p-4">
        {inventoryItems.map((item) => {
          const isChecked = !!selected[item.id];
          return (
            <button
              key={item.id}
              type="button"
              className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left ${
                isChecked ? "border-brand-300 bg-brand-50" : "border-ink-100"
              }`}
              onClick={() => setSelected((s) => ({ ...s, [item.id]: !s[item.id] }))}
            >
              <span
                className={`flex size-5 shrink-0 items-center justify-center rounded border ${
                  isChecked ? "border-brand-500 bg-brand-500 text-white" : "border-ink-300"
                }`}
              >
                {isChecked ? "✓" : ""}
              </span>
              <span className="flex-1 text-[14.5px] font-semibold text-ink-800">{item.name}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${
                  item.low ? "bg-red-100 text-red-600" : "bg-ink-50 text-ink-500"
                }`}
              >
                {item.low ? "부족" : item.stock}
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-4">
        <Link
          href="/inventory/order"
          className="block rounded-xl bg-ink-900 py-3.5 text-center text-[15px] font-bold text-white"
        >
          발주 목록으로 이동 · {selectedCount}
        </Link>
      </div>
    </div>
  );
}
