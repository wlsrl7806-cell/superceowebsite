/** A term/description list (e.g. 보유기간, 담당자 연락처) rendered as a semantic <dl>. */
export function LegalFactList({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-3 divide-y divide-ink-100 overflow-hidden rounded-xl border border-ink-100 text-[14px]">
      {items.map(([term, description]) => (
        <div key={term} className="flex flex-col gap-0.5 px-4 py-2.5 sm:flex-row sm:gap-3">
          <dt className="shrink-0 font-bold text-ink-800 sm:w-40">{term}</dt>
          <dd className="text-ink-600">{description}</dd>
        </div>
      ))}
    </dl>
  );
}