type LegalTableProps = {
  head: [string, string];
  rows: [string, string][];
};

/** A two-column table (e.g. 수탁자/위탁업무), horizontally scrollable so it never overflows the page. */
export function LegalTable({ head, rows }: LegalTableProps) {
  return (
    <div className="mt-3 overflow-x-auto rounded-xl border border-ink-100">
      <table className="w-full min-w-[420px] border-collapse text-left text-[13.5px]">
        <thead>
          <tr className="bg-cream-soft">
            <th scope="col" className="border-b border-ink-100 px-4 py-2.5 font-bold text-ink-900">
              {head[0]}
            </th>
            <th scope="col" className="border-b border-ink-100 px-4 py-2.5 font-bold text-ink-900">
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-b border-ink-100 last:border-b-0">
              <td className="px-4 py-2.5 align-top text-ink-600">{a}</td>
              <td className="px-4 py-2.5 align-top text-ink-600">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}