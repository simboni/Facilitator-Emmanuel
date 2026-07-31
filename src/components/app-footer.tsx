import { profile } from "@/lib/content";
import { WhatsAppIcon, MailIcon, LinkedInIcon } from "@/components/icons";

/** Slim app footer — quick contact icons + credit. Nav is in the bottom tabs,
 *  and each page carries its own call-to-action, so no big CTA block here. */
export function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="app app-wide pb-8 pt-4 text-center">
      <div className="flex justify-center gap-3">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
           className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-[#08331b]">
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email"
           className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:text-ink">
          <MailIcon className="h-5 w-5" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
           className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:text-ink">
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>
      <p className="mt-5 font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint">
        © {year} Emmanuel Misiati
      </p>
      <p className="mt-1 font-mono text-[0.64rem] uppercase tracking-wide text-ink-faint">
        Developed by SMP Developers Ltd
      </p>
    </footer>
  );
}
