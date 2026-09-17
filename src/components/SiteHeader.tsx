"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-sage-dark">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" className="shrink-0">
            <rect width="40" height="40" rx="12" fill="#2F5D50" />
            <path d="M12 21.5L17.5 27L28 14" stroke="#D98E5B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 text-[14.5px] font-semibold text-ink-soft md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-sage-dark">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded-full bg-terracotta px-6 py-3 text-[15px] font-semibold text-[#2A1608] transition-colors hover:bg-terracotta-dark sm:inline-flex"
          >
            مشاوره رایگان
          </a>
          <button
            type="button"
            aria-label="باز کردن منو"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] font-semibold text-ink-soft hover:bg-sage-tint hover:text-sage-dark"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-terracotta px-6 py-3 text-center text-[15px] font-semibold text-[#2A1608]"
            >
              مشاوره رایگان
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
