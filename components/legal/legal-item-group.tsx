import type { ReactNode } from "react";

/**
 * A numbered sub-item within a legal section (e.g. "① 회원가입 및 계정관리"),
 * rendered as an h4 heading followed by its list/paragraph content.
 */
export function LegalItemGroup({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mt-4 first:mt-0">
      <h4 className="text-[14.5px] font-bold text-ink-800">{heading}</h4>
      <div className="mt-2">{children}</div>
    </div>
  );
}