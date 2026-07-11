import { clients } from "@/lib/portfolio";
import { Eyebrow } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

/**
 * "Worked with" logo wall — the organisations SMP has built for.
 * Each logo sits on a clean light card so it reads in full colour on the dark
 * theme. A client with a `link` becomes clickable and opens in a new tab.
 */
export function ClientLogos() {
  if (clients.length === 0) return null;

  return (
    <section className="border-y border-ink-700 bg-ink-950/40">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>worked with</Eyebrow>
          <p className="mt-3 font-mono text-sm text-mist-500">
            Organisations and teams I&rsquo;ve built for
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => {
            const card = (
              <>
                <div className="grid h-24 place-items-center rounded-xl border border-ink-600 bg-white p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-400/60 group-hover:shadow-[0_20px_50px_-24px_rgba(46,232,138,0.5)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-full max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <span className="sr-only">{c.name}</span>
              </>
            );
            return (
              <li key={c.name} className="group">
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.name} — visit website`}
                    className="relative block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    {card}
                    <ArrowUpRightIcon className="absolute right-2 top-2 h-4 w-4 text-mist-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                ) : (
                  <div className="block">{card}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
