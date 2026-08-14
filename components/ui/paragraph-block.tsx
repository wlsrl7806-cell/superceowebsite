type ParagraphBlockProps = {
  /** Each inner array is one paragraph's lines (joined with <br/>); each
   * outer entry becomes its own spaced <p>. */
  paragraphs: string[][];
  className?: string;
  align?: "center" | "left";
};

/** Stacked editorial paragraphs — used across the /story page's body copy. */
export function ParagraphBlock({ paragraphs, className = "", align = "center" }: ParagraphBlockProps) {
  return (
    <div
      className={`space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-lg ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {paragraphs.map((lines) => (
        <p key={lines.join(" ")}>
          {lines.map((line, i) => (
            <span key={line}>
              {line}
              {i < lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
