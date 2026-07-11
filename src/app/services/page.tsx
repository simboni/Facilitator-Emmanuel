import type { Metadata } from "next";
import Link from "next/link";
import { addOns, faq, process, profile, tiers } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "MC, facilitation and moderation packages from KES 25,000 per event day — hosting, audience engagement, panel moderation and full event partnership across Kenya and East Africa.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline pointer-events-none absolute -right-[5vw] -top-4 select-none whitespace-nowrap text-[18vw] leading-none">
          SERVICES
        </p>
        <div className="container-page relative py-16 lg:py-20">
          <p className="index-label">SERVICES / PRICING</p>
          <h1 className="display mt-4 max-w-4xl text-[12vw] sm:text-8xl">
            Pick your
            <br />
            <span className="text-red">peace</span> of mind
          </h1>
          <p className="serif-note mt-6 max-w-xl text-2xl text-ink-soft">
            Three ways to book me — from a safe pair of hands on the mic to a full
            event partner who walks in weeks before the doors open.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-b-2 border-ink bg-paper-dim">
        <div className="container-page py-16">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.slug} delay={i * 80}>
                <article
                  id={t.slug}
                  className={`relative flex h-full flex-col border-2 border-ink bg-paper p-7 ${
                    t.popular ? "shadow-hard-red lg:-translate-y-4" : "shadow-hard"
                  } ${i === 0 ? "lg:rotate-[-0.6deg]" : i === 2 ? "lg:rotate-[0.6deg]" : ""}`}
                >
                  {t.popular && (
                    <span className="chip chip-red absolute -top-4 left-6 shadow-hard-sm">Most booked</span>
                  )}
                  <p className="meta text-red">0{i + 1}</p>
                  <h2 className="display mt-2 text-3xl sm:text-4xl">{t.name}</h2>
                  <p className="serif-note mt-3 text-lg text-ink-soft">{t.tagline}</p>

                  <p className="display mt-6 text-5xl">
                    <span className="meta mr-1 align-top !text-[0.85rem]">KES</span>
                    {t.price.toLocaleString("en-KE")}
                  </p>
                  <p className="meta mt-1 text-ink-faint">{t.priceNote}</p>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t-2 border-line pt-6">
                    {t.includes.map((line) => (
                      <li key={line} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact/" className={`btn mt-8 w-full ${t.popular ? "btn-red" : ""}`}>
                    Check availability <ArrowIcon className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-2 border-ink bg-paper px-6 py-5 shadow-hard-sm">
            <p className="text-sm text-ink-soft">
              <strong className="font-bold text-ink">Multi-day summit? Outside Nairobi? Recurring series?</strong>{" "}
              Every event is quoted properly — send the brief and get a straight answer.
            </p>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn !py-2.5">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp the brief
            </a>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="container-page py-16">
          <p className="index-label">BEYOND THE STAGE</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl">
            Also in the <span className="text-red">kit</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {addOns.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className={`h-full border-2 border-ink bg-paper p-6 ${i % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"} transition-transform hover:rotate-0`}>
                  <h3 className="display text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-page py-16">
          <p className="meta text-red-bright">HOW WE WORK</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl">
            Enquiry → <span className="text-outline-paper">encore</span>
          </h2>
          <p className="serif-note mt-4 max-w-lg text-xl text-paper/75">
            Most of an MC&rsquo;s work happens before the doors open. Here is exactly
            what booking me looks like.
          </p>

          <ol className="mt-12 grid gap-px overflow-hidden border-2 border-paper/60 bg-paper/25 md:grid-cols-5">
            {process.map((p) => (
              <li key={p.no} className="bg-ink p-6">
                <p className="display text-4xl text-red-bright">{p.no}</p>
                <h3 className="display mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-paper/70">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden">
        <p aria-hidden="true" className="display text-outline-red pointer-events-none absolute -left-[2vw] bottom-2 select-none whitespace-nowrap text-[16vw] leading-none opacity-50">
          FAQ FAQ FAQ
        </p>
        <div className="container-page relative py-16">
          <p className="index-label">STRAIGHT ANSWERS</p>
          <h2 className="display mt-4 text-5xl sm:text-6xl">
            Before you ask<span className="text-red">…</span>
          </h2>
          <div className="mt-10 grid gap-x-10 md:grid-cols-2">
            {faq.map((f) => (
              <details key={f.q} className="group border-b-2 border-ink py-5">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="display text-xl">{f.q}</h3>
                  <span aria-hidden="true" className="display text-2xl text-red transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Link href="/contact/" className="btn btn-red">
              Check availability <ArrowIcon className="h-4 w-4" />
            </Link>
            <p className="meta text-ink-faint">[ {profile.responsePromise} ]</p>
          </div>
        </div>
      </section>
    </>
  );
}
