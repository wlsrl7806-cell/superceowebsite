import { notFound } from "next/navigation";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { menusByStore, recipeDetails, stores } from "@/lib/app-content";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ store: string; menu: string }>;
}) {
  const { store: storeId, menu: menuId } = await params;
  const store = stores.find((s) => s.id === storeId);
  const menu = menusByStore[storeId]?.find((m) => m.id === menuId);
  const recipe = recipeDetails[menuId];
  if (!store || !menu || !recipe) notFound();

  return (
    <div className="pb-6">
      <ScreenHeader title={menu.name} subtitle={`${store.name} · 레시피`} backHref={`/recipes/${storeId}`} />

      <div className="space-y-5 p-4">
        <div>
          <p className="text-[13px] font-bold text-ink-500">재료</p>
          <ul className="mt-2 space-y-1 rounded-xl border border-ink-100 p-3">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="text-[14px] text-ink-700">
                · {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-bold text-ink-500">만드는 순서</p>
          <ol className="mt-2 space-y-2">
            {recipe.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-bold text-brand-600">
                  {i + 1}
                </span>
                <span className="text-[14px] text-ink-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
