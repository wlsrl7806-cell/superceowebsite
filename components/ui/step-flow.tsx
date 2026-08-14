import { ArrowRightIcon } from "./icons";

export type Step = {
  title: string;
  body: string;
};

/**
 * A horizontal, order-preserving sequence of steps. Used for flows where the
 * exact order communicates the product behavior (e.g. inventory → order),
 * so it must never be reflowed into an unordered grid.
 */
export function StepFlow({ steps }: { steps: Step[] }) {
  return (
    <ol className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
      {steps.map((step, i) => (
        <li key={step.title} className="flex shrink-0 snap-start items-stretch gap-3">
          <div className="flex w-[168px] flex-col rounded-2xl bg-white p-4 shadow-soft sm:w-[192px]">
            <span className="flex size-7 items-center justify-center rounded-full bg-brand-50 text-[13px] font-extrabold text-brand-600">
              {i + 1}
            </span>
            <p className="mt-3 text-[15px] font-bold text-ink-900">{step.title}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">{step.body}</p>
          </div>
          {i < steps.length - 1 ? (
            <span className="flex items-center text-ink-200" aria-hidden="true">
              <ArrowRightIcon className="size-5" />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
