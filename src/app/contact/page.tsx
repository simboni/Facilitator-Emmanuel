import type { Metadata } from "next";
import { profile } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, WhatsAppIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Work with Emmanuel Misiati on programme facilitation, training of trainers, event moderation or community-development consulting. WhatsApp, email or the enquiry form.",
};

const channels = [
  { label: "WhatsApp", value: "Fastest — usually same-day", href: profile.whatsapp, external: true, icon: WhatsAppIcon },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}`, icon: PhoneIcon },
  { label: "LinkedIn", value: "Emmanuel Misiati", href: profile.linkedin, external: true, icon: LinkedInIcon },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline-red pointer-events-none absolute -right-[6vw] bottom-0 select-none whitespace-nowrap text-[16vw] leading-none opacity-70">
          WORK WITH ME
        </p>
        <div className="container-page relative py-14 lg:py-20">
          <p className="index-label">CONTACT</p>
          <h1 className="display mt-4 text-[13vw] leading-[0.95] sm:text-7xl lg:text-8xl">
            Let&rsquo;s <span className="text-red">talk</span>
          </h1>
          <p className="serif-note mt-6 max-w-xl text-xl text-ink-soft sm:text-2xl">
            A programme to design, a room to curate, or a community to strengthen? Tell me what you
            have in mind — you&rsquo;ll hear back within one business day.
          </p>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-4">
            <p className="meta text-ink-soft">DIRECT LINES</p>
            <ul className="mt-6 space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 border-2 border-ink bg-paper p-4 shadow-hard-sm transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center border-2 border-ink bg-red text-paper">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="display block text-lg leading-tight">{c.label}</span>
                      <span className="meta block [overflow-wrap:anywhere] text-ink-faint">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-2 border-ink bg-ink p-6 text-paper">
              <p className="meta text-red-bright">GOOD TO KNOW</p>
              <ul className="mt-4 space-y-3 text-sm text-paper/80">
                <li>· Based in {profile.location} — working across East Africa &amp; virtually</li>
                <li>· Programme &amp; consulting work is scoped per engagement</li>
                <li>· Fixed day-rates for MC &amp; moderation</li>
                <li>· Travel &amp; accommodation on the client for events outside Nairobi</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="meta mb-6 text-ink-soft">OR SEND A MESSAGE</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
