import Link from "next/link";
import { nav, profile, projects } from "@/lib/portfolio";
import { Logo } from "@/components/logo";
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="bg-navy-gradient text-navy-100">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + pitch */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-200">
              {profile.valueProp}
            </p>
            <div className="mt-6 flex gap-3">
              {profile.socials.github && (
                <SocialLink href={profile.socials.github} label="GitHub">
                  <GitHubIcon className="h-5 w-5" />
                </SocialLink>
              )}
              {profile.socials.linkedin && (
                <SocialLink href={profile.socials.linkedin} label="LinkedIn">
                  <LinkedInIcon className="h-5 w-5" />
                </SocialLink>
              )}
              {profile.socials.x && (
                <SocialLink href={profile.socials.x} label="X">
                  <XIcon className="h-4 w-4" />
                </SocialLink>
              )}
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <MailIcon className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
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

          {/* Selected work */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Selected work
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {projects.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="text-navy-200 transition-colors hover:text-gold-300"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1 font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  View all work <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; built by SMP Developers</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-navy-100 transition-colors hover:border-gold-400/50 hover:bg-white/10 hover:text-gold-300"
    >
      {children}
    </a>
  );
}
