import { BookIcon } from "@/components/ui/icons";
import { ScreenChip, ScreenHeader } from "@/components/ui/screen-kit";

const ingredients = ["에스프레소 2샷", "우유 150ml", "바닐라시럽 15ml", "얼음 적당량"];
const steps = ["샷을 먼저 추출해요", "얼음과 시럽을 넣어요", "우유를 붓고 저어요"];

/** 레시피 확인 — the last step of 매장 선택 → 레시피 → 메뉴 선택 → 레시피 확인. */
export function RecipeScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="바닐라 라떼" subtitle="7번 매장 · 음료 레시피" />
      <div className="flex-1 space-y-3 px-3.5">
        <div className="flex gap-1.5">
          <ScreenChip tone="brand">HOT / ICE</ScreenChip>
          <ScreenChip tone="ink">3분</ScreenChip>
        </div>
        <div>
          <p className="text-[9.5px] font-bold text-ink-500">재료</p>
          <div className="mt-1.5 space-y-1 rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
            {ingredients.map((i) => (
              <p key={i} className="text-[10px] text-ink-700">
                · {i}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[9.5px] font-bold text-ink-500">만드는 순서</p>
          <div className="mt-1.5 space-y-1.5">
            {steps.map((s, i) => (
              <div key={s} className="flex items-start gap-2">
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[8.5px] font-bold text-brand-700">
                  {i + 1}
                </span>
                <p className="text-[10px] leading-snug text-ink-700">{s}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-xl border border-dashed border-ink-200 p-2.5">
          <BookIcon className="mt-0.5 size-3 shrink-0 text-ink-400" />
          <p className="text-[9.5px] leading-snug text-ink-400">
            같은 매장 직원 누구나 이 레시피를 볼 수 있어요.
          </p>
        </div>
      </div>
      <div className="mx-3.5 mt-2 rounded-full bg-ink-900 py-2.5 text-center text-[11px] font-bold text-white">
        직원에게 공유하기
      </div>
    </div>
  );
}
