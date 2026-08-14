"use client";

import { useState } from "react";
import Link from "next/link";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { orderItems } from "@/lib/app-content";

export default function OrderPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allChecked = orderItems.every((item) => checked[item.id]);

  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="발주 목록" subtitle="수량을 확인하고 품목을 체크해요" backHref="/inventory" />

      <div className="flex-1 space-y-2 p-4">
        {orderItems.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <div key={item.id} className="rounded-xl border border-ink-100 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[14.5px] font-bold text-ink-900">{item.name}</span>
                <button
                  type="button"
                  onClick={() => setChecked((s) => ({ ...s, [item.id]: !s[item.id] }))}
                  className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${
                    isChecked ? "bg-mint-100 text-mint-500" : "bg-ink-50 text-ink-500"
                  }`}
                >
                  {isChecked ? "체크완료" : "체크하기"}
                </button>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[12.5px] text-ink-400">
                <span>거래처: {item.vendor}</span>
                <span className="font-semibold text-ink-700">{item.qty}개</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4">
        <Link
          href="/inventory/order/sms"
          aria-disabled={!allChecked}
          className={`block rounded-xl py-3.5 text-center text-[15px] font-bold text-white ${
            allChecked ? "bg-brand-500" : "pointer-events-none bg-ink-200"
          }`}
        >
          다음 · 문자 작성하기
        </Link>
      </div>
    </div>
  );
}
