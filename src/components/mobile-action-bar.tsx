import Link from "next/link";
import { profile } from "@/lib/content";
import { WhatsAppIcon, ArrowIcon } from "@/components/icons";

/**
 * Sticky bottom action bar — mobile only. 95% of visitors are on phones, so the
 * two primary actions live permanently within thumb reach. Respects the iOS
 * home-indicator safe area. Hidden on md+ where the header CTA + FAB take over.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-2 border-ink bg-[#25D366] py-3 font-mono text-xs font-bold uppercase tracking-wide text-ink"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
        <Link
          href="/contact/"
          className="flex items-center justify-center gap-2 border-2 border-red bg-red py-3 font-mono text-xs font-bold uppercase tracking-wide text-paper"
        >
          Book a session <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
