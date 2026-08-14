import type { ReactNode } from "react";
import { CheckIcon } from "./icons";

/**
 * Small building blocks shared by the hand-built phone screen mockups
 * (components/screens/*). Keeping them here avoids repeating the same
 * tiny-UI styling in every screen file.
 */

export function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="px-4 pt-8 pb-2.5">
      <p className="text-[13px] font-bold text-ink-900">{title}</p>
      {subtitle ? <p className="mt-0.5 text-[10px] text-ink-400">{subtitle}</p> : null}
    </div>
  );
}

export function ScreenCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(22,24,29,0.06)] ${className}`}>
      {children}
    </div>
  );
}

const chipTones = {
  brand: "bg-brand-50 text-brand-700",
  sun: "bg-sun-100 text-brand-700",
  mint: "bg-mint-100 text-mint-500",
  ink: "bg-ink-50 text-ink-500",
  // Small accent only — never used as a section/background color.
  red: "bg-red-100 text-red-600",
};

export function ScreenChip({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: keyof typeof chipTones;
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold ${chipTones[tone]}`}>
      {children}
    </span>
  );
}

export function ScreenCheckRow({
  label,
  meta,
  checked = false,
}: {
  label: string;
  meta?: string;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded-full ${
          checked ? "bg-brand-500" : "bg-ink-100"
        }`}
      >
        {checked ? <CheckIcon className="size-2.5 text-white" strokeWidth={2.5} /> : null}
      </span>
      <span className={`flex-1 text-[11px] ${checked ? "text-ink-400 line-through" : "text-ink-800"}`}>
        {label}
      </span>
      {meta ? <span className="text-[10px] font-semibold text-ink-400">{meta}</span> : null}
    </div>
  );
}

export function ScreenBottomNav({ active }: { active: number }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-ink-100 bg-white/95 py-2.5 backdrop-blur">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === active ? "w-4 bg-brand-500" : "w-1.5 bg-ink-200"
          }`}
        />
      ))}
    </div>
  );
}
