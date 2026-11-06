"use client";

import { useState } from "react";
import type { DocumentTab } from "@/lib/services";
import { DocIcon } from "./icons";

export function DocumentTabs({ tabs, note }: { tabs: DocumentTab[]; note?: string }) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div>
      <div role="tablist" className="mb-5 inline-flex rounded-full border border-line bg-surface-soft p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            type="button"
            id={`doc-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`doc-panel-${i}`}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
              i === active ? "bg-sage text-[#F3F1E9]" : "text-ink-soft hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`doc-panel-${active}`} aria-labelledby={`doc-tab-${active}`} className="flex flex-col gap-2.5">
        <h3 className="sr-only">{current.heading}</h3>
        <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {current.items.map((item, i) => (
          <div key={item.title} className="flex items-start gap-3 px-5 py-4">
            <DocIcon className="mt-0.5 shrink-0 text-terracotta-dark" />
            <div>
              <p className="text-[14.5px] font-bold">
                <span className="tabular-nums">{(i + 1).toLocaleString("fa-IR")} . </span>
                {item.title}
              </p>
              {item.description && (
                <p className="mt-1 text-[14px] leading-[1.8] text-ink-soft">{item.description}</p>
              )}
              {item.bullets && (
                <ul className="mt-1.5 list-disc space-y-1 pr-5 text-[14px] leading-[1.8] text-ink-soft">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        </div>

        {note && <p className="text-[13px] leading-[1.8] text-ink-soft">نکته: {note}</p>}
      </div>
    </div>
  );
}
