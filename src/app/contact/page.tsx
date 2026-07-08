import type { Metadata } from "next";
import { profile } from "@/lib/portfolio";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, PinIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — available for freelance projects and full-time roles.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        intro="Tell me about your project or role. I read every message and reply within one working day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Reach me directly
            </h2>
            <p className="mt-3 leading-relaxed text-navy-500">
              Prefer to skip the form? Any of these work — I&rsquo;m quick to respond.
            </p>
            <ul className="mt-8 space-y-5">
              <ContactRow
                icon={<MailIcon className="h-5 w-5" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              {profile.socials.github && (
                <ContactRow
                  icon={<GitHubIcon className="h-5 w-5" />}
                  label="GitHub"
                  value="View my code"
                  href={profile.socials.github}
                  external
                />
              )}
              {profile.socials.linkedin && (
                <ContactRow
                  icon={<LinkedInIcon className="h-5 w-5" />}
                  label="LinkedIn"
                  value="Connect with me"
                  href={profile.socials.linkedin}
                  external
                />
              )}
              <ContactRow
                icon={<PinIcon className="h-5 w-5" />}
                label="Based in"
                value={profile.location}
              />
            </ul>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-sand-50 p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-navy-900">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
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
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-wide text-navy-400">
          {label}
        </span>
        <span className="block font-medium text-navy-900">{value}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex items-center gap-4 transition-opacity hover:opacity-70"
        >
          {body}
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-4">{body}</li>;
}
