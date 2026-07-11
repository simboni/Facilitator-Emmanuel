import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Rooms Emmanuel Misiati has held: WEConnect in Africa, AccelerateHER 2.0, the SME Founders Exchange and 1,000+ hours of youth engagement across East Africa.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline pointer-events-none absolute -left-[4vw] top-0 select-none whitespace-nowrap text-[19vw] leading-none">
          THE WORK
        </p>
        <div className="container-page relative py-16 lg:py-20">
          <p className="index-label">CASE STUDIES</p>
          <h1 className="display mt-4 text-6xl sm:text-8xl">
            Rooms I&rsquo;ve <span className="text-red">held</span>
          </h1>
          <p className="serif-note mt-6 max-w-xl text-2xl text-ink-soft">
            Multi-day trade summits, founder gatherings, governance workshops and
            youth rooms — each with a role, a method and a measurable temperature.
          </p>
          <nav aria-label="Case studies on this page" className="mt-8 flex flex-wrap gap-2">
            {caseStudies.map((cs, i) => (
              <a
                key={cs.slug}
                href={`#${cs.slug}`}
                className="chip max-w-full !whitespace-normal py-2 text-left transition-colors hover:border-red hover:text-red"
              >
                0{i + 1} · {cs.title.length > 34 ? `${cs.title.slice(0, 32)}…` : cs.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {caseStudies.map((cs, i) => (
        <section
          key={cs.slug}
          id={cs.slug}
          className={`border-b-2 border-ink scroll-mt-20 ${i % 2 === 1 ? "bg-paper-dim" : ""}`}
        >
          <div className="container-page py-16 lg:py-20">
            <Reveal>
              <header className="max-w-4xl">
                <p className="meta text-red">
                  0{i + 1} / {cs.category.toUpperCase()} · {cs.year}
                </p>
                <h2 className="display mt-3 text-4xl sm:text-6xl">{cs.title}</h2>
                <p className="serif-note mt-3 text-xl text-ink-soft">for {cs.client}</p>
              </header>
            </Reveal>

            {/* Collage */}
            <div className="mt-10 grid gap-5 md:grid-cols-12">
              <Reveal className="md:col-span-7">
                <div className={`tape border-2 border-ink bg-paper p-2 shadow-hard ${i % 2 ? "rotate-[0.7deg]" : "rotate-[-0.7deg]"}`}>
                  <Image
                    src={cs.images[0].src}
                    alt={cs.images[0].alt}
                    width={1400}
                    height={933}
                    sizes="(min-width: 768px) 52rem, 100vw"
                    className="block h-auto w-full"
                  />
                  <p className="meta mt-2 flex justify-between px-1 text-ink-soft">
                    <span>{cs.images[0].alt.slice(0, 52).toUpperCase()}</span>
                    <span className="text-red">FIG. {i + 1}.0</span>
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-5 md:col-span-5 md:grid-cols-1 md:pt-10">
                {cs.images.slice(1, 3).map((img, j) => (
                  <Reveal key={img.src} delay={j * 80}>
                    <div className={`border-2 border-ink bg-paper p-2 shadow-hard-sm ${j % 2 ? "rotate-[1deg]" : "-rotate-[1deg]"}`}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={700}
                        height={466}
                        sizes="(min-width: 768px) 26rem, 50vw"
                        className="block h-auto w-full"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Role / Impact */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="border-l-4 border-red pl-6">
                  <h3 className="meta text-red">THE ROLE</h3>
                  <p className="mt-3 text-ink-soft">{cs.role}</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="border-l-4 border-ink pl-6">
                  <h3 className="meta">THE IMPACT</h3>
                  <p className="mt-3 text-ink-soft">{cs.impact}</p>
                </div>
              </Reveal>
            </div>

            {/* Extra photos strip */}
            {cs.images.length > 3 && (
              <div className="mt-10 grid grid-cols-3 gap-4">
                {cs.images.slice(3, 6).map((img, j) => (
                  <Reveal key={img.src} delay={j * 60}>
                    <div className={`border-2 border-ink ${j % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={466}
                        height={311}
                        sizes="(min-width: 768px) 18rem, 33vw"
                        className="block h-auto w-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-red py-16 text-paper">
        <div className="container-page flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="display text-5xl sm:text-6xl">Your event next?</h2>
            <p className="serif-note mt-3 text-xl text-paper/85">
              Send the date before someone else does.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="btn border-paper bg-paper !text-ink shadow-hard-sm">
              Check availability <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn border-paper bg-transparent !text-paper shadow-none hover:bg-paper/10">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
