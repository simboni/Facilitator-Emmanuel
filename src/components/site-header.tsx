"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/portfolio";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { MenuIcon, CloseIcon, GitHubIcon, ArrowUpRightIcon } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b transition-all duration-200 ${
          scrolled
            ? "border-navy-100 bg-white/90 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-navy-900" : "text-navy-600 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            )}
            <Button href="/contact" variant="gold" withArrow>
              Let&rsquo;s talk
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-navy-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-navy-50 text-navy-900"
                    : "text-navy-700 hover:bg-navy-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-navy-100 pt-4">
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-2 text-navy-700"
                >
                  <GitHubIcon className="h-5 w-5" /> GitHub
                  <ArrowUpRightIcon className="h-4 w-4 opacity-50" />
                </a>
              )}
              <Button href="/contact" variant="gold" size="lg" className="w-full" onClick={closeMenu}>
                Let&rsquo;s talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
