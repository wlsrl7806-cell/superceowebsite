"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms — stagger multiple Reveals in the same section by offsetting this. */
  delay?: number;
};

/**
 * Fades + lifts content into place the first time it scrolls into view.
 * This is how the page's "scroll tells a story" pacing is built — every
 * storytelling section reveals itself rather than just being static.
 *
 * Only used below the fold (nothing above-the-fold depends on JS to be
 * visible), so the standard scroll-reveal trade-off — content needs
 * JavaScript to become visible — is an acceptable one here.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
