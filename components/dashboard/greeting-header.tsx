import { BellIcon } from "@/components/ui/icons";
import { greeting } from "@/lib/dashboard-content";

export function GreetingHeader() {
  return (
    <header className="flex items-center justify-between px-5 pt-3">
      <div>
        <p className="text-[21px] font-extrabold tracking-tight text-ink-900">{greeting.message}</p>
        <p className="mt-1 text-[13.5px] text-ink-500">{greeting.subtext}</p>
      </div>
      <button
        type="button"
        aria-label="알림"
        className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-soft transition-transform active:scale-95"
      >
        <BellIcon className="size-5 text-ink-700" />
        <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-red-500 ring-2 ring-white" aria-hidden="true" />
      </button>
    </header>
  );
}
