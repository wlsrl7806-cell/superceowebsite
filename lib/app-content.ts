/**
 * Placeholder data for the app prototype screens (checklist, inventory,
 * recipes, reservations, reviews, more). This is a UX-flow prototype —
 * data is intentionally static/simple, not wired to a real backend.
 */

export const checklistGroups = [
  {
    id: "open",
    title: "오픈 준비",
    items: ["POS 전원 확인", "홀 청소", "냉장고 온도 확인", "간판 조명 켜기"],
  },
  {
    id: "close",
    title: "마감 업무",
    items: ["재고 확인", "정산", "쓰레기 배출", "전원 확인"],
  },
];

export const inventoryItems = [
  { id: "milk", name: "우유 1L", stock: "2개", low: true },
  { id: "cream", name: "생크림", stock: "1개", low: true },
  { id: "beans", name: "원두", stock: "12개", low: false },
  { id: "cup", name: "종이컵", stock: "충분", low: false },
  { id: "syrup", name: "바닐라 시럽", stock: "3개", low: true },
];

export const orderItems = [
  { id: "milk", name: "우유 1L", vendor: "신선유통", qty: 10 },
  { id: "cream", name: "생크림", vendor: "신선유통", qty: 5 },
  { id: "syrup", name: "바닐라 시럽", vendor: "카페원부자재", qty: 3 },
];

export const orderSmsDraft = `안녕하세요, 사장님!
다음 품목 발주 부탁드립니다.

· 우유 1L — 10개
· 생크림 — 5개
· 바닐라 시럽 — 3개

감사합니다 :)`;

export const stores = [
  { id: "store-1", name: "1호점 · 강남점" },
  { id: "store-2", name: "2호점 · 홍대점" },
];

export const menusByStore: Record<string, { id: string; name: string }[]> = {
  "store-1": [
    { id: "vanilla-latte", name: "바닐라 라떼" },
    { id: "americano", name: "아메리카노" },
    { id: "caramel-macchiato", name: "카라멜 마키아토" },
  ],
  "store-2": [
    { id: "vanilla-latte", name: "바닐라 라떼" },
    { id: "cold-brew", name: "콜드브루" },
  ],
};

export const recipeDetails: Record<string, { ingredients: string[]; steps: string[] }> = {
  "vanilla-latte": {
    ingredients: ["에스프레소 2샷", "우유 150ml", "바닐라 시럽 15ml", "얼음 적당량"],
    steps: ["샷을 먼저 추출해요", "얼음과 시럽을 넣어요", "우유를 붓고 저어요"],
  },
  americano: {
    ingredients: ["에스프레소 2샷", "물 150ml", "얼음 적당량"],
    steps: ["샷을 추출해요", "물을 부어요", "얼음을 넣어요"],
  },
  "caramel-macchiato": {
    ingredients: ["에스프레소 2샷", "우유 150ml", "카라멜 시럽 15ml", "휘핑크림"],
    steps: ["우유를 스팀해요", "샷을 부어요", "카라멜 시럽과 크림을 올려요"],
  },
  "cold-brew": {
    ingredients: ["콜드브루 원액 100ml", "물 100ml", "얼음 적당량"],
    steps: ["얼음을 채워요", "콜드브루 원액을 부어요", "물을 채워요"],
  },
};

export const reservations = [
  { id: 1, time: "17:00", name: "김OO", people: 4, status: "확정" },
  { id: 2, time: "17:30", name: "이OO", people: 2, status: "확정" },
  { id: 3, time: "19:00", name: "박OO", people: 3, status: "신규" },
];

export const reservationNote = "연동 방식 및 제공 범위는 서비스 환경에 따라 달라질 수 있습니다.";

export const reviews = [
  {
    id: "r1",
    author: "네이****",
    rating: 5,
    text: "직원분들이 친절하고 고기가 맛있어요.",
    status: "답변 대기",
    draft: "소중한 리뷰 감사해요! 다음에도 맛있는 메뉴로 보답할게요 :)",
  },
  {
    id: "r2",
    author: "카카****",
    rating: 4,
    text: "맛은 좋은데 대기 시간이 조금 길었어요.",
    status: "답변 대기",
    draft: "기다려 주셔서 감사해요! 대기 시간을 줄일 수 있도록 노력할게요.",
  },
  {
    id: "r3",
    author: "구글****",
    rating: 5,
    text: "재방문 의사 100%예요, 감사합니다!",
    status: "답변 완료",
    draft: "따뜻한 말씀 감사해요, 사장님!",
  },
];

export const moreMenuItems = [
  { label: "레시피", href: "/recipes" },
  { label: "예약", href: "/reservations" },
  { label: "리뷰", href: "/reviews" },
  { label: "매장 정보", href: "#" },
  { label: "알림 설정", href: "#" },
  { label: "고객센터", href: "#" },
  { label: "로그아웃", href: "#" },
];
