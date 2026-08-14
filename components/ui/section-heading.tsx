type SectionHeadingProps = {
  eyebrow?: string;
  headline: string[];
  body?: string | string[];
  align?: "center" | "left";
  className?: string;
  size?: "md" | "lg";
};

export function SectionHeading({
  eyebrow,
  headline,
  body,
  align = "center",
  className = "",
  size = "md",
}: SectionHeadingProps) {
  const bodyLines = body ? (Array.isArray(body) ? body : [body]) : [];
  const alignClasses = align === "center" ? "items-center text-center" : "items-start text-left";
  // Base sizes stay conservative — many of these headlines are two short
  // Korean lines that must not wrap into a third line on a ~360-390px
  // phone; the dramatic scale-up only kicks in from `sm` and up.
  const headlineSize =
    size === "lg"
      ? "text-[1.6rem] leading-[1.3] sm:text-5xl sm:leading-[1.15] lg:text-[4rem]"
      : "text-[1.55rem] leading-[1.3] sm:text-4xl sm:leading-[1.2] lg:text-[3.25rem]";

  return (
    <div className={`flex flex-col ${alignClasses} ${className}`}>
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-700">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-extrabold text-ink-900 ${headlineSize}`}>
        {headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      {bodyLines.length > 0 ? (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-500 sm:text-lg">
          {bodyLines.map((line, i) => (
            <span key={line}>
              {line}
              {i < bodyLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}
