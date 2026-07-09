import type { Metadata } from "next";
import { profile } from "@/lib/portfolio";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import {
  MailIcon,
  PinIcon,
  PhoneIcon,
  WhatsAppIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — available for freelance projects and full-time roles.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="contact"
        title="Let's build something"
        intro="Tell me about your project or role. I read every message and reply within one working day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-mist-100">Reach me directly</h2>
            <p className="mt-3 leading-relaxed text-mist-400">
              Prefer to skip the form? Any of these work — I&rsquo;m quick to respond.
            </p>
            <ul className="mt-8 space-y-5">
              <ContactRow icon={<MailIcon className="h-5 w-5" />} label="email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<PhoneIcon className="h-5 w-5" />} label="phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={<WhatsAppIcon className="h-5 w-5" />} label="whatsapp" value="Chat with me" href={`https://wa.me/${profile.whatsapp}`} external />
              {profile.socials.github && (
                <ContactRow icon={<GitHubIcon className="h-5 w-5" />} label="github" value="View my code" href={profile.socials.github} external />
              )}
              {profile.socials.linkedin && (
                <ContactRow icon={<LinkedInIcon className="h-5 w-5" />} label="linkedin" value="Connect with me" href={profile.socials.linkedin} external />
              )}
              <ContactRow icon={<PinIcon className="h-5 w-5" />} label="based in" value={profile.location} />
            </ul>

            <div className="mt-8 rounded-xl border border-ink-600 bg-ink-800 p-6">
              <div className="flex items-center gap-2 font-mono text-sm text-green-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                {profile.availability}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-600 bg-ink-800 text-green-400">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-xs text-mist-600">{label}</span>
        <span className="block text-mist-100">{value}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          {body}
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-4">{body}</li>;
}
