import type { Metadata } from "next";
import { profile } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, WhatsAppIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book Emmanuel Misiati",
  description:
    "Work with Emmanuel Misiati on programme facilitation, training of trainers, event moderation or community-development consulting. WhatsApp, call, email or send a brief.",
};

const channels = [
  { label: "WhatsApp", value: "Fastest — usually same-day", href: profile.whatsapp, external: true, icon: WhatsAppIcon, accent: "act-green" },
  { label: "Call", value: profile.phoneDisplay, href: `tel:${profile.phone}`, icon: PhoneIcon },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "LinkedIn", value: "Emmanuel Misiati", href: profile.linkedin, external: true, icon: LinkedInIcon },
];

export default function ContactPage() {
  return (
    <div className="app app-wide space-y-4 pt-2">
      <header className="px-1 pt-2">
        <p className="pill pill-red">Book</p>
        <h1 className="display mt-3 text-4xl">Let&rsquo;s talk</h1>
        <p className="mt-2 text-sm text-ink-soft">
          A programme to design, a room to curate, or a community to strengthen? {profile.responsePromise}.
        </p>
      </header>

      {/* Quick channels */}
      <section className="grid grid-cols-2 gap-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="card flex flex-col gap-2 p-4 transition-transform active:scale-[0.98]"
          >
            <span className={`act ${c.accent ?? "act-red"} !h-10 !w-10 !p-0`}>
              <c.icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-ink">{c.label}</span>
              <span className="block truncate text-xs text-ink-faint">{c.value}</span>
            </span>
          </a>
        ))}
      </section>

      {/* Form */}
      <section>
        <h2 className="display mb-2.5 px-1 text-xl">Or send a brief</h2>
        <ContactForm />
      </section>

      <section className="card p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-red">Good to know</p>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>· Based in {profile.location} — working across East Africa &amp; virtually</li>
          <li>· Programme &amp; consulting work scoped per engagement</li>
          <li>· Fixed day-rates for MC &amp; moderation</li>
          <li>· Travel &amp; accommodation on the client outside Nairobi</li>
        </ul>
      </section>
    </div>
  );
}
