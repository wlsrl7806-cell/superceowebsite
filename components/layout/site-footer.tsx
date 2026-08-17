import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { footer } from "@/lib/content";

/**
 * Minimal, vertically-stacked footer — brand, company info, policy links,
 * copyright, in that order, all left-aligned within a comfortable reading
 * width. No columns, no icons; whitespace does the separating.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 bg-cream-soft">
      <Container className="py-20 sm:py-24">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <LogoMark className="size-8" />
            <span className="text-[17px] font-extrabold text-ink-900">{footer.name}</span>
          </div>
          <p className="mt-3 text-[14px] text-ink-500">{footer.tagline}</p>

          <div className="mt-14">
            <p className="text-[12px] font-bold tracking-wide text-ink-400 uppercase">{footer.company.title}</p>
            <div className="mt-4 space-y-1.5">
              {footer.company.lines.map((line) => (
                <p key={line} className="text-[13.5px] leading-relaxed text-ink-500">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[12px] font-bold tracking-wide text-ink-400 uppercase">{footer.policyLinks.title}</p>
            <ul className="mt-4 space-y-2">
              {footer.policyLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-ink-600 hover:text-ink-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 border-t border-ink-100 pt-6">
            <p className="text-[12.5px] text-ink-400">{footer.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
