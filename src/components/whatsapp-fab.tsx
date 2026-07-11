import { profile } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

/** Floating WhatsApp click-to-chat — the booking channel in Kenya. */
export function WhatsAppFab() {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Emmanuel on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 border-2 border-ink bg-[#25D366] text-ink shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
    >
      <span className="grid h-12 w-12 place-items-center">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
      <span className="meta hidden max-w-0 overflow-hidden whitespace-nowrap font-bold transition-all duration-300 group-hover:max-w-48 group-hover:pr-4 sm:block">
        Check availability
      </span>
    </a>
  );
}
