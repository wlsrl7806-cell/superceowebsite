import { Container } from "@/components/ui/container";
import { BoxIcon, CalendarIcon, CartIcon, SunriseIcon } from "@/components/ui/icons";
import { Mascot } from "@/components/ui/mascot";
import { coreExperience, hero } from "@/lib/content";

const quickActionIcons = { sunrise: SunriseIcon, box: BoxIcon, cart: CartIcon, calendar: CalendarIcon };

export function CoreExperience() {
  const [quickActionsFeature, aiBriefingFeature] = coreExperience.features;

  return (
    <section id="features" className="bg-cream-soft py-20 sm:py-28">
      <Container>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            {coreExperience.eyebrow}
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* 01 · 빠른작업 */}
          <div className="flex flex-col rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
            <span className="text-[13px] font-extrabold text-brand-500">
              {quickActionsFeature.number} · {quickActionsFeature.label}
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-[1.75rem]">
              {quickActionsFeature.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <div className="mt-7 grid flex-1 grid-cols-2 gap-3">
              {hero.quickActions.map((action) => {
                const Icon = quickActionIcons[action.icon];
                return (
                  <div
                    key={action.label}
                    className="flex flex-col items-start gap-3 rounded-2xl bg-cream-soft p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-white text-brand-600 shadow-[0_1px_2px_rgba(22,24,29,0.08)]">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="text-[14px] font-bold text-ink-800">{action.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 02 · AI 운영브리핑 */}
          <div className="flex flex-col rounded-[2rem] bg-gradient-to-br from-sun-50 via-brand-50 to-sun-50 p-7 shadow-soft sm:p-9">
            <span className="text-[13px] font-extrabold text-brand-500">
              {aiBriefingFeature.number} · {aiBriefingFeature.label}
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-[1.75rem]">
              {aiBriefingFeature.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <div className="mt-7 flex-1 rounded-2xl bg-white/80 p-5">
              <div className="flex items-center gap-2.5">
                <Mascot className="size-10 shrink-0" />
                <p className="text-[15px] leading-snug font-bold text-ink-900">
                  {aiBriefingFeature.card.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {aiBriefingFeature.card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl bg-cream-soft px-3.5 py-2.5 text-[13.5px] font-semibold text-ink-700"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
