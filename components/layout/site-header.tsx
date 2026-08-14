"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { nav, siteMeta } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-cream/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <LogoMark className="size-8" />
          <span className="text-[17px] font-extrabold tracking-tight text-ink-900">{siteMeta.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#contact" size="md">
            {nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-ink-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.75px] w-5 rounded-full bg-current transition-transform duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.75px] w-5 rounded-full bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 pb-5">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-700 hover:bg-ink-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/#contact" size="md" className="mt-2 w-full" onClick={() => setOpen(false)}>
              {nav.cta}
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
