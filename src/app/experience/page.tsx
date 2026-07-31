import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, experience, profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experience & Track Record",
  description:
    "Emmanuel Misiati's roles across Busara, Taifa Teule Network, Osotwa, KEAN, Shiriki and The Resilience Project — plus featured summit and youth engagements across East Africa.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline pointer-events-none absolute -left-[4vw] top-0 select-none whitespace-nowrap text-[18vw] leading-none">
          TRACK RECORD
        </p>
        <div className="container-page relative py-14 lg:py-20">
          <p className="index-label">EXPERIENCE</p>
          <h1 className="display mt-4 text-[13vw] leading-[0.95] sm:text-7xl lg:text-8xl">
            The <span className="text-red">record</span>
          </h1>
          <p className="serif-note mt-6 max-w-xl text-xl text-ink-soft sm:text-2xl">
            Four years building programmes, holding rooms and growing communities across Kenya and the region.
          </p>
        </div>
      </section>

      {/* Career timeline */}
      <section className="border-b-2 border-ink">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">ROLES &amp; ORGANIZATIONS</p>
          <ol className="mt-8 space-y-4">
            {experience.map((r, i) => (
              <Reveal key={`${r.org}-${r.title}`} delay={(i % 3) * 60}>
                <li className="grid gap-5 border-2 border-ink bg-paper p-6 shadow-hard-sm sm:p-7 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
                  <div>
                    <div className="flex items-center gap-3">
                      {r.logo && (
                        <span className="flex h-10 w-14 shrink-0 items-center justify-center border-2 border-line bg-paper p-1">
                          <Image src={r.logo} alt={`${r.org} logo`} width={56} height={40} sizes="3.5rem" className="max-h-8 w-auto object-contain" />
                        </span>
                      )}
                      {r.current && <span className="chip chip-red !py-1 !px-2.5 text-[0.6rem]">Current</span>}
                    </div>
                    <h2 className="display mt-3 text-xl sm:text-2xl">{r.title}</h2>
                    <p className="mt-1 font-bold text-red">{r.org}</p>
                    <p className="meta mt-1 text-ink-faint">{r.period}</p>
                    <p className="mt-3 text-sm text-ink-soft">{r.summary}</p>
                  </div>
                  <ul className="grid content-start gap-2.5 lg:border-l-2 lg:border-line lg:pl-8">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" /> {h}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured engagements with photography */}
      <section className="border-b-2 border-ink bg-paper-dim">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">FEATURED ENGAGEMENTS</p>
          <h2 className="display mt-4 text-[11vw] leading-[0.95] sm:text-6xl">
            In the <span className="text-red">room</span>
          </h2>
        </div>

        {caseStudies.map((cs) => (
          <div key={cs.slug} id={cs.slug} className="scroll-mt-20 overflow-x-clip border-t-2 border-ink">
            <div className="container-page py-14 lg:py-16">
              <Reveal>
                <header className="max-w-4xl">
                  <p className="meta text-red">{cs.category.toUpperCase()} · {cs.client} · {cs.year}</p>
                  <h3 className="display mt-3 break-words text-3xl sm:text-5xl">{cs.title}</h3>
                </header>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cs.images.map((img, j) => (
                  <Reveal key={img.src} delay={j * 60} className={j === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
                    <div className="overflow-hidden border-2 border-ink shadow-hard-sm">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={700}
                        height={466}
                        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 100vw"
                        className="block h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="border-l-4 border-red pl-5">
                  <h4 className="meta text-red">THE ROLE</h4>
                  <p className="mt-2 text-ink-soft">{cs.role}</p>
                </div>
                <div className="border-l-4 border-ink pl-5">
                  <h4 className="meta">THE IMPACT</h4>
                  <p className="mt-2 text-ink-soft">{cs.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-red text-paper">
        <div className="container-page flex flex-wrap items-center justify-between gap-8 py-14 lg:py-16">
          <div>
            <h2 className="display text-[11vw] leading-[0.95] sm:text-5xl">Your programme next?</h2>
            <p className="serif-note mt-3 text-lg text-paper/85">Let&rsquo;s scope it together.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="btn border-paper bg-paper !text-ink shadow-hard-sm">
              Get in touch <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn border-paper bg-transparent !text-paper shadow-none hover:bg-paper/10">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
