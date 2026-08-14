"use client";

import { useState } from "react";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { orderSmsDraft } from "@/lib/app-content";

export default function OrderSmsPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="발주 문자" subtitle="신선유통 사장님께 보내기" backHref="/inventory/order" />

      <div className="flex-1 p-4">
        <p className="text-[13px] font-semibold text-ink-500">문자 내용이 자동으로 작성됐어요</p>
        <div className="mt-2 rounded-xl border border-ink-100 p-3 text-[14px] leading-relaxed whitespace-pre-line text-ink-700">
          {orderSmsDraft}
        </div>
      </div>

      <div className="p-4">
        <button
          type="button"
          onClick={() => setSent(true)}
          disabled={sent}
          className={`block w-full rounded-xl py-3.5 text-center text-[15px] font-bold text-white ${
            sent ? "bg-mint-500" : "bg-ink-900"
          }`}
        >
          {sent ? "문자 발송 완료" : "바로 문자 발송"}
        </button>
      </div>
    </div>
  );
}
