import type { Metadata } from "next";
import Link from "next/link";
import { faq, pillars, profile, services, tiers } from "@/lib/content";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Expertise & Services",
  description:
    "Programme facilitation, training of trainers, curriculum design, event moderation and community-development consulting across Kenya and East Africa.",
};

export default function ExpertisePage() {
  return (
    <div className="app app-wide space-y-4 pt-2">
      <header className="px-1 pt-2">
        <p className="pill pill-red">Expertise</p>
        <h1 className="display mt-3 text-4xl">What I bring</h1>
        <p className="mt-2 text-sm text-ink-soft">Three pillars, four ways to work together — built on structure and care.</p>
      </header>

      {/* Pillars */}
      <section className="space-y-3">
        {pillars.map((p) => (
          <article key={p.no} className="card p-5">
            <div className="flex items-baseline gap-3">
              <span className="display text-3xl text-red">{p.no}</span>
              <h2 className="display text-xl">{p.name}</h2>
            </div>
            <p className="mt-2 text-sm text-ink-soft">{p.summary}</p>
            <ul className="mt-4 space-y-3">
              {p.points.map((pt) => (
                <li key={pt.title} className="border-t border-line pt-3">
                  <p className="text-sm font-bold text-ink">{pt.title}</p>
                  <p className="mt-1 text-xs text-ink-soft">{pt.body}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Services */}
      <section>
        <h2 className="display mb-2.5 px-1 text-xl">Ways to work together</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="card p-5">
              <span className="font-mono text-[0.66rem] uppercase tracking-wide text-red">0{i + 1}</span>
              <h3 className="display mt-1.5 text-lg leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event hosting rates */}
      <section>
        <h2 className="display mb-1 px-1 text-xl">Event hosting rates</h2>
        <p className="mb-2.5 px-1 text-xs text-ink-faint">For MC &amp; moderation. Programme/consulting work is scoped per brief.</p>
        <div className="swipe">
          {tiers.map((t) => (
            <article key={t.slug} className={`card w-[74vw] max-w-[18rem] p-5 ${t.popular ? "card-red" : ""}`}>
              {t.popular && <span className={`pill ${t.popular ? "!bg-paper/20 !text-paper" : "pill-red"}`}>Most booked</span>}
              <h3 className="display mt-2 text-xl">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.popular ? "text-paper/80" : "text-ink-soft"}`}>{t.tagline}</p>
              <p className="display mt-4 text-3xl">
                <span className="font-mono text-xs align-top">KES </span>{t.price.toLocaleString("en-KE")}
              </p>
              <p className={`text-xs ${t.popular ? "text-paper/70" : "text-ink-faint"}`}>{t.priceNote}</p>
              <ul className="mt-4 space-y-1.5">
                {t.includes.map((line) => (
                  <li key={line} className={`flex items-start gap-2 text-xs ${t.popular ? "text-paper/90" : "text-ink-soft"}`}>
                    <CheckIcon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${t.popular ? "text-paper" : "text-red"}`} /> {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="card p-5">
        <h2 className="display text-xl">FAQ</h2>
        <div className="mt-3 divide-y divide-line">
          {faq.map((f) => (
            <details key={f.q} className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-bold text-ink">{f.q}</span>
                <span aria-hidden="true" className="shrink-0 text-red transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card card-ink p-6 text-center">
        <h2 className="display text-2xl">Ready to scope it?</h2>
        <div className="mt-4 flex justify-center gap-2">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="act act-green">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact/" className="act act-red">Book a session</Link>
        </div>
      </section>
    </div>
  );
}
