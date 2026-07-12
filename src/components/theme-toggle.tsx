"use client";

import { SunIcon, MoonIcon } from "@/components/icons";

/**
 * Light/dark switch. The live theme is stamped on <html data-theme> by the
 * inline loader in layout.tsx (before paint, so no flash). This button flips
 * that attribute and persists the choice. Which icon shows is driven purely by
 * CSS on [data-theme] (globals.css), so there's no React state, no hydration
 * mismatch, and the icon is correct even before this component hydrates.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode / storage disabled — session-only toggle still works */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#17130f" : "#faf7f2");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      title="Toggle light or dark theme"
      className={`theme-toggle grid h-10 w-10 place-items-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper ${className}`}
    >
      <SunIcon className="icon-sun h-[1.15rem] w-[1.15rem]" />
      <MoonIcon className="icon-moon h-[1.15rem] w-[1.15rem]" />
    </button>
  );
}
