import { RecipeScreen } from "@/components/screens/recipe-screen";
import { Container } from "@/components/ui/container";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { recipes } from "@/lib/content";

export function Recipes() {
  return (
    <section className="bg-cream-soft py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center lg:items-start">
          <SectionHeading eyebrow={recipes.eyebrow} headline={recipes.headline} align="left" />

          <ol className="mt-9 w-full max-w-sm space-y-1">
            {recipes.steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                {i < recipes.steps.length - 1 ? (
                  <span className="absolute top-8 left-[15px] h-full w-px bg-ink-200" aria-hidden="true" />
                ) : null}
                <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-extrabold text-brand-600 shadow-soft">
                  {i + 1}
                </span>
                <div className="pt-0.5 text-left">
                  <p className="text-[15px] font-bold text-ink-900">{step.title}</p>
                  <p className="mt-0.5 text-[13.5px] text-ink-500">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneFrame size="lg">
            <RecipeScreen />
          </PhoneFrame>
        </div>
      </Container>
    </section>
  );
}
