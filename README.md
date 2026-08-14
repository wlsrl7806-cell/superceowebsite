# 슈퍼사장 — 마케팅 웹사이트

사장님의 숨은 매니저, 슈퍼사장의 랜딩 페이지. Next.js (App Router) + TypeScript + Tailwind CSS.

## 시작하기

```bash
npm run dev      # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

## 구조

- `app/` — 라우트, 전역 레이아웃(`layout.tsx`), 전역 스타일(`globals.css`)
- `components/sections/` — 홈페이지를 구성하는 10개 섹션 컴포넌트
- `components/screens/` — 폰 목업 안에 들어가는 화면별 UI (재고, 발주, 레시피 등)
- `components/layout/` — 헤더, 푸터
- `components/ui/` — 버튼, 폰 프레임, 아이콘 등 재사용 UI 요소
- `lib/content.ts` — 모든 카피/콘텐츠 (컴포넌트와 분리되어 있음)
- `public/screenshots/` — 실제 앱 스크린샷으로 교체할 위치 (`README.md` 참고)

## 실제 스크린샷 교체

지금은 모든 폰 목업이 CSS/SVG로 직접 그린 것입니다. 실제 스크린샷을 넣는 방법은
[public/screenshots/README.md](./public/screenshots/README.md)를 참고하세요.
