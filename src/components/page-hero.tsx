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
  breadcrumb: string;
}) {
  return (
    <section className="bg-navy-gradient">
      <div className="container-page py-14 sm:py-18 lg:py-20">
        <nav className="mb-5 text-sm text-navy-200" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-gold-300">
            Home
          </Link>
          <span className="mx-2 text-navy-400">/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
