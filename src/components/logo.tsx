import Link from "next/link";
import { firm } from "@/lib/firm";

/**
 * Misiati & Associates brand mark — "The Ascending Monogram".
 * The letter M whose second stroke rises into a gold arrow: the firm's
 * initial + upward growth (financial ascent). Two forms:
 *   - <LogoMark>  open monogram, for the header/footer lockups
 *   - <LogoBadge> contained roundel, for favicon / avatar / stamp use
 */

const MARK_PATHS = {
  // strokes drawn on a 96×96 grid
  leftLegInner: "M24 72 V28 L48 52",
  rightLeg: "M72 30 V72",
  arrowShaft: "M48 52 L73 25",
  arrowHead: "M73 25 L62 26 M73 25 L72 36",
};

export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** "dark" = ink on a light surface · "light" = ink on a dark surface */
  tone?: "dark" | "light";
}) {
  const ink = tone === "dark" ? "var(--color-navy-800)" : "#ffffff";
  const gold = tone === "dark" ? "var(--color-gold-400)" : "var(--color-gold-300)";
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label={`${firm.name} logo`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={MARK_PATHS.leftLegInner} stroke={ink} strokeWidth="8.5" />
      <path d={MARK_PATHS.rightLeg} stroke={ink} strokeWidth="8.5" />
      <path d={MARK_PATHS.arrowShaft} stroke={gold} strokeWidth="8.5" />
      <path d={MARK_PATHS.arrowHead} stroke={gold} strokeWidth="8.5" />
    </svg>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label={`${firm.name} logo`}
    >
      <rect x="2" y="2" width="92" height="92" rx="22" fill="var(--color-navy-800)" />
      <rect
        x="7"
        y="7"
        width="82"
        height="82"
        rx="17"
        fill="none"
        stroke="var(--color-gold-400)"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(48.5 48.5) scale(0.62) translate(-48.5 -48.5)"
      >
        <path d={MARK_PATHS.leftLegInner} stroke="#ffffff" strokeWidth="9" />
        <path d={MARK_PATHS.rightLeg} stroke="#ffffff" strokeWidth="9" />
        <path d={MARK_PATHS.arrowShaft} stroke="var(--color-gold-300)" strokeWidth="9" />
        <path d={MARK_PATHS.arrowHead} stroke="var(--color-gold-300)" strokeWidth="9" />
      </g>
    </svg>
  );
}

// Back-compat alias — some pages use <Monogram> as an avatar-style mark.
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
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={`${firm.name} — home`}
    >
      <LogoMark
        tone={tone}
        className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
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
          Certified Public Accountants
        </span>
      </span>
    </Link>
  );
}
