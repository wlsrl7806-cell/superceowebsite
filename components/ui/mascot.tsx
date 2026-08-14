import Image from "next/image";

type MascotProps = {
  className?: string;
  /**
   * Drop in the real mascot artwork later by passing a path, e.g.
   * `src="/brand/mascot.png"` — see public/brand/README.md. Until then this
   * renders a simple hand-built placeholder in the brand colors.
   */
  src?: string;
};

/**
 * The brand's small helper character — a friendly, capable "manager" in
 * the app's blue with a small red cape accent. Used sparingly: the hero /
 * AI briefing card, empty states, and the final CTA. Never the star of a
 * whole section.
 */
export function Mascot({ className, src }: MascotProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt="슈퍼사장 마스코트"
        width={200}
        height={200}
        className={className}
        unoptimized
      />
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="슈퍼사장 마스코트">
      {/* cape */}
      <path
        d="M28 34c-9 4-15 14-14 27 5-8 10-12 15-14-2-5-2-9-1-13Z"
        fill="var(--color-red-500)"
      />
      <path
        d="M72 34c9 4 15 14 14 27-5-8-10-12-15-14 2-5 2-9 1-13Z"
        fill="var(--color-red-500)"
      />

      {/* head */}
      <circle cx="50" cy="46" r="26" fill="var(--color-brand-500)" />

      {/* mask / face patch */}
      <path
        d="M27 42c0-6 4-9 10-9h26c6 0 10 3 10 9 0 8-6 15-23 15S27 50 27 42Z"
        fill="var(--color-brand-50)"
      />

      {/* eyes */}
      <ellipse cx="42" cy="43" rx="3" ry="3.6" fill="var(--color-ink-900)" />
      <ellipse cx="58" cy="43" rx="3" ry="3.6" fill="var(--color-ink-900)" />
      <ellipse cx="43" cy="41.6" rx="1" ry="1.2" fill="#fff" />
      <ellipse cx="59" cy="41.6" rx="1" ry="1.2" fill="#fff" />

      {/* smile */}
      <path
        d="M44 50c2.4 2 9.6 2 12 0"
        stroke="var(--color-ink-900)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* blush */}
      <ellipse cx="33" cy="49" rx="3.6" ry="2.2" fill="var(--color-red-500)" opacity="0.28" />
      <ellipse cx="67" cy="49" rx="3.6" ry="2.2" fill="var(--color-red-500)" opacity="0.28" />

      {/* hero emblem */}
      <path
        d="m50 62 1.8 3.7 4 .6-3 2.9.7 4-3.5-1.9-3.5 1.9.7-4-3-2.9 4-.6Z"
        fill="#fff"
      />
    </svg>
  );
}
