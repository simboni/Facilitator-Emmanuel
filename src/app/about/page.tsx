import type { Metadata } from "next";
import { profile, about, skills, experience } from "@/lib/portfolio";
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
      <PageHero
        eyebrow="About"
        title="Hi, I'm Peter."
        intro={profile.tagline}
      />

      {/* Intro */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-navy-600">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="gold" withArrow>
                Work with me
              </Button>
              <Button href={`mailto:${profile.email}`} variant="outline">
                <MailIcon className="h-4 w-4" /> Email me
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-navy-100 bg-sand-50 p-8">
              <LogoMark className="h-24 w-24" />
              <div className="mt-6">
                <div className="text-lg font-semibold text-navy-900">
                  {profile.name}
                </div>
                <div className="text-navy-500">{profile.role}</div>
              </div>
              <dl className="mt-6 space-y-4 border-t border-navy-100 pt-6 text-sm">
                <Row label="Location" value={profile.location} />
                <Row label="Status" value={profile.availability} />
                <Row label="Email" value={profile.email} />
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-sand-50">
        <SectionHeading eyebrow="How I work" title="Principles I build by" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {about.principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-navy-100 bg-white p-6">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-gold-500" />
                <h3 className="font-semibold text-navy-900">{p.title}</h3>
              </div>
              <p className="mt-2 leading-relaxed text-navy-500">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <SectionHeading eyebrow="Toolkit" title="Technologies I use" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl border border-navy-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <ServiceIcon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-navy-900">{group.title}</h3>
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

      {/* Experience */}
      <Section className="bg-sand-50">
        <SectionHeading eyebrow="Journey" title="Experience" />
        <div className="mt-12 space-y-5">
          {experience.map((job, i) => (
            <div
              key={`${job.company}-${i}`}
              className="grid gap-4 rounded-2xl border border-navy-100 bg-white p-6 sm:grid-cols-12 sm:p-8"
            >
              <div className="sm:col-span-4">
                <div className="font-mono text-xs text-gold-600">{job.period}</div>
                <h3 className="mt-1 text-lg font-semibold text-navy-900">{job.role}</h3>
                <div className="text-sm text-navy-500">{job.company}</div>
                {job.location && (
                  <div className="mt-1 text-xs text-navy-400">{job.location}</div>
                )}
              </div>
              <div className="sm:col-span-8">
                <p className="text-sm leading-relaxed text-navy-600">{job.summary}</p>
                <ul className="mt-3 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-navy-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
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
      <dt className="text-navy-400">{label}</dt>
      <dd className="text-right font-medium text-navy-700">{value}</dd>
    </div>
  );
}
