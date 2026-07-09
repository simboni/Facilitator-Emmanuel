import Link from "next/link";
import { profile } from "@/lib/portfolio";

/**
 * SMP brand mark — a code-tag monogram in emerald green.
 *   <LogoMark>  the "</>" glyph in a green-ringed tile (also the avatar/favicon)
 *   <Logo>      the full lockup: mark + name + ~/smp-developers, links home
 */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${profile.name} logo`}
    >
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="22"
        fill="#101712"
        stroke="#35d888"
        strokeWidth="3"
      />
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontFamily="var(--font-mono, monospace)"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-2"
        fill="#35d888"
      >
        {"</>"}
      </text>
    </svg>
  );
}

// Alias kept for the favicon/tiny contexts.
export const LogoBadge = LogoMark;

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="SMP Developers — home"
    >
      <LogoMark className="h-9 w-9 shrink-0 rounded-[0.6rem] transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="whitespace-nowrap font-mono text-xl font-semibold tracking-tight">
        <span className="text-mist-600">~/</span>
        <span className="text-green-400">smp-developers</span>
      </span>
    </Link>
  );
}
