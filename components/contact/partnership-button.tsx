"use client";

import type { ReactNode } from "react";
import { useContactModal } from "@/components/contact/contact-provider";
import { buttonClassName, type ButtonSize, type ButtonVariant } from "@/components/ui/button";

type PartnershipButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  /** Runs in addition to opening the modal — e.g. closing the mobile nav drawer first. */
  onClick?: () => void;
};

/**
 * Looks exactly like <Button>, but opens the partnership inquiry modal
 * instead of navigating. Used everywhere the "제휴 문의" CTA appears
 * (header, hero, final CTA) so they all share one modal instance.
 */
export function PartnershipButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
}: PartnershipButtonProps) {
  const { open } = useContactModal();

  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={buttonClassName({ variant, size, className })}
    >
      {children}
    </button>
  );
}
