import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { footer } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 bg-cream-soft">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <LogoMark className="size-8" />
              <span className="text-[17px] font-extrabold text-ink-900">{footer.name}</span>
            </div>
            <p className="mt-3 text-[14px] text-ink-500">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            {footer.linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[13px] font-bold text-ink-400">{group.title}</p>
                <ul className="mt-3 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[14px] text-ink-600 hover:text-ink-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-ink-100 pt-6">
          <p className="text-[12.5px] text-ink-400">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
