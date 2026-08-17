import { appScreens } from "@/lib/app-screens";
import { reservation } from "@/lib/content";
import { AppScreen } from "@/components/ui/app-screen";
import { FeatureSection } from "@/components/ui/feature-section";

export function Reservation() {
  return (
    <FeatureSection
      id="features"
      eyebrow={reservation.eyebrow}
      headline={reservation.headline}
      body={reservation.body}
      tone="cream-soft"
    >
      <AppScreen
        src={appScreens.reservation}
        alt="슈퍼사장 예약 관리 화면"
      />
    </FeatureSection>
  );
}
