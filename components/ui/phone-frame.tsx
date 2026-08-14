import Image from "next/image";
import type { ReactNode } from "react";

type PhoneFrameSize = "sm" | "md" | "lg";

type PhoneFrameProps = {
  size?: PhoneFrameSize;
  /**
   * Drop in a real screenshot later by passing `{ src, alt }` — see
   * public/screenshots/README.md. Until then, `children` renders a
   * hand-built approximation of the screen.
   */
  screenshot?: { src: string; alt: string };
  children?: ReactNode;
  className?: string;
  screenClassName?: string;
  showNotch?: boolean;
};

const frameClasses: Record<PhoneFrameSize, string> = {
  sm: "w-[164px] rounded-[1.6rem] border-[6px]",
  md: "w-[224px] rounded-[2.1rem] border-[7px]",
  lg: "w-[280px] rounded-[2.6rem] border-[9px]",
};

const screenRadius: Record<PhoneFrameSize, string> = {
  sm: "rounded-[1.1rem]",
  md: "rounded-[1.5rem]",
  lg: "rounded-[1.9rem]",
};

const notchClasses: Record<PhoneFrameSize, string> = {
  sm: "h-3 w-14",
  md: "h-3.5 w-[4.5rem]",
  lg: "h-4.5 w-24",
};

export function PhoneFrame({
  size = "md",
  screenshot,
  children,
  className = "",
  screenClassName = "",
  showNotch = true,
}: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] shrink-0 border-ink-900 bg-ink-900 shadow-card ${frameClasses[size]} ${className}`}
    >
      <div
        className={`relative h-full w-full overflow-hidden bg-cream-soft ${screenRadius[size]} ${screenClassName}`}
      >
        {screenshot ? (
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 60vw, 320px"
          />
        ) : (
          children
        )}
        {showNotch ? (
          <div
            className={`absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-ink-900 ${notchClasses[size]}`}
            aria-hidden="true"
          />
        ) : null}
      </div>
    </div>
  );
}
