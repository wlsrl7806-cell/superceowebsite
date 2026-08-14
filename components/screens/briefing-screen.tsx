import { Mascot } from "@/components/ui/mascot";
import { BoxIcon, CalendarIcon, ChatIcon, CheckCircleIcon } from "@/components/ui/icons";
import { ScreenHeader } from "@/components/ui/screen-kit";

const briefingItems = [
  {
    Icon: BoxIcon,
    title: "우유 재고가 부족해요",
    body: "발주 목록에 바로 담을 수 있어요.",
  },
  {
    Icon: CalendarIcon,
    title: "17시 예약이 3건 있어요",
    body: "예약 현황을 미리 확인해 보세요.",
  },
  {
    Icon: ChatIcon,
    title: "답변이 필요한 리뷰 2개",
    body: "AI 초안으로 빠르게 답변해요.",
  },
];

export function BriefingScreen() {
  return (
    <div className="flex h-full flex-col pb-6">
      <ScreenHeader title="AI 운영브리핑" subtitle="오늘, 사장님이 확인하면 좋을 소식" />
      <div className="flex items-center gap-2 px-4">
        <Mascot className="size-9" />
        <div className="flex-1 rounded-2xl rounded-tl-sm bg-sun-100 px-3 py-2">
          <p className="text-[10px] leading-[1.5] text-ink-800">사장님, 오늘 확인할 일이 있어요.</p>
        </div>
      </div>
      <div className="mt-3 flex-1 space-y-2 px-3.5">
        {briefingItems.map(({ Icon, title, body }) => (
          <div key={title} className="flex items-start gap-2.5 rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(22,24,29,0.06)]">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Icon className="size-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10.5px] font-bold text-ink-900">{title}</p>
              <p className="mt-0.5 text-[9.5px] leading-snug text-ink-400">{body}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-1.5 rounded-xl border border-dashed border-brand-200 p-2.5 text-brand-600">
          <CheckCircleIcon className="size-3" />
          <p className="text-[9.5px] font-semibold">오늘 브리핑을 모두 확인했어요</p>
        </div>
      </div>
    </div>
  );
}
