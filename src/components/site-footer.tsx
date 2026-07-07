import Link from "next/link";
import { firm, nav, services } from "@/lib/firm";
import { Logo } from "@/components/logo";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="bg-navy-gradient text-navy-100">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + pitch */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-200">
              {firm.shortPitch}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                ICPAK Member No. {firm.credentials.icpakMemberNo}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Practising Cert. {firm.credentials.practicingNo}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Firm Licence {firm.credentials.firmLicenceNo}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-200 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Key Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services
                .filter((s) => s.featured)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="text-navy-200 transition-colors hover:text-gold-300"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/services"
                  className="font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <div className="flex flex-col gap-0.5">
                  {firm.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="text-navy-200 transition-colors hover:text-gold-300"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`https://wa.me/${firm.contact.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-200 transition-colors hover:text-gold-300"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${firm.contact.email}`}
                  className="break-all text-navy-200 transition-colors hover:text-gold-300"
                >
                  {firm.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-navy-200">{firm.contact.postal}</span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <div className="text-navy-200">
                  {firm.contact.hours.map((h) => (
                    <div key={h.days}>
                      {h.days}: {h.time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {firm.legalName}. All rights reserved.
          </p>
          <p>
            {firm.offices.map((o) => o.name).join(" · ")} — Bungoma, Kenya
          </p>
        </div>
      </div>

      {/* Developer credit — full width across the page */}
      <div className="border-t border-white/10 bg-navy-950/60">
        <div className="container-page py-4 text-center text-xs tracking-wide text-navy-300">
          Designed &amp; developed by{" "}
          <span className="font-semibold text-gold-300">SMP Developers Ltd</span>
        </div>
      </div>
    </footer>
  );
}
