import Link from "next/link";
import { profile } from "@/lib/content";
import { WhatsAppIcon, MailIcon, LinkedInIcon } from "@/components/icons";

/** Slim app footer — quick contact + credit. Nav is in the bottom tabs. */
export function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="app app-wide pb-10 pt-6">
      <div className="card card-ink p-6 text-center">
        <p className="display text-2xl">
          Let&rsquo;s work<span className="text-red-bright">.</span>
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="act act-green">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact/" className="act act-red">
            Book a session
          </Link>
        </div>
        <div className="mt-5 flex justify-center gap-5 text-paper/70">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-paper">
            <MailIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-paper">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-[0.65rem] uppercase tracking-wide text-ink-faint">
        © {year} Emmanuel Misiati · Developed by SMP Developers Ltd
      </p>
    </footer>
  );
}
