import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
};

/**
 * Shared frame for /privacy and /terms. These are launch-prep placeholders
 * — the notice banner says so plainly rather than pretending otherwise.
 */
export function LegalPageShell({ eyebrow, title, updated, children }: LegalPageShellProps) {
  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-700">
          <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-5 text-[1.85rem] leading-[1.3] font-extrabold text-ink-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-[13px] text-ink-400">{updated}</p>

        <div className="mt-8 rounded-2xl bg-sun-50 p-5 text-[13.5px] leading-relaxed text-ink-600">
          이 페이지는 정식 출시를 준비하며 작성한 예시 템플릿입니다. 실제 서비스 운영 전 법률 전문가의 검토를 거쳐
          확정될 예정입니다.
        </div>

        <div className="mt-10 space-y-12 text-[15px] leading-relaxed text-ink-600">{children}</div>
      </Container>
    </article>
  );
}
