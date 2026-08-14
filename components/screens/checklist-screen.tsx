import { ChevronDownIcon, MoonIcon, SunriseIcon } from "@/components/ui/icons";
import { ScreenCheckRow, ScreenChip, ScreenHeader } from "@/components/ui/screen-kit";

export function ChecklistScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="체크리스트" subtitle="오픈부터 마감까지" />
      <div className="flex-1 space-y-2.5 px-3.5">
        <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="flex size-5 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <SunriseIcon className="size-3" />
              </span>
              <p className="text-[11px] font-bold text-ink-900">오픈 준비</p>
              <ScreenChip tone="brand">2/3</ScreenChip>
            </div>
            <ChevronDownIcon className="size-3 text-ink-400" />
          </div>
          <div className="mt-1.5 divide-y divide-ink-50 border-t border-ink-50 pl-1">
            <ScreenCheckRow label="POS 전원 확인" checked />
            <ScreenCheckRow label="홀 청소" checked />
            <ScreenCheckRow label="냉장고 온도 확인" />
          </div>
        </div>

        <div className="rounded-xl bg-white p-3 opacity-80 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="flex size-5 items-center justify-center rounded-md bg-ink-50 text-ink-500">
                <MoonIcon className="size-3" />
              </span>
              <p className="text-[11px] font-bold text-ink-900">마감 업무</p>
              <ScreenChip tone="ink">0/3</ScreenChip>
            </div>
            <ChevronDownIcon className="size-3 -rotate-90 text-ink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
