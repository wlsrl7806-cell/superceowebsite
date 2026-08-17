import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  /** Anchor id, placed on the heading so section links (e.g. `#section-3`) land directly on it. */
  id?: string;
  children: ReactNode;
};

export function LegalSection({ title, id, children }: LegalSectionProps) {
  return (
    <section>
      <h2 id={id} className="scroll-mt-24 text-[16.5px] font-bold text-ink-900 sm:text-[18px]">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
