import {
  firm,
  services,
  industries,
  testimonials,
  notableClients,
} from "@/lib/firm";
import { Button, Section, SectionHeading, Eyebrow } from "@/components/ui";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { ServiceIcon, CheckIcon, QuoteIcon, PhoneIcon } from "@/components/icons";
import { Monogram } from "@/components/logo";

const stats = [
  { value: `${firm.yearsExperience}+`, label: "Years of experience" },
  { value: firm.clientsServed, label: "Clients served" },
  { value: industries.length.toString(), label: "Industries served" },
  { value: firm.offices.length.toString(), label: "Offices in Bungoma" },
];

export default function HomePage() {
  const featured = services.filter((s) => s.featured);
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="bg-navy-gradient relative overflow-hidden">
        <div className="container-page relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-28">
          {/* Copy */}
          <div className="max-w-xl">
            <Eyebrow light>Certified Public Accountants · Bungoma</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] text-balance">
              Accounting you can{" "}
              <span className="text-gold-300">trust</span>, advice you can
              build on.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-100">
              {firm.name} provides audit, tax and advisory services to
              businesses, schools, SACCOs and organisations across Bungoma and
              Western Kenya — backed by more than {firm.yearsExperience} years
              of trusted experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="gold" size="lg" withArrow>
                Request a Free Quote
              </Button>
              <Button
                href={`tel:${firm.contact.phones[0]}`}
                variant="white"
                size="lg"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {firm.contact.phones[0]}
              </Button>
            </div>
            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-100">
              {[
                `ICPAK Member No. ${firm.credentials.icpakMemberNo}`,
                `Practising Cert. ${firm.credentials.practicingNo}`,
                `Firm Licence ${firm.credentials.firmLicenceNo}`,
              ].map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-gold-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Founder / credential card (stands in for a portrait until photos arrive) */}
          <div className="relative lg:justify-self-end">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <div className="flex items-center gap-4">
                <Monogram className="h-16 w-16" variant="navy" />
                <div>
                  <p className="font-serif text-xl font-semibold text-white">
                    {firm.managingPartner.name}
                  </p>
                  <p className="text-sm text-gold-300">
                    {firm.managingPartner.role}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-navy-100">
                &ldquo;{firm.mission}&rdquo;
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-navy-300">
                    Experience
                  </dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold text-white">
                    {firm.yearsExperience}+ yrs
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-navy-300">
                    Clients
                  </dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold text-white">
                    {firm.clientsServed}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS BAR =========================== */}
      <div className="border-b border-navy-100 bg-sand-50">
        <div className="container-page grid grid-cols-2 divide-navy-100 py-8 sm:grid-cols-4 sm:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-3 text-center">
              <p className="font-serif text-3xl font-semibold text-navy-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-navy-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ============================== ABOUT ============================= */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A licensed CPA firm built on 25 years of experience"
              intro={firm.history}
            />
            <Button href="/about" variant="outline" className="mt-8" withArrow>
              More about the firm
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {firm.differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-navy-100 bg-sand-50 p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================= SERVICES ========================== */}
      <div className="bg-sand-50">
        <Section>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Professional services that keep you compliant and growing"
              intro="From audits and tax returns to eTIMS and business advisory — practical support for every stage of your business."
            />
            <Button
              href="/services"
              variant="ghost"
              className="shrink-0"
              withArrow
            >
              All services
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s}
                href={`/services#${s.slug}`}
              />
            ))}
          </div>
        </Section>
      </div>

      {/* ============================ INDUSTRIES ========================= */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Industries we serve"
          title="Specialist knowledge across the sectors that power our region"
          intro="Decades of hands-on work with the organisations that build Western Kenya."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.slug}
              className="group flex gap-5 rounded-2xl border border-navy-100 p-6 transition-colors hover:border-gold-300 hover:bg-sand-50"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                <ServiceIcon name={ind.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-navy-900">
                  {ind.title}
                </h3>
                <p className="text-sm font-medium text-gold-600">
                  {ind.clients}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {ind.services}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================== TESTIMONIALS ======================== */}
      <div className="bg-navy-gradient">
        <Section>
          <SectionHeading
            light
            align="center"
            eyebrow="Trusted by our clients"
            title="What the people we work with say"
            className="mb-12"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8"
              >
                <QuoteIcon className="h-8 w-8 text-gold-400" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-navy-50">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-serif text-base font-semibold text-white">
                    {t.author}
                  </p>
                  <p className="text-sm text-gold-300">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Notable clients */}
          <div className="mt-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
              Organisations we have proudly worked with
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {notableClients.map((c) => (
                <span
                  key={c}
                  className="font-serif text-base font-medium text-navy-100"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ============================= CTA BAND ========================== */}
      <CtaBand />
    </>
  );
}
