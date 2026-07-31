import type { Metadata } from "next";
import Link from "next/link";
import { faq, pillars, profile, services, tiers } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Expertise & Services",
  description:
    "Programme facilitation, facilitator development & training of trainers, curriculum design, event moderation and community-development consulting — across Kenya and East Africa.",
};

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline pointer-events-none absolute -right-[5vw] -top-3 select-none whitespace-nowrap text-[17vw] leading-none">
          EXPERTISE
        </p>
        <div className="container-page relative py-14 lg:py-20">
          <p className="index-label">EXPERTISE / SERVICES</p>
          <h1 className="display mt-4 max-w-4xl text-[12vw] leading-[0.95] sm:text-7xl lg:text-8xl">
            What I bring to the <span className="text-red">room</span>
          </h1>
          <p className="serif-note mt-6 max-w-xl text-xl text-ink-soft sm:text-2xl">
            Three pillars of practice, four ways to work together — all built on structure and care.
          </p>
        </div>
      </section>

      {/* Pillars in depth */}
      <section className="border-b-2 border-ink bg-paper-dim">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">THE THREE PILLARS</p>
          <div className="mt-8 space-y-5">
            {pillars.map((p, i) => (
              <Reveal key={p.no} delay={i * 60}>
                <article className="border-2 border-ink bg-paper p-6 shadow-hard-sm sm:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="display text-4xl text-red sm:text-5xl">{p.no}</span>
                    <h2 className="display text-2xl sm:text-4xl">{p.name}</h2>
                  </div>
                  <p className="mt-4 max-w-3xl text-ink-soft">{p.summary}</p>
                  <ul className="mt-6 grid gap-5 md:grid-cols-3">
                    {p.points.map((pt) => (
                      <li key={pt.title} className="border-t-2 border-line pt-4">
                        <h3 className="font-bold leading-snug text-ink">{pt.title}</h3>
                        <p className="mt-2 text-sm text-ink-soft">{pt.body}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section className="border-b-2 border-ink">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">WAYS TO WORK TOGETHER</p>
          <h2 className="display mt-4 text-[10vw] leading-[0.95] sm:text-6xl">
            Services<span className="text-red">.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 70}>
                <div className="flex h-full flex-col border-2 border-ink bg-paper p-6 shadow-hard-sm">
                  <span className="meta text-red">0{i + 1}</span>
                  <h3 className="display mt-2 text-xl sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-2 border-ink bg-ink px-6 py-5 text-paper">
            <p className="max-w-xl text-sm text-paper/85">
              Programme design, facilitator development and governance consulting are scoped per
              engagement. Send the brief and you&rsquo;ll get a clear proposal.
            </p>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn border-paper bg-paper !text-ink shadow-none">
              <WhatsAppIcon className="h-4 w-4" /> Send the brief
            </a>
          </div>
        </div>
      </section>

      {/* Event hosting packages (secondary, fixed-rate) */}
      <section className="border-b-2 border-ink bg-paper-dim">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">EVENT HOSTING &amp; MODERATION</p>
          <h2 className="display mt-4 text-[10vw] leading-[0.95] sm:text-6xl">
            Straightforward day-rates
          </h2>
          <p className="serif-note mt-4 max-w-xl text-lg text-ink-soft">
            For MC and moderation work, pricing is simple and on the table — in Kenya shillings.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.slug} delay={i * 70}>
                <article className={`relative flex h-full flex-col border-2 border-ink bg-paper p-6 ${t.popular ? "shadow-hard-red" : "shadow-hard-sm"}`}>
                  {t.popular && <span className="chip chip-red absolute -top-4 left-6 shadow-hard-sm">Most booked</span>}
                  <h3 className="display text-2xl">{t.name}</h3>
                  <p className="serif-note mt-2 text-base text-ink-soft">{t.tagline}</p>
                  <p className="display mt-5 text-4xl">
                    <span className="meta mr-1 align-top !text-[0.8rem]">KES</span>
                    {t.price.toLocaleString("en-KE")}
                  </p>
                  <p className="meta mt-1 text-ink-faint">{t.priceNote}</p>
                  <ul className="mt-5 flex-1 space-y-2 border-t-2 border-line pt-5">
                    {t.includes.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" /> {line}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact/" className={`btn mt-6 w-full ${t.popular ? "btn-red" : ""}`}>
                    Check availability <ArrowIcon className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">STRAIGHT ANSWERS</p>
          <h2 className="display mt-4 text-[10vw] leading-[0.95] sm:text-6xl">
            Before you ask<span className="text-red">…</span>
          </h2>
          <div className="mt-10 grid gap-x-10 md:grid-cols-2">
            {faq.map((f) => (
              <details key={f.q} className="group border-b-2 border-ink py-5">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="display text-lg sm:text-xl">{f.q}</h3>
                  <span aria-hidden="true" className="display shrink-0 text-2xl text-red transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact/" className="btn btn-red">
              Book a session <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
