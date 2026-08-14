/**
 * Copy for the /story brand-story page. Kept separate from lib/content.ts
 * (homepage marketing copy) so each page's content stays easy to find.
 */

export const storyMeta = {
  title: "슈퍼사장 이야기 | 왜 슈퍼사장을 만들었을까요?",
  description:
    "실제 매장 운영에서 시작된 슈퍼사장의 이야기. 예약, 리뷰, 재고, 발주 등 반복되는 매장 운영을 먼저 챙겨주는 서비스를 만들고 있습니다.",
};

export const storyHero = {
  eyebrow: "슈퍼사장 이야기",
  headline: "왜 슈퍼사장을 만들었을까요?",
  body: [
    ["매장을 직접 운영하다 보면", "매일 챙겨야 할 일이 끝이 없습니다."],
    ["오픈 준비, 예약 확인, 리뷰 답변,", "재고 확인, 발주, 직원에게 레시피 전달까지."],
    ["슈퍼사장은", "이 반복되는 운영의 불편함에서 시작했습니다."],
  ],
};

export const storyProblem = {
  eyebrow: "THE PROBLEM",
  headline: ["사장님은", "매일 너무 많은 걸 기억합니다."],
  body: [
    ["해야 할 일은 계속 생기는데", "확인해야 하는 곳은 모두 다릅니다."],
    ["예약은 예약대로,", "리뷰는 리뷰대로,", "재고와 발주는 또 따로 확인해야 합니다."],
    ["결국 중요한 운영 정보가", "사장님의 머릿속에 의존하게 됩니다."],
  ],
  // Scattered, editorial — deliberately plain text, no icons/cards.
  labels: ["예약", "리뷰", "재고", "발주", "오픈", "마감", "레시피"],
};

export const storyIdea = {
  eyebrow: "THE IDEA",
  headline: ["관리 기능을 더 만드는 대신,", "먼저 챙겨주는 앱을 만들기로 했습니다."],
  body: [
    ["슈퍼사장의 목표는", "기능을 많이 넣는 것이 아닙니다."],
    [
      "사장님이 앱을 열었을 때",
      "지금 무엇을 확인해야 하는지,",
      "무엇부터 처리해야 하는지를",
      "먼저 알려주는 것이 목표입니다.",
    ],
  ],
  quote: ["사장님이 앱을 관리하는 것이 아니라,", "앱이 사장님의 매장 운영을 챙긴다."],
};

export const storyExperience = {
  eyebrow: "THE EXPERIENCE",
  headline: "그래서 첫 화면부터 다르게 만들었습니다.",
  body: ["메뉴를 찾아 들어가는 대신", "오늘 해야 할 일을 먼저 보여줍니다."],
  screen: {
    greeting: "좋은 아침이에요, 사장님.",
    todayCount: "오늘 확인할 일이 4개 있어요.",
    items: ["오늘 예약 5건", "답변이 필요한 리뷰 2건", "부족한 재고 3개", "오픈 체크 미완료"],
    quickActionsTitle: "빠른작업",
    quickActions: ["예약", "재고", "발주", "체크리스트"],
  },
};

export const storyReal = {
  eyebrow: "FROM REAL STORE",
  headline: "책상에서만 만든 앱이 아닙니다.",
  body: [
    ["슈퍼사장은 실제 매장을 운영하며", "매일 겪는 불편함을 바탕으로 만들고 있습니다."],
    ["필요한 기능을 직접 사용해보고,", "불편하면 다시 바꾸고,", "실제 운영 흐름에 맞지 않으면 다시 설계합니다."],
  ],
  highlights: ["실제 운영 경험", "현장에서 발견한 문제", "직접 사용하는 기능", "지속적인 개선"],
};

export const storyBuilding = {
  eyebrow: "WHAT WE ARE BUILDING",
  headline: ["매장 운영의 흐름을", "하나씩 연결하고 있습니다."],
  sequence: ["메인", "예약", "리뷰", "재고", "발주", "문자", "체크리스트", "레시피"],
  body: ["각 기능은 따로 존재하는 것이 아니라", "사장님의 하루 속에서 자연스럽게 이어지도록 설계합니다."],
};

export const storyFuture = {
  eyebrow: "THE FUTURE",
  headline: ["궁극적으로,", "사장님의 하루를 가볍게 만들고 싶습니다."],
  body: [
    ["사장님이 매일 반복되는 운영 업무를", "모두 기억하지 않아도 되는 것."],
    ["손님과 음식,", "그리고 가게를 더 잘 운영하는 일에", "집중할 수 있도록 돕는 것."],
    ["그게 슈퍼사장이 만들고 싶은 경험입니다."],
  ],
  closing: ["사장님의 숨은 매니저,", "슈퍼사장."],
};
