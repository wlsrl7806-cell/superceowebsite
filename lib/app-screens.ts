/**
 * Centralized paths to the real app screenshots used across the marketing
 * site. Every screenshot lives in public/app-screens/ — to update what a
 * section shows, overwrite the corresponding PNG with the same filename.
 * No component changes are needed.
 *
 * width/height are the actual pixel dimensions of the current file. If you
 * replace a screenshot with one of different proportions, update the
 * matching entry here so next/image keeps the layout accurate (this is
 * metadata for layout purposes only — it never crops or distorts anything).
 */
export const appScreens = {
  main: "/app-screens/main.png",
  reservation: "/app-screens/reservation.png",
  review: "/app-screens/review.png",
  inventory: "/app-screens/inventory.png",
  order: "/app-screens/order.png",
  message: "/app-screens/message.png",
  checklist: "/app-screens/checklist.png",
  recipe: "/app-screens/recipe.png",
} as const;

export type AppScreenKey = keyof typeof appScreens;
