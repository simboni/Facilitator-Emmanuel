"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, GridIcon, UserIcon, CalendarIcon } from "@/components/icons";

const tabs = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/experience/", label: "Work", icon: GridIcon },
  { href: "/about/", label: "About", icon: UserIcon },
  { href: "/contact/", label: "Book", icon: CalendarIcon, cta: true },
];

/** App-native bottom tab bar — the primary navigation on every screen. */
export function BottomTabs() {
  const pathname = usePathname() ?? "/";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <nav className="tabbar" aria-label="Primary">
      <ul className="app app-wide grid grid-cols-4 gap-1 py-1.5">
        {tabs.map((t) => {
          const active = isActive(t.href);
          const Icon = t.icon;
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 rounded-2xl py-2 transition-colors ${
                  t.cta
                    ? "bg-red text-paper"
                    : active
                      ? "text-red"
                      : "text-ink-faint hover:text-ink"
                }`}
              >
                <Icon className="h-[1.35rem] w-[1.35rem]" />
                <span className="font-mono text-[0.62rem] uppercase tracking-wide">{t.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
