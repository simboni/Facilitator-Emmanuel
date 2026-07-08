import Link from "next/link";
import { firm } from "@/lib/firm";

/**
 * Misiati & Associates brand mark — "The Monogram Seal".
 * A serif initial "M" set in a fine double ring (navy + gold), paired with
 * the serif wordmark. Two forms:
 *   - <LogoMark>  the seal, for header/footer lockups and avatar contexts
 *   - <LogoBadge> a filled disc version, for the favicon / tiny sizes
 */

export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** "dark" = on a light surface · "light" = on a dark surface */
  tone?: "dark" | "light";
}) {
  const outer = tone === "dark" ? "var(--color-navy-800)" : "var(--color-gold-500)";
  const inner = tone === "dark" ? "var(--color-gold-500)" : "rgba(255,255,255,0.35)";
  const letter = tone === "dark" ? "var(--color-navy-800)" : "#ffffff";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${firm.name} logo`}
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke={outer} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40.5" fill="none" stroke={inner} strokeWidth="1" />
      <text
        x="50"
        y="66.5"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="52"
        fontWeight="600"
        fill={letter}
      >
        M
      </text>
    </svg>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${firm.name} logo`}
    >
      <circle cx="50" cy="50" r="49" fill="var(--color-navy-800)" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="var(--color-gold-400)" strokeWidth="2" />
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="54"
        fontWeight="600"
        fill="#ffffff"
      >
        M
      </text>
    </svg>
  );
}

// Back-compat alias used as an avatar-style mark on dark cards.
export function Monogram({
  className = "",
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "light";
}) {
  return <LogoMark className={className} tone={variant === "light" ? "dark" : "light"} />;
}

export function Logo({
  variant = "navy",
  className = "",
}: {
  variant?: "navy" | "light";
  className?: string;
}) {
  const tone = variant === "light" ? "light" : "dark";
  const primary = variant === "light" ? "text-white" : "text-navy-900";
  const secondary = variant === "light" ? "text-navy-100" : "text-navy-500";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${firm.name} — home`}
    >
      <LogoMark
        tone={tone}
        className="h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg font-semibold tracking-tight ${primary}`}
        >
          Misiati <span className="text-gold-500">&amp;</span> Associates
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] ${secondary}`}
        >
          Certified Public Accountants of Kenya
        </span>
      </span>
    </Link>
  );
}
