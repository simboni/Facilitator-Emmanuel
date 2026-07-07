"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { firm, nav } from "@/lib/firm";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import {
  PhoneIcon,
  MailIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);
  const primaryPhone = firm.contact.phones[0];

  return (
    <header className="sticky top-0 z-50">
      {/* Slim contact bar (hidden on small screens) */}
      <div className="hidden bg-navy-900 text-navy-100 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${primaryPhone}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-gold-400" />
              {firm.contact.phones.slice(0, 2).join(" · ")}
            </a>
            <a
              href={`mailto:${firm.contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MailIcon className="h-3.5 w-3.5 text-gold-400" />
              {firm.contact.email}
            </a>
          </div>
          <p className="text-navy-200">
            ICPAK Member No. {firm.credentials.icpakMemberNo} · Practising Cert.{" "}
            {firm.credentials.practicingNo}
          </p>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b transition-all duration-200 ${
          scrolled
            ? "border-navy-100 bg-white/95 shadow-sm backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-navy-900"
                      : "text-navy-600 hover:text-navy-900"
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

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" variant="gold" withArrow>
              Request a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-navy-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-base font-medium ${
                    active
                      ? "bg-navy-50 text-navy-900"
                      : "text-navy-700 hover:bg-navy-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-3 border-t border-navy-100 pt-4">
              <a
                href={`tel:${primaryPhone}`}
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-2 text-navy-700"
              >
                <PhoneIcon className="h-5 w-5 text-gold-500" />
                {primaryPhone}
              </a>
              <Button
                href="/contact"
                variant="gold"
                size="lg"
                className="w-full"
                onClick={closeMenu}
              >
                Request a Free Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
