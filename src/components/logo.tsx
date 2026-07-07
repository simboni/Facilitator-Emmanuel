import Link from "next/link";
import { firm } from "@/lib/firm";

/**
 * Interim brand mark for Misiati & Associates.
 * A gold "M&A" monogram in a navy shield/roundel + serif wordmark.
 * Designed to be easily swapped for a professional logo later.
 */
export function Monogram({
  className = "",
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "light";
}) {
  const ring = variant === "navy" ? "var(--color-navy-800)" : "#ffffff";
  const ringStroke = variant === "navy" ? "var(--color-gold-400)" : "var(--color-gold-300)";
  const letters = variant === "navy" ? "#ffffff" : "var(--color-navy-900)";
  const amp = "var(--color-gold-400)";
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${firm.name} logo`}
    >
      <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill={ring} />
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="11"
        fill="none"
        stroke={ringStroke}
        strokeWidth="1.5"
      />
      <text
        x="24"
        y="30.5"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="20"
        fontWeight="600"
        fill={letters}
        letterSpacing="-0.5"
      >
        M<tspan fill={amp} dx="-1">&amp;</tspan>A
      </text>
    </svg>
  );
}

export function Logo({
  variant = "navy",
  className = "",
}: {
  variant?: "navy" | "light";
  className?: string;
}) {
  const primary = variant === "light" ? "text-white" : "text-navy-900";
  const secondary = variant === "light" ? "text-navy-100" : "text-navy-500";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${firm.name} — home`}
    >
      <Monogram className="h-11 w-11 shrink-0" variant={variant} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg font-semibold tracking-tight ${primary}`}
        >
          Misiati <span className="text-gold-500">&amp;</span> Associates
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] ${secondary}`}
        >
          Certified Public Accountants
        </span>
      </span>
    </Link>
  );
}
