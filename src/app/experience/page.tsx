import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, experience, profile } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work & Experience",
  description:
    "Emmanuel Misiati's roles across Busara, Taifa Teule, Osotwa, KEAN, Shiriki and The Resilience Project, plus featured summit and youth engagements.",
};

export default function ExperiencePage() {
  return (
    <div className="app app-wide space-y-4 pt-2">
      <header className="px-1 pt-2">
        <p className="pill pill-red">Experience</p>
        <h1 className="display mt-3 text-4xl">The record</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Four years building programmes, holding rooms and growing communities across the region.
        </p>
      </header>

      {/* Featured engagements */}
      <section>
        <h2 className="display mb-2.5 px-1 text-xl">Featured engagements</h2>
        <div className="space-y-4">
          {caseStudies.map((cs) => (
            <article key={cs.slug} id={cs.slug} className="card scroll-mt-20 overflow-hidden">
              <div className="grid grid-cols-3 gap-0.5">
                {cs.images.slice(0, 3).map((img) => (
                  <div key={img.src} className="relative aspect-square">
                    <Image src={img.src} alt={img.alt} fill sizes="14rem" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="p-5">
                <p className="font-mono text-[0.66rem] uppercase tracking-wide text-red">
                  {cs.category} · {cs.client} · {cs.year}
                </p>
                <h3 className="display mt-1.5 text-xl">{cs.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{cs.role}</p>
                <p className="mt-3 border-t border-line pt-3 text-sm text-ink-soft">
                  <span className="font-semibold text-ink">Impact — </span>{cs.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Roles timeline */}
      <section>
        <h2 className="display mb-2.5 px-1 text-xl">Roles &amp; organizations</h2>
        <ol className="space-y-3">
          {experience.map((r) => (
            <li key={`${r.org}-${r.title}`} className="card p-5">
              <div className="flex items-center gap-2.5">
                {r.logo && (
                  <span className="flex h-9 w-11 shrink-0 items-center justify-center rounded-lg bg-paper-dim p-1">
                    <Image src={r.logo} alt={`${r.org} logo`} width={44} height={36} sizes="3rem" className="max-h-7 w-auto object-contain" />
                  </span>
                )}
                {r.current && <span className="pill pill-red">Current</span>}
                <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">{r.period}</span>
              </div>
              <h3 className="display mt-3 text-lg leading-tight">{r.title}</h3>
              <p className="text-sm font-bold text-red">{r.org}</p>
              <p className="mt-2 text-sm text-ink-soft">{r.summary}</p>
              {r.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-ink-soft">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red" /> {h}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="card card-red p-6 text-center">
        <h2 className="display text-2xl">Your programme next?</h2>
        <div className="mt-4 flex justify-center gap-2">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="act act-green">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact/" className="act bg-paper !text-ink">Book a session</Link>
        </div>
      </section>
    </div>
  );
}
