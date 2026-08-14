import Link from "next/link";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { moreMenuItems } from "@/lib/app-content";

export default function MorePage() {
  return (
    <div className="pb-6">
      <ScreenHeader title="더보기" />

      <div className="divide-y divide-ink-100 px-4">
        {moreMenuItems.map((item) => (
          <Link key={item.label} href={item.href} className="flex items-center justify-between py-3.5">
            <span className="text-[14.5px] font-semibold text-ink-800">{item.label}</span>
            <span className="text-ink-300">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
