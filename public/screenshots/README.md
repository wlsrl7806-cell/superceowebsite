# Real app screenshots go here

Every phone mockup on the site is currently a hand-built CSS/SVG
approximation (see `components/screens/*.tsx`), not an image file — so there
is nothing to break today. When real screenshots are ready, drop image files
into this folder using the names below, then pass a `screenshot` prop to the
`PhoneFrame` that renders each screen (see "How to wire one up" at the
bottom).

| File to add                    | Used for            | Rendered by                                    |
| ------------------------------- | -------------------- | ----------------------------------------------- |
| `dashboard.png`                 | 메인 대시보드         | `components/screens/dashboard-screen.tsx`        |
| `briefing.png`                  | AI 운영브리핑         | `components/screens/briefing-screen.tsx`         |
| `checklist.png`                 | 체크리스트            | `components/screens/checklist-screen.tsx`        |
| `inventory.png`                 | 재고                  | `components/screens/inventory-screen.tsx`        |
| `order.png`                     | 발주                  | `components/screens/order-screen.tsx`            |
| `recipe.png`                    | 레시피                | `components/screens/recipe-screen.tsx`           |
| `review.png`                    | 리뷰                  | `components/screens/review-screen.tsx`           |
| `reservation.png` (optional)    | 예약 알림              | `components/screens/reservation-screen.tsx`      |
| `sms.png` (optional)            | 발주 문자 자동 작성    | `components/screens/sms-screen.tsx`              |

These file names already match `lib/content.ts` → `appShowcase.screens[].placeholderSrc`.

Recommended export size: **1170×2532** (or any 9:19.5 portrait ratio), PNG,
under ~400KB. Next.js will optimize/resize them automatically via `next/image`.

## How to wire one up

Every screen mockup is rendered inside a `<PhoneFrame>` (`components/ui/phone-frame.tsx`).
`PhoneFrame` already supports an optional `screenshot` prop — pass it and the
real image replaces the CSS mockup automatically, no other changes needed.

Example — swapping the hero dashboard screen in `components/sections/hero.tsx`:

```tsx
// Before
<PhoneFrame size="lg">
  <DashboardScreen />
</PhoneFrame>

// After
<PhoneFrame
  size="lg"
  screenshot={{ src: "/screenshots/dashboard.png", alt: "슈퍼사장 메인 대시보드 화면" }}
>
  <DashboardScreen />
</PhoneFrame>
```

Do the same inside `components/sections/app-showcase.tsx` (loop over
`appShowcase.screens` and pass `screen.placeholderSrc`) once every screenshot
is in place, and in `components/sections/inventory-order-flow.tsx` /
`components/sections/recipes.tsx` for those flow screens.
