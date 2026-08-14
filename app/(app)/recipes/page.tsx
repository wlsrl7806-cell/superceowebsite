import Link from "next/link";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { stores } from "@/lib/app-content";

export default function RecipesPage() {
  return (
    <div className="pb-6">
      <ScreenHeader title="레시피" subtitle="레시피를 확인할 매장을 선택해요" />

      <div className="space-y-2 p-4">
        {stores.map((store) => (
          <Link
            key={store.id}
            href={`/recipes/${store.id}`}
            className="flex items-center justify-between rounded-xl border border-ink-100 p-4"
          >
            <span className="text-[14.5px] font-semibold text-ink-800">{store.name}</span>
            <span className="text-ink-300">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
