import type { ReactNode } from "react";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[16.5px] font-bold text-ink-900">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}
