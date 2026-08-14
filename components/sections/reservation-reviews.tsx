import { ReservationScreen } from "@/components/screens/reservation-screen";
import { ReviewScreen } from "@/components/screens/review-screen";
import { Container } from "@/components/ui/container";
import { BellIcon, ChatIcon } from "@/components/ui/icons";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { reservationReviews } from "@/lib/content";

export function ReservationReviews() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={reservationReviews.eyebrow} headline={reservationReviews.headline} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center gap-7 rounded-[2rem] bg-cream-soft p-7 text-center sm:p-9">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft">
              <BellIcon className="size-5" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-ink-900">{reservationReviews.reservation.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                {reservationReviews.reservation.body}
              </p>
            </div>
            <PhoneFrame size="sm">
              <ReservationScreen />
            </PhoneFrame>
            <p className="text-[12.5px] text-ink-400">{reservationReviews.reservation.note}</p>
          </div>

          <div className="flex flex-col items-center gap-7 rounded-[2rem] bg-cream-soft p-7 text-center sm:p-9">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft">
              <ChatIcon className="size-5" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-ink-900">{reservationReviews.review.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{reservationReviews.review.body}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {reservationReviews.review.steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-[12.5px] font-semibold text-ink-700 shadow-[0_1px_2px_rgba(22,24,29,0.08)]">
                      {step}
                    </span>
                    {i < reservationReviews.review.steps.length - 1 ? (
                      <span className="text-ink-300" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
            <PhoneFrame size="sm">
              <ReviewScreen />
            </PhoneFrame>
            <p className="text-[12.5px] text-ink-400">{reservationReviews.review.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
