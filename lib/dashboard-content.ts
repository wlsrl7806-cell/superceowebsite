/**
 * Content for the actual 슈퍼사장 app dashboard screen (/dashboard).
 * This is the product's real in-app copy — separate from lib/content.ts,
 * which holds marketing-site copy only.
 */

export const greeting = {
  message: "안녕하세요, 사장님",
  subtext: "오늘도 좋은 하루 보내세요 ☀️",
};

export const aiBriefing = {
  title: "AI 운영브리핑",
  lead: "오늘 확인할 일이 4개 있어요.",
  items: [
    { icon: "box", label: "우유 재고 부족" },
    { icon: "chat", label: "리뷰 답변 2건" },
    { icon: "calendar", label: "오늘 예약 3건" },
    { icon: "checkCircle", label: "오픈 체크 미완료" },
  ] as const,
};

export const quickActions = {
  title: "빠른작업",
  items: [
    { id: "open", label: "오픈", icon: "sunrise" },
    { id: "inventory", label: "재고", icon: "box" },
    { id: "order", label: "발주", icon: "cart" },
    { id: "reservation", label: "예약", icon: "calendar" },
  ] as const,
};

export const todayTasks = {
  title: "오늘 해야 할 일",
  items: [
    { id: "task-1", label: "우유 발주하기", meta: "재고", done: false },
    { id: "task-2", label: "리뷰 2건 답변하기", meta: "리뷰", done: false },
    { id: "task-3", label: "17시 예약 준비하기", meta: "예약", done: false },
    { id: "task-4", label: "오픈 체크리스트 마무리하기", meta: "체크리스트", done: true },
  ],
};

export const recentNotifications = {
  title: "최근 알림",
  items: [
    { id: "n1", icon: "chat", label: "새 리뷰가 등록됐어요", time: "10분 전", unread: true },
    { id: "n2", icon: "calendar", label: "17시 예약이 확정됐어요", time: "1시간 전", unread: true },
    { id: "n3", icon: "box", label: "우유 재고가 부족해요", time: "2시간 전", unread: false },
    { id: "n4", icon: "checkCircle", label: "마감 체크리스트가 완료됐어요", time: "어제", unread: false },
  ] as const,
};

export const bottomNav = [
  { id: "home", label: "홈", icon: "home" },
  { id: "checklist", label: "체크리스트", icon: "checkCircle" },
  { id: "inventory", label: "재고", icon: "box" },
  { id: "more", label: "더보기", icon: "more" },
] as const;
