import { notFound } from "next/navigation";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { reviews } from "@/lib/app-content";
import { ReviewReplyForm } from "./reply-form";

export default async function ReviewDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const review = reviews.find((r) => r.id === id);
  if (!review) notFound();

  return (
    <div className="pb-6">
      <ScreenHeader title="리뷰 답변" subtitle={review.author} backHref="/reviews" />

      <div className="space-y-5 p-4">
        <div className="rounded-xl border border-ink-100 p-3">
          <p className="text-[13px] font-semibold text-ink-500">{"★".repeat(review.rating)}</p>
          <p className="mt-1.5 text-[14px] text-ink-800">{review.text}</p>
        </div>

        <ReviewReplyForm initialDraft={review.draft} alreadySent={review.status === "답변 완료"} />
      </div>
    </div>
  );
}
