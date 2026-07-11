import { projects, type Project } from "@/lib/portfolio";
import { Eyebrow } from "@/components/ui";

/**
 * "Worked with" marquee — a single row of the works on this portfolio, sliding
 * slowly to the right and looping seamlessly. Each item links to the project's
 * live site (falling back to its case study) and shows its brand logo in full
 * colour when one is set, otherwise a clean wordmark stand-in.
 */

// Only the works that appear on the portfolio; the site itself isn't a client.
const works = projects.filter((p) => p.slug !== "smp-portfolio");

export function ClientLogos() {
  if (works.length === 0) return null;

  // Two identical copies make the loop seamless (track animates by -50%).
  const loop = [...works, ...works];

  return (
    <section className="border-y border-ink-700 bg-ink-950/40">
      <div className="py-14 sm:py-16">
        <div className="container-page flex flex-col items-center text-center">
          <Eyebrow>worked with</Eyebrow>
          <p className="mt-3 font-mono text-sm text-mist-500">
            Brands and organisations behind the work
          </p>
        </div>

        {/* Marquee: edges fade out; motion pauses on hover */}
        <div
          className="marquee group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
          aria-label="Project brands"
        >
          <ul className="marquee-track">
            {loop.map((p, i) => (
              <LogoItem key={`${p.slug}-${i}`} project={p} duplicate={i >= works.length} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ project, duplicate }: { project: Project; duplicate: boolean }) {
  const href = project.links.live ?? `/work/${project.slug}`;
  const inner = project.logo ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.logo}
        alt={duplicate ? "" : project.title}
        className="max-h-12 max-w-full object-contain sm:max-h-14"
        loading="lazy"
      />
    </>
  ) : (
    // Wordmark stand-in until a brand logo is supplied.
    <span className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
      {project.title}
    </span>
  );

  // Each item owns its trailing gap so both copies are exactly equal width.
  return (
    <li className="mr-5 shrink-0" aria-hidden={duplicate || undefined}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — visit`}
        tabIndex={duplicate ? -1 : undefined}
        className="flex h-20 w-56 items-center justify-center rounded-xl border border-ink-600 bg-white px-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400/60 hover:shadow-[0_18px_44px_-24px_rgba(46,232,138,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:h-24 sm:w-64"
      >
        {inner}
      </a>
    </li>
  );
}
