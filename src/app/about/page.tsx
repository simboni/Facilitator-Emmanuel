import type { Metadata } from "next";
import { profile, about, skills, experience, education } from "@/lib/portfolio";
import { PageHero } from "@/components/page-hero";
import { Button, Section, SectionHeading } from "@/components/ui";
import { LogoMark } from "@/components/logo";
import { Chip } from "@/components/project-card";
import { ServiceIcon, MailIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.role}. ${profile.tagline}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="about" title="Hi, I'm Simboni." intro={profile.tagline} />

      {/* Intro */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-mist-400">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="gold" withArrow>
                work with me
              </Button>
              <Button href={`mailto:${profile.email}`} variant="outline">
                <MailIcon className="h-4 w-4" /> email me
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="win p-8">
              <LogoMark uid="about" className="h-16 w-16" />
              <div className="mt-6">
                <div className="font-display text-lg font-semibold text-mist-100">{profile.name}</div>
                <div className="font-mono text-sm text-green-400">{profile.role}</div>
              </div>
              <dl className="mt-6 space-y-4 border-t border-ink-600 pt-6 font-mono text-sm">
                <Row label="location" value={profile.location} />
                <Row label="status" value={profile.availability} />
                <Row label="email" value={profile.email} />
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section className="border-y border-ink-700 bg-ink-850">
        <SectionHeading eyebrow="how i work" title="Principles I build by" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {about.principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-ink-600 bg-ink-800 p-6">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-400" />
                <h3 className="font-display font-semibold text-mist-100">{p.title}</h3>
              </div>
              <p className="mt-2 leading-relaxed text-mist-400">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <SectionHeading eyebrow="stack" title="Technologies I use" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-xl border border-ink-600 bg-ink-800 p-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
                  <ServiceIcon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display font-semibold text-mist-100">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section className="border-y border-ink-700 bg-ink-850">
        <SectionHeading eyebrow="education" title="Study & certification" />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {education.map((e) => (
            <div key={e.institution} className="rounded-xl border border-ink-600 bg-ink-800 p-6">
              <div className="font-mono text-xs text-green-400">{e.period}</div>
              <h3 className="mt-2 font-display font-semibold text-mist-100">{e.qualification}</h3>
              <div className="mt-1 text-sm text-mist-400">{e.institution}</div>
              {e.detail && <p className="mt-3 text-sm leading-relaxed text-mist-500">{e.detail}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section>
        <SectionHeading eyebrow="journey" title="Experience" />
        <div className="mt-12 space-y-4">
          {experience.map((job, i) => (
            <div
              key={`${job.company}-${i}`}
              className="grid gap-4 rounded-xl border border-ink-600 bg-ink-800 p-6 sm:grid-cols-12 sm:p-7"
            >
              <div className="sm:col-span-4">
                <div className="font-mono text-xs text-green-400">{job.period}</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-mist-100">{job.role}</h3>
                <div className="text-sm text-mist-400">{job.company}</div>
                {job.location && (
                  <div className="mt-1 font-mono text-xs text-mist-600">{job.location}</div>
                )}
              </div>
              <div className="sm:col-span-8">
                <p className="text-sm leading-relaxed text-mist-400">{job.summary}</p>
                <ul className="mt-3 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-mist-300">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-mist-600">{label}</dt>
      <dd className="text-right text-mist-200">{value}</dd>
    </div>
  );
}
