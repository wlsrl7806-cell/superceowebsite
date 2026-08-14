"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { CheckIcon, ChevronDownIcon, MoonIcon, SunriseIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { checklist } from "@/lib/content";

const groupIcons = { open: SunriseIcon, close: MoonIcon } as const;

export function Checklist() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({ open: true, close: false });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({ "open-0": true });

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={checklist.eyebrow} headline={checklist.headline} body={checklist.body} />

        <div className="mt-12 space-y-4">
          {checklist.groups.map((group) => {
            const Icon = groupIcons[group.id as keyof typeof groupIcons];
            const isOpen = openGroups[group.id];
            const doneCount = group.items.filter((_, i) => checkedItems[`${group.id}-${i}`]).length;

            return (
              <div key={group.id} className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-5 py-4.5 text-left sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`checklist-panel-${group.id}`}
                  onClick={() => setOpenGroups((s) => ({ ...s, [group.id]: !s[group.id] }))}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="flex-1 text-[16px] font-bold text-ink-900">{group.title}</span>
                  <span className="text-[13px] font-semibold text-ink-400">
                    {doneCount}/{group.items.length}
                  </span>
                  <ChevronDownIcon
                    className={`size-4.5 text-ink-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id={`checklist-panel-${group.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <ul className="space-y-1 px-5 pb-5 sm:px-6">
                      {group.items.map((item, i) => {
                        const key = `${group.id}-${i}`;
                        const checked = !!checkedItems[key];
                        return (
                          <li key={item}>
                            <button
                              type="button"
                              className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-ink-50"
                              onClick={() => setCheckedItems((s) => ({ ...s, [key]: !s[key] }))}
                            >
                              <span
                                className={`flex size-5 shrink-0 items-center justify-center rounded-full transition-colors ${
                                  checked ? "bg-brand-500" : "bg-ink-100"
                                }`}
                              >
                                {checked ? <CheckIcon className="size-3 text-white" strokeWidth={2.75} /> : null}
                              </span>
                              <span
                                className={`text-[14.5px] font-medium transition-colors ${
                                  checked ? "text-ink-400 line-through" : "text-ink-700"
                                }`}
                              >
                                {item}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
