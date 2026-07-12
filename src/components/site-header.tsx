"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Lock scroll while the mobile sheet is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    // NOTE: no backdrop-filter/transform here — they would become the containing
    // block for the fixed-position mobile sheet and collapse it to a sliver.
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" onClick={close} className="group flex items-baseline gap-1.5 py-4" aria-label="Facilitator Misiati — home">
          <span className="display text-xl leading-none">Misiati</span>
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red transition-transform group-hover:scale-125" />
          <span className="meta hidden text-ink-faint sm:inline">MC · Facilitator · Moderator</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href.replace(/\/$/, "")) && item.href !== "/";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`meta py-4 transition-colors hover:text-red ${active ? "text-red" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact/" className="btn btn-red !py-2.5 !px-4 text-xs">
              Check availability
            </Link>
          </nav>

          {/* Theme switch — sits beside the menu on every breakpoint */}
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-ink md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile sheet — full-bleed red poster menu */}
      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-auto bg-red text-paper md:hidden">
          <nav className="container-page flex flex-col py-8" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="display border-b border-paper/25 py-5 text-3xl text-paper sm:text-4xl"
              >
                <span className="meta mr-3 align-middle text-paper/60">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={close}
              className="btn mt-8 self-start border-paper bg-paper !text-ink shadow-none"
            >
              Check availability
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
