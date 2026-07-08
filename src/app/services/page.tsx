import type { Metadata } from "next";
import { services, industries, firm } from "@/lib/firm";
import { Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Audit, tax returns, eTIMS, bookkeeping, payroll, KRA PIN registration, financial statements, business advisory and more — from Misiati & Associates, Certified Public Accountants serving clients across Kenya.",
};

const process = [
  {
    step: "01",
    title: "Talk to us",
    body: "Call, WhatsApp or send an enquiry. We listen to your needs and answer your questions — free of charge.",
  },
  {
    step: "02",
    title: "Get a clear quote",
    body: "We agree a scope and give you fair, transparent fees before any work begins. No surprises.",
  },
  {
    step: "03",
    title: "We do the work",
    body: "Our team handles your audit, tax, books or advisory with professionalism and to ICPAK standards.",
  },
  {
    step: "04",
    title: "Ongoing support",
    body: "We stay available all year — for filings, deadlines, KRA matters and advice whenever you need it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our services"
        title="Everything your business needs to stay compliant and grow"
        intro="A complete range of accountancy, tax and advisory services — delivered by a licensed CPA firm you can trust."
      />

      {/* Services grid with anchors */}
      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title="Professional services, in plain language"
          intro="Not sure which service you need? Talk to us — we'll point you in the right direction."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              variant="up"
              delay={(i % 3) * 90}
              className="h-full"
            >
              <div
                id={s.slug}
                className="group flex h-full scroll-mt-28 flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-100 group-hover:text-gold-700">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  {s.featured && (
                    <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                      Most requested
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug text-navy-900">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">
                  {s.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-navy-100 bg-sand-50 px-5 py-4 text-sm text-navy-600">
          <strong className="font-semibold text-navy-900">Pricing:</strong>{" "}
          Every client&rsquo;s needs are different, so we prepare a tailored
          quotation rather than fixed prices.{" "}
          <a
            href="/contact"
            className="font-medium text-gold-700 underline underline-offset-2"
          >
            Contact us for a free, no-obligation quote.
          </a>
        </p>
      </Section>

      {/* Industries */}
      <div className="bg-sand-50">
        <Section>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Tailored to your sector"
            intro="We understand the specific accounting and compliance needs of the sectors that drive Kenya's economy."
            className="mb-12"
          />
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="px-5 py-4 font-semibold">Industry</th>
                  <th className="hidden px-5 py-4 font-semibold sm:table-cell">
                    Who we serve
                  </th>
                  <th className="px-5 py-4 font-semibold">Services provided</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {industries.map((ind) => (
                  <tr key={ind.slug} className="align-top hover:bg-sand-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                          <ServiceIcon name={ind.icon} className="h-5 w-5" />
                        </span>
                        <span className="font-serif font-semibold text-navy-900">
                          {ind.title}
                        </span>
                      </div>
                      <p className="mt-2 text-navy-500 sm:hidden">{ind.clients}</p>
                    </td>
                    <td className="hidden px-5 py-4 text-navy-600 sm:table-cell">
                      {ind.clients}
                    </td>
                    <td className="px-5 py-4 text-navy-600">{ind.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>

      {/* Process */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="Simple, transparent, and built around you"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} variant="up" delay={i * 100} className="h-full">
              <div className="group relative h-full rounded-2xl border border-navy-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/5">
                <span className="font-serif text-4xl font-semibold text-gold-200 transition-colors duration-300 group-hover:text-gold-400">
                  {p.step}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/contact" variant="gold" size="lg" withArrow>
            Start with a free consultation
          </Button>
        </div>
      </Section>

      <CtaBand
        title="Let's find the right service for you"
        intro={`Speak to our team on ${firm.contact.phones[0]} or send us a message — we'll recommend exactly what you need.`}
      />
    </>
  );
}
