import Link from "next/link";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { reviews } from "@/lib/app-content";

export default function ReviewsPage() {
  const pending = reviews.filter((r) => r.status === "답변 대기").length;

  return (
    <div className="pb-6">
      <ScreenHeader title="리뷰" subtitle={`답변이 필요한 리뷰 ${pending}건`} />

      <div className="space-y-2 p-4">
        {reviews.map((review) => (
          <Link
            key={review.id}
            href={`/reviews/${review.id}`}
            className="block rounded-xl border border-ink-100 p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ink-500">
                {review.author} · {"★".repeat(review.rating)}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                  review.status === "답변 대기" ? "bg-red-100 text-red-600" : "bg-mint-100 text-mint-500"
                }`}
              >
                {review.status}
              </span>
            </div>
            <p className="mt-1.5 text-[14px] text-ink-800">{review.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
