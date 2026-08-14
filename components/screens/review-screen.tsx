import { CheckCircleIcon, StarIcon } from "@/components/ui/icons";
import { ScreenChip, ScreenHeader } from "@/components/ui/screen-kit";

export function ReviewScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="리뷰" subtitle="답변이 필요한 리뷰 2개" />
      <div className="flex-1 space-y-2.5 px-3.5">
        <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
          <div className="flex items-center justify-between">
            <div className="flex gap-0.5 text-sun-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-2.5" fill="currentColor" />
              ))}
            </div>
            <ScreenChip tone="red">답변 대기</ScreenChip>
          </div>
          <p className="mt-1.5 text-[10px] leading-snug text-ink-700">
            직원분들이 친절하고 고기가 맛있어요.
          </p>

          <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-sun-50 px-2 py-1.5 text-brand-600">
            <CheckCircleIcon className="size-3" />
            <p className="text-[9.5px] font-bold">AI 답변 초안 준비 완료</p>
          </div>
          <div className="mt-2 rounded-full bg-ink-900 py-1.5 text-center text-[9.5px] font-bold text-white">
            답변 확인
          </div>
        </div>

        <div className="rounded-xl bg-white p-3 opacity-70 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
          <div className="flex gap-0.5 text-sun-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-2.5" fill="currentColor" />
            ))}
          </div>
          <p className="mt-1.5 text-[10px] leading-snug text-ink-700">재방문 의사 100%예요, 감사합니다!</p>
        </div>
      </div>
    </div>
  );
}
