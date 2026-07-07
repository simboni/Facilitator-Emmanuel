import { firm } from "@/lib/firm";
import { WhatsAppIcon } from "@/components/icons";

const message = encodeURIComponent(
  `Hello ${firm.name}, I would like to enquire about your services.`,
);

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${firm.contact.whatsappIntl}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:opacity-0" />
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
