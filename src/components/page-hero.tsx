import Link from "next/link";
import { Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb?: string;
}) {
  const crumb = breadcrumb ?? title;
  return (
    <section className="relative overflow-hidden border-b border-ink-700 bg-grid glow-bg">
      <div className="container-page py-14 sm:py-18 lg:py-20">
        <nav className="mb-5 font-mono text-sm text-mist-500" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-green-400">
            ~
          </Link>
          <span className="mx-1.5 text-mist-600">/</span>
          <span className="text-mist-200">{crumb.toLowerCase()}</span>
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-mist-100 text-balance sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist-400">{intro}</p>
        )}
      </div>
    </section>
  );
}
