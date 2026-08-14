import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  /** Pass a href to show a back button; omit on top-level tab screens. */
  backHref?: string;
};

/** Plain header bar used across the app prototype screens. */
export function ScreenHeader({ title, subtitle, backHref }: ScreenHeaderProps) {
  return (
    <header className="flex items-center gap-2 border-b border-ink-100 px-4 py-3.5">
      {backHref ? (
        <Link
          href={backHref}
          aria-label="뒤로 가기"
          className="flex size-8 shrink-0 items-center justify-center rounded-full text-ink-600"
        >
          <ArrowRightIcon className="size-4.5 rotate-180" />
        </Link>
      ) : null}
      <div className="min-w-0">
        <h1 className="truncate text-[17px] font-bold text-ink-900">{title}</h1>
        {subtitle ? <p className="mt-0.5 truncate text-[12.5px] text-ink-400">{subtitle}</p> : null}
      </div>
    </header>
  );
}
