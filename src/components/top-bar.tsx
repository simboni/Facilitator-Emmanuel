import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

/** Slim app top bar — brand + theme switch. Navigation lives in the bottom tabs. */
export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md">
      <div className="app app-wide flex h-14 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1.5" aria-label="Facilitator Misiati — home">
          <span className="display text-lg leading-none">Misiati</span>
          <span className="inline-block h-2 w-2 rounded-full bg-red" />
        </Link>
        <ThemeToggle className="!h-9 !w-9 !rounded-full" />
      </div>
    </header>
  );
}
