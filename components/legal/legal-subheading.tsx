/** A "가./나." style sub-heading beneath a numbered legal section. */
export function LegalSubheading({ children }: { children: string }) {
  return <h3 className="text-[15px] font-bold text-ink-800">{children}</h3>;
}