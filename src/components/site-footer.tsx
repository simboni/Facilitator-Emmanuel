import Link from "next/link";
import { profile, nav } from "@/lib/content";
import { Marquee } from "@/components/marquee";
import { ArrowIcon, MailIcon, PhoneIcon, WhatsAppIcon, LinkedInIcon } from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      {/* Let's-work ticker doubles as the site-wide CTA */}
      <Link href="/contact/" aria-label="Go to the contact page" className="block border-b border-paper/15">
        <Marquee duration={26} className="py-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="display mx-6 flex items-center gap-6 text-5xl text-paper sm:text-6xl">
              Let&rsquo;s work <ArrowIcon className="h-9 w-9 text-red-bright" />
              <span className="text-outline-paper">Let&rsquo;s work</span>
              <ArrowIcon className="h-9 w-9 text-red-bright" />
            </span>
          ))}
        </Marquee>
      </Link>

      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="display text-2xl">
            Misiati<span className="text-red-bright">.</span>
          </p>
          <p className="meta mt-3 text-paper/60">{profile.role}</p>
          <p className="serif-note mt-6 max-w-xs text-lg text-paper/80">
            The invisible thread that keeps the agenda moving, the speakers comfortable and the audience locked in.
          </p>
        </div>

        <nav aria-label="Footer" className="md:justify-self-center">
          <p className="meta mb-4 text-paper/50">Index</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/" className="meta text-paper transition-colors hover:text-red-bright">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="meta text-paper transition-colors hover:text-red-bright">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <p className="meta mb-4 text-paper/50">Contact</p>
          <ul className="space-y-2.5">
            <li>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="meta flex items-center gap-2 text-paper transition-colors hover:text-red-bright">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="meta flex items-center gap-2 text-paper transition-colors hover:text-red-bright">
                <MailIcon className="h-4 w-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`} className="meta flex items-center gap-2 text-paper transition-colors hover:text-red-bright">
                <PhoneIcon className="h-4 w-4" /> {profile.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="meta flex items-center gap-2 text-paper transition-colors hover:text-red-bright">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
          <p className="meta mt-6 text-paper/40">{profile.location} · {profile.reach}</p>
        </div>
      </div>

      <div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-paper/15 py-5">
        <p className="meta text-paper/40">© {year} Emmanuel Misiati. All rights reserved.</p>
        <p className="meta text-paper/40">[ {profile.responsePromise} ]</p>
      </div>
    </footer>
  );
}
