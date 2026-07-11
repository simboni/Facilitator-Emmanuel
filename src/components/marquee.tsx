/**
 * Seamless ticker: renders `children` twice inside a translating track.
 * Pure CSS animation (see .marquee-track); pauses on hover, static under
 * prefers-reduced-motion.
 */
export function Marquee({
  children,
  duration = 40,
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={`marquee overflow-hidden ${className}`}
      role={ariaLabel ? "marquee" : undefined}
      aria-label={ariaLabel}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div aria-hidden={false} className="flex shrink-0 items-center">
          {children}
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
