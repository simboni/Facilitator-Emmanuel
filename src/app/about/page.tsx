import type { Metadata } from "next";
import { firm, team } from "@/lib/firm";
import { Section, SectionHeading, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Monogram } from "@/components/logo";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Misiati & Associates is a licensed CPA firm serving clients across Kenya, led by CPA John Simboni Misiati with over 25 years of tax, audit and advisory experience.",
};

export default function AboutPage() {
  const mp = firm.managingPartner;
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About the firm"
        title="Trusted local expertise, backed by decades of experience"
        intro={firm.shortPitch}
      />

      {/* Story + mission */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Our story" title="How Misiati & Associates began" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-600">
              <p>{firm.history}</p>
              <p>
                Today the firm serves more than {firm.clientsServed} clients —
                from contractors and schools to SACCOs, NGOs and growing
                businesses — across every county of Kenya.
                We combine the reliability of a licensed CPA practice with the
                personal attention of a local firm that genuinely knows its
                clients.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-navy-100 bg-sand-50 p-8">
              <Eyebrow>Our mission</Eyebrow>
              <p className="mt-4 font-serif text-xl leading-relaxed text-navy-900">
                &ldquo;{firm.mission}&rdquo;
              </p>
              <ul className="mt-6 space-y-3 border-t border-navy-100 pt-6 text-sm text-navy-600">
                {["Integrity", "Objectivity", "Honesty", "Customer satisfaction"].map(
                  (v) => (
                    <li key={v} className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-gold-600" />
                      {v}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Managing partner */}
      <div className="bg-navy-gradient">
        <Section>
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            {/* Profile card */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
                <Monogram className="h-20 w-20" variant="navy" />
                <h3 className="mt-6 font-serif text-2xl font-semibold text-white">
                  {mp.name}
                </h3>
                <p className="text-gold-300">{mp.role}</p>
                <dl className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-navy-300">
                      Education
                    </dt>
                    <dd className="mt-1 text-navy-50">{mp.education}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-navy-300">
                      ICPAK Member No.
                    </dt>
                    <dd className="mt-1 text-navy-50">
                      {firm.credentials.icpakMemberNo}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Bio + credentials */}
            <div className="lg:col-span-3">
              <SectionHeading
                light
                eyebrow="Meet the managing partner"
                title="Leadership you can rely on"
                intro={mp.bio}
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h4 className="font-serif text-lg font-semibold text-white">
                    Qualifications
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-navy-100">
                    {mp.qualifications.map((q) => (
                      <li key={q} className="flex gap-3">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h4 className="font-serif text-lg font-semibold text-white">
                    Experience
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-navy-100">
                    {mp.experience.map((e) => (
                      <li key={e} className="flex gap-3">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Team */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Our team"
          title="The people behind the firm"
          intro="A dedicated team supporting every engagement with skill and care."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col items-center rounded-2xl border border-navy-100 bg-sand-50 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:bg-white hover:shadow-lg hover:shadow-navy-900/5">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-800 font-serif text-2xl font-semibold text-gold-300 transition-transform duration-300 group-hover:scale-105">
                  {m.initials}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-navy-500">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-navy-400">
          Professional photographs of our partner, team and offices will be
          added here soon.
        </p>
      </Section>

      <CtaBand
        title="Work with a firm that knows your world"
        intro="From your first KRA return to a full statutory audit, we bring decades of local experience to your side."
      />
    </>
  );
}
