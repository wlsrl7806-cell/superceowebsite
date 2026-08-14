import { InventoryScreen } from "@/components/screens/inventory-screen";
import { OrderScreen } from "@/components/screens/order-screen";
import { SmsScreen } from "@/components/screens/sms-screen";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { Reveal } from "@/components/ui/reveal";
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
    <section className="py-24 sm:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={inventoryFlow.eyebrow}
            headline={inventoryFlow.headline}
            body={inventoryFlow.body}
            size="lg"
          />
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <StepFlow steps={inventoryFlow.steps} />
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-4">
          {screenshots.map(({ screen, label }, i) => (
            <div key={label} className="flex items-center gap-4 sm:gap-3">
              <Reveal delay={300 + i * 150} className="flex flex-col items-center gap-3">
                <PhoneFrame size="md">{screen}</PhoneFrame>
                <p className="text-[13px] font-semibold text-ink-500">{label}</p>
              </Reveal>
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
