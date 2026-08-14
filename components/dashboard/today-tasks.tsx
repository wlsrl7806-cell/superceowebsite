"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { todayTasks } from "@/lib/dashboard-content";

export function TodayTasks() {
  const [items, setItems] = useState(todayTasks.items);
  const doneCount = items.filter((item) => item.done).length;

  function toggle(id: string) {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  }

  return (
    <section aria-labelledby="today-tasks-heading" className="mt-7 px-5">
      <div className="flex items-center justify-between">
        <p id="today-tasks-heading" className="text-[15.5px] font-bold text-ink-900">
          {todayTasks.title}
        </p>
        <span className="text-[13px] font-semibold text-ink-400">
          {doneCount}/{items.length} 완료
        </span>
      </div>

      <div className="mt-3 divide-y divide-ink-50 overflow-hidden rounded-2xl bg-white shadow-soft">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.done}
            onClick={() => toggle(item.id)}
            className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors active:bg-ink-50"
          >
            <span
              className={`flex size-5 shrink-0 items-center justify-center rounded-full transition-colors ${
                item.done ? "bg-brand-500" : "bg-ink-100"
              }`}
            >
              {item.done ? <CheckIcon className="size-3 text-white" strokeWidth={2.75} /> : null}
            </span>
            <span
              className={`flex-1 text-[14.5px] font-medium transition-colors ${
                item.done ? "text-ink-400 line-through" : "text-ink-800"
              }`}
            >
              {item.label}
            </span>
            <span className="shrink-0 rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-bold text-ink-500">
              {item.meta}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
