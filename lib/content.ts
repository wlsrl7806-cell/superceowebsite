/**
 * All marketing copy and structured content for the 슈퍼사장 site lives here,
 * separated from the components that render it. Update copy in this file —
 * components should stay presentational.
 */

export const siteMeta = {
  name: "슈퍼사장",
  tagline: "사장님의 숨은 매니저",
  url: "https://superceowebsite.vercel.app",
  description:
    "슈퍼사장은 오픈 준비부터 재고, 발주, 예약, 리뷰까지 가게 운영에 필요한 일을 먼저 챙겨주는 서비스입니다.",
};

export const nav = {
  // Root-relative ("/#service") rather than bare hashes — the header now
  // appears on more than one page (e.g. /story), and a bare "#service"
  // link only scrolls correctly when you're already on "/".
  links: [
    { label: "서비스", href: "/#service" },
    { label: "주요 기능", href: "/#features" },
    { label: "브랜드 스토리", href: "/story" },
    { label: "문의하기", href: "/#contact" },
  ],
  cta: "제휴 문의",
};

export const hero = {
  eyebrow: "사장님의 숨은 매니저",
  headline: ["사장님이 챙기기 전에,", "슈퍼사장이 먼저 챙깁니다."],
  body: [
    "오픈 준비부터 재고, 발주, 예약, 리뷰까지.",
    "오늘 가게에서 필요한 일을 슈퍼사장이 먼저 정리해드려요.",
  ],
  primaryCta: { label: "슈퍼사장 알아보기", href: "/#service" },
  secondaryCta: { label: "제휴 문의", href: "/#contact" },
};

export const problem = {
  eyebrow: "이런 하루, 익숙하지 않으신가요",
  headline: ["사장님은", "매일 너무 많은 걸 기억합니다."],
  tasks: [
    { label: "재고 확인", icon: "box" },
    { label: "예약 확인", icon: "calendar" },
    { label: "리뷰 답변", icon: "chat" },
    { label: "직원 레시피 안내", icon: "book" },
    { label: "오픈 체크", icon: "checkCircle" },
    { label: "거래처 발주", icon: "truck" },
    { label: "마감 정산", icon: "calculator" },
  ] as const,
  resolved: {
    title: "슈퍼사장",
    body: [
      "여기저기 찾아보고,",
      "머릿속으로 기억하지 않아도 됩니다.",
      "슈퍼사장이 오늘 해야 할 일을",
      "한곳에서 정리해드려요.",
    ],
  },
};

// The seven feature sections below each pair one real app screenshot
// (see lib/app-screens.ts) with a short message — no JSX-built screen
// mockups. Order matches the homepage's section order.

export const reservation = {
  eyebrow: "예약",
  headline: ["오늘 예약,", "한눈에 확인하세요."],
  body: ["여러 예약 채널의 예약을 한곳에서 확인하고", "오늘 매장 상황을 빠르게 파악할 수 있어요."],
};

// Channel names below are the product's stated integration surface, not a
// claim of official partnership with each platform — keep as given, don't
// expand this list without confirming it against the actual product.
export const review = {
  eyebrow: "리뷰",
  headline: ["리뷰 확인부터", "답변까지 더 빠르게."],
  body: [
    "네이버, 배달의민족, 요기요, 캐치테이블 등",
    "여러 채널의 리뷰를 한곳에서 확인하고",
    "AI가 답변 초안을 준비해드려요.",
  ],
};

export const inventory = {
  eyebrow: "재고",
  headline: ["부족한 재고를", "먼저 알려드려요."],
  body: ["현재 재고와 안전 재고를 비교해", "확인이 필요한 품목을 빠르게 찾을 수 있어요."],
};

export const order = {
  eyebrow: "발주",
  headline: ["재고 확인이", "바로 발주로 이어집니다."],
  body: ["부족한 품목을 선택하고", "거래처별 발주 내용을 한 번에 확인하세요."],
};

export const checklist = {
  eyebrow: "오픈부터 마감까지",
  headline: ["오픈부터 마감까지,", "놓치는 일 없이."],
  body: ["반복되는 매장 업무를", "업무 묶음별로 확인하고 체크할 수 있어요."],
};

export const recipes = {
  eyebrow: "레시피",
  headline: ["누가 일해도,", "같은 방식으로."],
  body: ["매장별 메뉴와 레시피를 정리해두고", "필요할 때 바로 확인할 수 있어요."],
};

export const philosophy = {
  eyebrow: "슈퍼사장의 철학",
  headline: ["관리 프로그램이 아니라,", "사장님의 숨은 매니저."],
  // Each entry is one short stacked paragraph, shown in large minimal type.
  paragraphs: [
    ["슈퍼사장의 목표는", "기능을 많이 보여주는 것이 아닙니다."],
    ["사장님이 지금 무엇을 해야 할지", "일일이 기억하지 않아도 되도록,"],
    ["가게 운영의 흐름을", "먼저 챙기는 것입니다."],
  ],
};

export const finalCta = {
  headline: ["곧 만나보실 수 있습니다."],
  body: ["슈퍼사장은 현재 개발 중입니다.", "Google Play와 App Store에서 곧 만나보실 수 있습니다."],
  primaryCta: { label: "제휴 문의", href: "/#contact" },
};

export const footer = {
  name: "Super Sajang",
  tagline: "사장님의 숨은 매니저",
  company: {
    title: "Company Information",
    lines: [
      "캠비아 (CAMBIA)",
      "대표 김영현",
      "사업자등록번호 710-87-03973",
      "세종특별자치시 보듬3로 8-23 까사누보 209호",
      "ts2904@cambia.media",
    ],
  },
  policyLinks: {
    title: "Policy Links",
    links: [
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "서비스 이용약관", href: "/terms" },
    ],
  },
  copyright: "© 2026 CAMBIA Inc. All rights reserved.",
};
