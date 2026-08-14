/**
 * All marketing copy and structured content for the 슈퍼사장 site lives here,
 * separated from the components that render it. Update copy in this file —
 * components should stay presentational.
 */

export const siteMeta = {
  name: "슈퍼사장",
  tagline: "사장님의 숨은 매니저",
  url: "https://supercheo.app",
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
    { label: "사용 방법", href: "/#how-it-works" },
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
  greeting: "좋은 아침이에요, 사장님 👋",
  todayCount: "오늘 확인할 일이 4개 있어요.",
  briefingTitle: "AI 운영브리핑",
  briefingItems: [
    { emoji: "📦", text: "우유 재고가 부족해요." },
    { emoji: "📅", text: "오늘 17시 예약이 3건 있어요." },
    { emoji: "⭐", text: "답변이 필요한 리뷰가 2건 있어요." },
    { emoji: "✓", text: "오픈 체크리스트가 아직 남아있어요." },
  ],
  quickActionsTitle: "빠른작업",
  quickActions: [
    { label: "오픈 체크", icon: "sunrise" },
    { label: "재고 확인", icon: "box" },
    { label: "발주하기", icon: "cart" },
    { label: "예약 확인", icon: "calendar" },
  ] as const,
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

// Sections 3 and 4 of the homepage story — one idea, one large phone, each.
export const aiBriefingSpotlight = {
  eyebrow: "AI 운영브리핑",
  headline: ["다른 무엇보다,", "오늘이 먼저예요."],
  body: "오늘 확인해야 할 일을 슈퍼사장이 먼저 정리해드려요.",
};

export const quickActionsSpotlight = {
  eyebrow: "빠른작업",
  headline: ["자주 하는 일은", "찾지 말고 바로."],
  body: "오픈부터 예약까지, 손끝에서 바로 실행하세요.",
};

export const checklist = {
  eyebrow: "오픈부터 마감까지",
  headline: ["오픈부터 마감까지,", "놓치는 일 없이."],
  body: "오픈 / 마감 등 반복 업무를 그룹으로 나눠 확인해요.",
  groups: [
    {
      id: "open",
      title: "오픈 준비",
      items: ["POS 전원 확인", "홀 청소", "냉장고 온도 확인"],
    },
    {
      id: "close",
      title: "마감 업무",
      items: ["재고 확인", "정산", "전원 확인"],
    },
  ],
};

export const inventoryFlow = {
  eyebrow: "재고 → 발주",
  headline: ["재고 확인이", "바로 발주로 이어집니다."],
  body: ["부족한 품목만 고르면", "거래처에 보낼 문자까지 준비해드려요."],
  // This sequence is the core product flow — keep the order and wording as-is.
  steps: [
    { title: "재고 확인", body: "오늘 재고 현황을 한눈에 확인해요." },
    { title: "부족 품목 선택", body: "부족한 품목만 골라 체크해요." },
    { title: "발주 품목 이동", body: "선택한 품목이 발주 목록으로 이동해요." },
    { title: "품목 체크", body: "발주할 품목과 수량을 다시 확인해요." },
    { title: "문자 자동 작성", body: "다음 화면에서 문자가 자동으로 준비돼요." },
    { title: "바로 문자 발송", body: "확인 후 거래처에 바로 보내요." },
  ],
};

export const recipes = {
  eyebrow: "레시피",
  headline: ["누가 일해도,", "같은 방식으로."],
  steps: [
    { title: "매장 선택", body: "레시피를 확인할 매장을 선택해요." },
    { title: "해당 매장 레시피", body: "매장별 레시피 목록을 확인해요." },
    { title: "메뉴 선택", body: "확인할 메뉴를 선택해요." },
    { title: "레시피 확인", body: "재료와 순서를 그대로 따라 해요." },
  ],
};

export const reservationReviews = {
  eyebrow: "예약 & 리뷰",
  headline: ["예약도 리뷰도,", "놓치지 않도록."],
  reservation: {
    title: "예약",
    body: "네이버 예약 알림을 슈퍼사장에서 바로 확인하세요.",
    note: "연동 방식 및 제공 범위는 서비스 환경에 따라 달라질 수 있습니다.",
  },
  review: {
    title: "리뷰",
    body: "리뷰 확인부터 답변까지, 슈퍼사장이 초안을 먼저 준비해요.",
    steps: ["리뷰 확인", "AI 답변 초안", "확인 후 답변"],
    note: "연동 방식 및 제공 범위는 서비스 환경에 따라 달라질 수 있습니다.",
  },
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

export const appShowcase = {
  eyebrow: "앱 둘러보기",
  headline: ["화면으로 먼저", "만나보세요."],
  body: "군더더기 없이, 필요한 것만 보여드립니다.",
  screens: [
    { id: "dashboard", label: "메인 대시보드", placeholderSrc: "/screenshots/dashboard.png" },
    { id: "briefing", label: "AI 운영브리핑", placeholderSrc: "/screenshots/briefing.png" },
    { id: "checklist", label: "체크리스트", placeholderSrc: "/screenshots/checklist.png" },
    { id: "inventory", label: "재고", placeholderSrc: "/screenshots/inventory.png" },
    { id: "order", label: "발주", placeholderSrc: "/screenshots/order.png" },
    { id: "recipe", label: "레시피", placeholderSrc: "/screenshots/recipe.png" },
    { id: "review", label: "리뷰", placeholderSrc: "/screenshots/review.png" },
  ] as const,
};

export const finalCta = {
  headline: ["곧 만나보실 수 있습니다."],
  body: ["슈퍼사장은 현재 개발 중입니다.", "Google Play와 App Store에서 곧 만나보실 수 있습니다."],
  primaryCta: { label: "제휴 문의", href: "/#contact" },
};

export const footer = {
  name: "슈퍼사장",
  tagline: "사장님의 숨은 매니저",
  linkGroups: [
    {
      title: "바로가기",
      links: [
        { label: "서비스", href: "/#service" },
        { label: "주요 기능", href: "/#features" },
        { label: "슈퍼사장 이야기", href: "/story" },
      ],
    },
    {
      title: "정책",
      links: [
        { label: "개인정보처리방침", href: "/privacy" },
        { label: "이용약관", href: "/terms" },
      ],
    },
    {
      title: "고객지원",
      links: [{ label: "문의하기", href: "/#contact" }],
    },
  ],
  copyright: `© ${new Date().getFullYear()} 슈퍼사장. All rights reserved.`,
};
