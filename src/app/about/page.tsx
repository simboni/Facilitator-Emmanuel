import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { methodology, profile, qualifications, references, skills, stats } from "@/lib/content";
import { CountUp } from "@/components/count-up";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Emmanuel Misiati",
  description:
    "Facilitator, program strategist and community-development practitioner — grounded in a B.A. in Community Development and certified in mediation and training of trainers.",
};

export default function AboutPage() {
  return (
    <div className="app app-wide space-y-4 pt-2">
      {/* Portrait + intro */}
      <section className="card overflow-hidden">
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/emmanuel-standing.webp"
            alt="Emmanuel Misiati"
            fill
            priority
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="bg-paper-dim object-contain object-bottom"
          />
        </div>
        <div className="p-5">
          <p className="pill pill-red">About</p>
          <h1 className="display mt-3 text-3xl">Emmanuel Marumbu Misiati</h1>
          <p className="serif-note mt-3 text-lg text-ink-soft">{profile.tagline}</p>
        </div>
      </section>

      {/* Bio */}
      <section className="card p-5">
        <div className="space-y-3 text-sm text-ink-soft">
          {profile.bio.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="card card-ink p-5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="display text-2xl text-red-bright">
                <CountUp end={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </p>
              <p className="mt-0.5 text-xs text-paper/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section>
        <h2 className="display mb-2.5 px-1 text-xl">How I hold a room</h2>
        <div className="space-y-3">
          {methodology.map((m) => (
            <div key={m.no} className="card p-5">
              <div className="flex gap-3">
                <span className="display text-2xl text-red">{m.no}</span>
                <div>
                  <p className="font-bold text-ink">{m.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">{m.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qualifications */}
      <section className="card p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">Qualifications &amp; accreditations</p>
        <ul className="mt-3 space-y-3">
          {qualifications.map((q) => (
            <li key={q.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
              <p className="font-semibold text-ink">{q.title}</p>
              <p className="text-xs text-ink-faint">{q.org}{q.year ? ` · ${q.year}` : ""}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="card p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">Core skills</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skills.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>
        <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">Languages &amp; tools</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["English", "Kiswahili", "Google Workspace", "Zoom", "Canva"].map((s) => (
            <span key={s} className="pill pill-red">{s}</span>
          ))}
        </div>
      </section>

      {/* References */}
      <section>
        <h2 className="display mb-2.5 px-1 text-xl">References</h2>
        <div className="space-y-3">
          {references.map((r) => (
            <div key={r.name} className="card p-4">
              <p className="font-bold text-ink">{r.name}</p>
              <p className="text-xs text-ink-soft">{r.title}</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-wide text-red">{r.relationship}</p>
            </div>
          ))}
          <p className="px-1 font-mono text-[0.62rem] uppercase tracking-wide text-ink-faint">Full contact details on request.</p>
        </div>
      </section>

      <section className="card card-red p-6 text-center">
        <h2 className="display text-2xl">Let&rsquo;s build something.</h2>
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
