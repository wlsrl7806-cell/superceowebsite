import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "ghostOnBrand";
export type ButtonSize = "md" | "lg";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white shadow-soft hover:bg-brand-600 active:bg-brand-700",
  secondary:
    "bg-white text-ink-800 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 active:bg-ink-100",
  ghost: "text-ink-700 hover:bg-ink-50 active:bg-ink-100",
  // For use on a brand-colored background (e.g. the final CTA panel).
  inverse: "bg-white text-brand-600 shadow-soft hover:bg-brand-50 active:bg-brand-100",
  ghostOnBrand: "text-white ring-1 ring-inset ring-white/30 hover:bg-white/10 active:bg-white/15",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/**
 * The visual style shared by every button-shaped control on the site —
 * exported so non-link triggers (e.g. PartnershipButton, which opens the
 * contact modal instead of navigating) can look identical without
 * duplicating the class list.
 */
export function buttonClassName({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = buttonClassName({ variant, size, className });

  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
