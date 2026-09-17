"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

export function FaqAccordion({ items, defaultOpenIndex = -1 }: { items: { q: string; a: string }[]; defaultOpenIndex?: number }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="flex max-w-[760px] flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right text-[15.5px] font-bold text-ink"
              aria-expanded={isOpen}
            >
              {item.q}
              <PlusIcon className={`shrink-0 text-sage transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
              style={{ maxHeight: isOpen ? "240px" : "0px" }}
            >
              <p className="px-5 pb-5 text-[14.5px] leading-[1.85] text-ink-soft">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
