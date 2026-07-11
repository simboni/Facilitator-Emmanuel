import type { Metadata } from "next";
import { profile } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PhoneIcon, WhatsAppIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Check Availability",
  description:
    "Book Emmanuel Misiati as MC, facilitator or moderator for your event — WhatsApp, email or the enquiry form. Replies within one business day.",
};

const channels = [
  {
    label: "WhatsApp",
    value: "Fastest — usually same-day",
    href: profile.whatsapp,
    external: true,
    icon: WhatsAppIcon,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "Emmanuel Misiati",
    href: profile.linkedin,
    external: true,
    icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline-red pointer-events-none absolute -right-[6vw] bottom-0 select-none whitespace-nowrap text-[17vw] leading-none opacity-70">
          LET&rsquo;S WORK
        </p>
        <div className="container-page relative py-16 lg:py-20">
          <p className="index-label">CONTACT / BOOKING</p>
          <h1 className="display mt-4 text-[12vw] sm:text-8xl">
            Lock the <span className="text-red">date</span>
          </h1>
          <p className="serif-note mt-6 max-w-xl text-2xl text-ink-soft">
            Tell me the date, the room and what winning looks like — you&rsquo;ll have
            an answer within one business day.
          </p>
        </div>
      </section>

      <section className="bg-paper-dim">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
          {/* Channels */}
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
                <li>· A deposit (M-Pesa or bank transfer) locks your date</li>
                <li>· Travel &amp; accommodation on the client for events outside Nairobi</li>
                <li>· Multi-day &amp; recurring engagements quoted per brief</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <p className="meta mb-6 text-ink-soft">OR SEND THE BRIEF</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
