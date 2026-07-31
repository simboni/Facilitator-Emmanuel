import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { methodology, profile, qualifications, references, skills, stats } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { ArrowIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Emmanuel Misiati",
  description:
    "Facilitator, program strategist and community-development practitioner grounded in a B.A. in Community Development and certified in mediation and training of trainers. Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline pointer-events-none absolute -right-[8vw] top-2 select-none whitespace-nowrap text-[18vw] leading-none">
          MISIATI
        </p>
        <div className="container-page relative grid gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="index-label">ABOUT</p>
            <h1 className="display mt-4 text-[12vw] leading-[0.95] sm:text-6xl lg:text-7xl">
              <span className="text-red">Emmanuel</span>
              <br />
              Marumbu
              <br />
              Misiati<span className="text-red-bright">.</span>
            </h1>
            <p className="serif-note mt-6 max-w-lg text-xl text-ink-soft sm:text-2xl">{profile.tagline}</p>
            <div className="mt-8 max-w-xl space-y-5 text-ink-soft">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm border-2 border-ink bg-paper p-3 shadow-hard">
              <Image
                src="/images/emmanuel-portrait.webp"
                alt="Portrait of Emmanuel Misiati"
                width={660}
                height={990}
                sizes="(min-width: 1024px) 24rem, 80vw"
                priority
                className="block h-auto w-full bg-red object-cover"
              />
              <p className="meta mt-2 flex justify-between text-ink-soft">
                <span>THE FACILITATOR</span>
                <span className="text-red">NAIROBI, KE</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="display text-4xl text-red-bright sm:text-5xl">
                <CountUp end={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-bold text-paper">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b-2 border-ink">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">METHODOLOGY</p>
          <h2 className="display mt-4 text-[10vw] leading-[0.95] sm:text-6xl">
            How I hold a room
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {methodology.map((m, i) => (
              <Reveal key={m.no} delay={i * 70}>
                <div className="h-full border-2 border-ink bg-paper p-6 shadow-hard-sm">
                  <p className="display text-4xl text-red">{m.no}</p>
                  <h3 className="display mt-3 text-xl">{m.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications + Skills */}
      <section className="border-b-2 border-ink bg-paper-dim">
        <div className="container-page grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="index-label">QUALIFICATIONS &amp; ACCREDITATIONS</p>
            <ul className="mt-6 space-y-4">
              {qualifications.map((q) => (
                <li key={q.title} className="border-b-2 border-line pb-4">
                  <p className="display text-lg">{q.title}</p>
                  <p className="meta mt-1 text-ink-faint">
                    {q.org}
                    {q.year ? ` · ${q.year}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="index-label">CORE SKILLS</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {skills.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" /> {s}
                </li>
              ))}
            </ul>
            <p className="index-label mt-10">LANGUAGES &amp; TOOLS</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">English</span>
              <span className="chip">Kiswahili</span>
              <span className="chip">Google Workspace</span>
              <span className="chip">Zoom</span>
              <span className="chip">Canva</span>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="border-b-2 border-ink">
        <div className="container-page py-14 lg:py-20">
          <p className="index-label">REFERENCES</p>
          <h2 className="display mt-4 text-[10vw] leading-[0.95] sm:text-6xl">
            Vouched for<span className="text-red">.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {references.map((r) => (
              <div key={r.name} className="border-2 border-ink bg-paper p-6 shadow-hard-sm">
                <p className="display text-xl">{r.name}</p>
                <p className="mt-2 text-sm text-ink-soft">{r.title}</p>
                <p className="meta mt-3 text-red">{r.relationship}</p>
              </div>
            ))}
          </div>
          <p className="meta mt-6 text-ink-faint">Full contact details available on request.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red text-paper">
        <div className="container-page flex flex-wrap items-center justify-between gap-8 py-14 lg:py-16">
          <h2 className="display text-[11vw] leading-[0.95] sm:text-5xl">Let&rsquo;s build something.</h2>
          <Link href="/contact/" className="btn border-paper bg-paper !text-ink shadow-hard-sm">
            Get in touch <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
