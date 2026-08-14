import Link from "next/link";
import { notFound } from "next/navigation";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { menusByStore, stores } from "@/lib/app-content";

export default async function StoreMenusPage({ params }: { params: Promise<{ store: string }> }) {
  const { store: storeId } = await params;
  const store = stores.find((s) => s.id === storeId);
  const menus = menusByStore[storeId];
  if (!store || !menus) notFound();

  return (
    <div className="pb-6">
      <ScreenHeader title={store.name} subtitle="확인할 메뉴를 선택해요" backHref="/recipes" />

      <div className="space-y-2 p-4">
        {menus.map((menu) => (
          <Link
            key={menu.id}
            href={`/recipes/${storeId}/${menu.id}`}
            className="flex items-center justify-between rounded-xl border border-ink-100 p-4"
          >
            <span className="text-[14.5px] font-semibold text-ink-800">{menu.name}</span>
            <span className="text-ink-300">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
