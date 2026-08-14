"use client";

import { useState } from "react";
import { ScreenHeader } from "@/components/app-shell/screen-header";
import { checklistGroups } from "@/lib/app-content";

export default function ChecklistPage() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({ open: true });
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <div className="pb-6">
      <ScreenHeader title="체크리스트" subtitle="오픈 / 마감 등 반복 업무를 그룹으로 확인해요" />

      <div className="space-y-3 p-4">
        {checklistGroups.map((group) => {
          const isOpen = !!openGroups[group.id];
          const doneCount = group.items.filter((_, i) => checked[`${group.id}-${i}`]).length;

          return (
            <div key={group.id} className="rounded-xl border border-ink-100">
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenGroups((s) => ({ ...s, [group.id]: !s[group.id] }))}
              >
                <span className="flex-1 text-[15px] font-bold text-ink-900">{group.title}</span>
                <span className="text-[13px] text-ink-400">
                  {doneCount}/{group.items.length}
                </span>
                <span className="text-ink-400">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen ? (
                <ul className="space-y-1 border-t border-ink-100 px-4 py-2">
                  {group.items.map((item, i) => {
                    const key = `${group.id}-${i}`;
                    const isChecked = !!checked[key];
                    return (
                      <li key={item}>
                        <button
                          type="button"
                          className="flex w-full items-center gap-3 py-2 text-left"
                          onClick={() => setChecked((s) => ({ ...s, [key]: !s[key] }))}
                        >
                          <span
                            className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                              isChecked ? "border-brand-500 bg-brand-500 text-white" : "border-ink-300"
                            }`}
                          >
                            {isChecked ? "✓" : ""}
                          </span>
                          <span className={`text-[14px] ${isChecked ? "text-ink-400 line-through" : "text-ink-800"}`}>
                            {item}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
