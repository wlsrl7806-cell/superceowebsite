import { MessageIcon, SendIcon } from "@/components/ui/icons";
import { ScreenHeader } from "@/components/ui/screen-kit";

/** 문자 자동 작성 + 바로 문자 발송 — steps 5–6 of the inventory → order flow. */
export function SmsScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="발주 문자" subtitle="신선유통 사장님께 보내기" />
      <div className="flex-1 px-3.5">
        <div className="flex items-center gap-1.5 text-brand-600">
          <MessageIcon className="size-3.5" />
          <p className="text-[10px] font-bold">문자 내용이 자동으로 작성됐어요</p>
        </div>
        <div className="mt-2 rounded-xl bg-white p-3 text-[10px] leading-[1.6] text-ink-700 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
          안녕하세요, 사장님!
          <br />
          다음 품목 발주 부탁드립니다.
          <br />
          <br />
          · 우유 1L — 10개
          <br />
          · 생크림 — 5개
          <br />
          <br />
          감사합니다 :)
        </div>
      </div>
      <div className="mx-3.5 mt-2 flex items-center justify-center gap-1.5 rounded-full bg-ink-900 py-2.5 text-[11px] font-bold text-white">
        <SendIcon className="size-3.5" />
        바로 문자 발송
      </div>
    </div>
  );
}
