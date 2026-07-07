"use client";

import Link from "next/link";
import { useRef } from "react";

/**
 * Card wrapper with a soft gold spotlight that follows the cursor.
 * Renders a Link when `href` is set, otherwise a div.
 */
export function SpotlightCard({
  href,
  className = "",
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const cls = `spotlight ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        onMouseMove={onMove}
      >
        {children}
      </Link>
    );
  }
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={cls}
      onMouseMove={onMove}
    >
      {children}
    </div>
  );
}
