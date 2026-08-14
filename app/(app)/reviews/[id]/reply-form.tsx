"use client";

import { useState } from "react";

export function ReviewReplyForm({
  initialDraft,
  alreadySent,
}: {
  initialDraft: string;
  alreadySent: boolean;
}) {
  const [draft, setDraft] = useState(initialDraft);
  const [sent, setSent] = useState(alreadySent);

  return (
    <div>
      <p className="text-[13px] font-bold text-ink-500">AI 답변 초안</p>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        disabled={sent}
        rows={4}
        className="mt-2 w-full rounded-xl border border-ink-100 p-3 text-[14px] text-ink-800 disabled:bg-ink-50 disabled:text-ink-400"
      />
      <button
        type="button"
        onClick={() => setSent(true)}
        disabled={sent}
        className={`mt-3 w-full rounded-xl py-3 text-[15px] font-bold text-white ${sent ? "bg-mint-500" : "bg-ink-900"}`}
      >
        {sent ? "답변 완료" : "확인 후 답변 보내기"}
      </button>
    </div>
  );
}
