import type { ReactNode } from "react";

/** A small "※ ..." aside — clarifies scope without reading as a normal clause. */
export function LegalNote({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-[13px] leading-relaxed text-ink-400">{children}</p>;
}