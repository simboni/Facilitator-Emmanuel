import type { Metadata } from "next";
import { firm } from "@/lib/firm";
import { Section } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Misiati & Associates, Certified Public Accountants serving clients across Kenya. Call, WhatsApp or email us, or request a free quote. Offices in Bungoma: Chewai Plaza and Sang'alo Junction.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about how we can help"
        intro="Call, WhatsApp, email or send us a message below. We'll get back to you within one working day — with clear advice and a free quote."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-navy-900">
              Reach us directly
            </h2>
            <p className="mt-2 text-navy-500">
              We&rsquo;re happy to answer your questions — no obligation.
            </p>

            <div className="mt-8 space-y-6">
              <ContactRow icon={<PhoneIcon className="h-5 w-5" />} label="Call us">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {firm.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="font-medium text-navy-800 hover:text-gold-700"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </ContactRow>

              <ContactRow
                icon={<WhatsAppIcon className="h-5 w-5" />}
                label="WhatsApp"
              >
                <a
                  href={`https://wa.me/${firm.contact.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy-800 hover:text-gold-700"
                >
                  Message us on {firm.contact.whatsapp}
                </a>
              </ContactRow>

              <ContactRow icon={<MailIcon className="h-5 w-5" />} label="Email">
                <a
                  href={`mailto:${firm.contact.email}`}
                  className="font-medium break-all text-navy-800 hover:text-gold-700"
                >
                  {firm.contact.email}
                </a>
              </ContactRow>

              <ContactRow icon={<PinIcon className="h-5 w-5" />} label="Postal address">
                <p className="text-navy-800">{firm.contact.postal}</p>
              </ContactRow>

              <ContactRow icon={<ClockIcon className="h-5 w-5" />} label="Opening hours">
                <ul className="space-y-0.5 text-navy-800">
                  {firm.contact.hours.map((h) => (
                    <li key={h.days}>
                      <span className="text-navy-500">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </ContactRow>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl font-semibold text-navy-900">
              Send us a message
            </h2>
            <p className="mt-2 mb-6 text-navy-500">
              Fill in the form and we&rsquo;ll be in touch shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Offices + maps */}
      <div className="bg-sand-50">
        <Section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">
            Our offices
          </h2>
          <p className="mt-2 text-navy-500">
            Visit us at either of our two Bungoma locations.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {firm.offices.map((office, i) => (
              <Reveal key={office.name} variant="up" delay={i * 120} className="h-full">
              <div
                className="h-full overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <iframe
                  title={`Map of ${office.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    office.mapsQuery,
                  )}&z=15&output=embed`}
                  loading="lazy"
                  className="h-56 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy-900">
                    {office.name}
                  </h3>
                  <p className="mt-1 flex items-start gap-2 text-navy-600">
                    <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    <span>
                      {office.address}
                      <br />
                      <span className="text-sm text-navy-400">
                        {office.landmark}
                      </span>
                    </span>
                  </p>
                  <a
                    href={`https://maps.google.com/maps?q=${encodeURIComponent(
                      office.mapsQuery,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-gold-700 hover:text-gold-800"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
          {label}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
