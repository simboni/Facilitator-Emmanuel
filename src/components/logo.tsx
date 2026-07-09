import Link from "next/link";
import { profile } from "@/lib/portfolio";

/**
 * Peter Misiati wordmark + monogram.
 *   <LogoMark>  the "PM" monogram seal (also used as an avatar)
 *   <Logo>      the full lockup: monogram + name + role, links home
 */

export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** "dark" = on a light surface · "light" = on a dark surface */
  tone?: "dark" | "light";
}) {
  const ring = tone === "dark" ? "var(--color-navy-800)" : "var(--color-gold-400)";
  const accent = "var(--color-gold-500)";
  const letter = tone === "dark" ? "var(--color-navy-900)" : "#ffffff";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${profile.name} logo`}
    >
      <rect x="4" y="4" width="92" height="92" rx="22" fill="none" stroke={ring} strokeWidth="3" />
      <rect x="11" y="11" width="78" height="78" rx="17" fill="none" stroke={accent} strokeWidth="1.2" opacity="0.7" />
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontFamily="var(--font-mono, monospace)"
        fontSize="29"
        fontWeight="700"
        letterSpacing="-1"
        fill={letter}
      >
        SMP
      </text>
    </svg>
  );
}

// Filled disc variant for the favicon / tiny sizes.
export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={`${profile.name} logo`}>
      <rect x="2" y="2" width="96" height="96" rx="24" fill="var(--color-navy-900)" />
      <text
        x="50"
        y="61"
        textAnchor="middle"
        fontFamily="var(--font-mono, monospace)"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-1"
        fill="var(--color-gold-400)"
      >
        SMP
      </text>
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const primary = variant === "light" ? "text-white" : "text-navy-900";
  const secondary = variant === "light" ? "text-navy-200" : "text-navy-500";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${profile.name} — home`}
    >
      <LogoMark
        tone={variant}
        className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      {/* The name (unbreakable) sets the width via `min-content`; the role
          line wraps and justifies to fill that exact same width, so the two
          lines stay balanced. */}
      <span
        className="flex flex-col leading-none"
        style={{ width: "min-content" }}
      >
        <span
          className={`whitespace-nowrap text-[1.15rem] font-bold tracking-tight ${primary}`}
        >
          {profile.name}
        </span>
        <span
          className={`mt-1.5 block w-full text-[0.58rem] font-semibold uppercase ${secondary}`}
          style={{
            textAlign: "justify",
            textAlignLast: "justify",
            letterSpacing: "0.04em",
          }}
        >
          {profile.role}
        </span>
      </span>
    </Link>
  );
}
