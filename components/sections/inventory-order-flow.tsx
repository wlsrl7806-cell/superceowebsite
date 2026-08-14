import { InventoryScreen } from "@/components/screens/inventory-screen";
import { OrderScreen } from "@/components/screens/order-screen";
import { SmsScreen } from "@/components/screens/sms-screen";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { StepFlow } from "@/components/ui/step-flow";
import { inventoryFlow } from "@/lib/content";

const screenshots = [
  { screen: <InventoryScreen />, label: "재고 확인" },
  { screen: <OrderScreen />, label: "발주 · 품목 체크" },
  { screen: <SmsScreen />, label: "문자 발송" },
];

export function InventoryOrderFlow() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={inventoryFlow.eyebrow}
          headline={inventoryFlow.headline}
          body={inventoryFlow.body}
        />

        <div className="mt-12">
          <StepFlow steps={inventoryFlow.steps} />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-4">
          {screenshots.map(({ screen, label }, i) => (
            <div key={label} className="flex items-center gap-4 sm:gap-3">
              <div className="flex flex-col items-center gap-3">
                <PhoneFrame size="sm">{screen}</PhoneFrame>
                <p className="text-[13px] font-semibold text-ink-500">{label}</p>
              </div>
              {i < screenshots.length - 1 ? (
                <ArrowRightIcon className="hidden size-5 shrink-0 -translate-y-3 text-ink-200 sm:block" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
