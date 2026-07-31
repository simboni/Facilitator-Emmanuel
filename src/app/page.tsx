import Image from "next/image";
import Link from "next/link";
import {
  caseStudies,
  clients,
  methodology,
  pillars,
  profile,
  stats,
  testimonials,
} from "@/lib/content";
import { Marquee } from "@/components/marquee";
import { CountUp } from "@/components/count-up";
import { ArrowIcon, WhatsAppIcon, AsteriskIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="app app-wide space-y-4 pt-2">
      <ProfileCard />
      <ImpactCard />
      <PillarsCarousel />
      <MethodStrip />
      <WorkCarousel />
      <ProofCard />
      <BookCard />
    </div>
  );
}

/* --------------------------------------------------------- profile card -- */

function ProfileCard() {
  return (
    <section className="card overflow-hidden">
      <div className="relative aspect-[4/5] sm:aspect-[16/11]">
        <Image
          src="/images/emmanuel-portrait.webp"
          alt="Emmanuel Misiati"
          fill
          priority
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="bg-red object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
          <div className="flex flex-wrap gap-1.5">
            <span className="pill !bg-paper/20 !text-paper">Facilitator</span>
            <span className="pill !bg-paper/20 !text-paper">Program Strategist</span>
            <span className="pill !bg-paper/20 !text-paper">Community Dev</span>
          </div>
          <h1 className="display mt-3 text-4xl leading-none sm:text-5xl">
            Emmanuel<br />Misiati<span className="text-red-bright">.</span>
          </h1>
        </div>
      </div>
      <div className="p-5">
        <p className="serif-note text-lg text-ink-soft">{profile.tagline}</p>
        <div className="mt-4 flex gap-2">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="act act-green flex-1">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/contact/" className="act act-red flex-1">
            Book <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- impact card -- */

function ImpactCard() {
  return (
    <section className="card card-red p-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-wide text-paper/70">Selected impact</p>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-5">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="display text-3xl sm:text-4xl">
              <CountUp end={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-xs font-semibold leading-tight text-paper/90">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ pillars carousel -- */

function PillarsCarousel() {
  return (
    <section>
      <div className="mb-2.5 flex items-baseline justify-between px-1">
        <h2 className="display text-xl">What I do</h2>
        <Link href="/expertise/" className="font-mono text-[0.68rem] uppercase tracking-wide text-red">
          All services →
        </Link>
      </div>
      <div className="swipe">
        {pillars.map((p) => (
          <article key={p.no} className="card w-[80vw] max-w-[19rem] p-5">
            <p className="display text-4xl text-red">{p.no}</p>
            <h3 className="display mt-2 text-xl">{p.name}</h3>
            <p className="mt-2 text-sm text-ink-soft">{p.summary}</p>
            <ul className="mt-4 space-y-2">
              {p.points.map((pt) => (
                <li key={pt.title} className="flex items-start gap-2 text-xs text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  <span className="font-semibold text-ink">{pt.title}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- method strip -- */

function MethodStrip() {
  return (
    <section className="card card-ink p-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-wide text-red-bright">Methodology</p>
      <div className="mt-3 space-y-3">
        {methodology.map((m) => (
          <div key={m.no} className="flex gap-3">
            <span className="display text-xl text-red-bright">{m.no}</span>
            <div>
              <p className="font-bold text-paper">{m.name}</p>
              <p className="text-sm text-paper/70">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- work carousel -- */

function WorkCarousel() {
  const featured = caseStudies.filter((c) => c.featured);
  return (
    <section>
      <div className="mb-2.5 flex items-baseline justify-between px-1">
        <h2 className="display text-xl">Featured work</h2>
        <Link href="/experience/" className="font-mono text-[0.68rem] uppercase tracking-wide text-red">
          All work →
        </Link>
      </div>
      <div className="swipe">
        {featured.map((cs) => (
          <Link key={cs.slug} href={`/experience/#${cs.slug}`} className="card w-[72vw] max-w-[17rem] overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={cs.images[0].src}
                alt={cs.images[0].alt}
                fill
                sizes="17rem"
                className="object-cover"
              />
              <span className="pill pill-red absolute left-2.5 top-2.5 !bg-paper/90">{cs.category}</span>
            </div>
            <div className="p-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-wide text-red">{cs.year}</p>
              <h3 className="display mt-1 text-lg leading-tight">{cs.title}</h3>
              <p className="mt-1.5 text-xs text-ink-faint">{cs.client}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- proof / logos -- */

function ProofCard() {
  return (
    <section className="space-y-4">
      <div className="card overflow-hidden py-4">
        <p className="mb-3 px-5 font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">Trusted by</p>
        <Marquee duration={40} ariaLabel="Organizations Emmanuel has worked with">
          {clients.map((c) => (
            <span key={c.name} className="mx-4 flex items-center gap-4">
              <span className="whitespace-nowrap font-mono text-xs text-ink-soft">{c.name}</span>
              <AsteriskIcon className="h-3 w-3 shrink-0 text-red/50" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="swipe">
        {testimonials.map((t) => (
          <figure key={t.name} className="card w-[82vw] max-w-[21rem] p-5">
            <span aria-hidden="true" className="display text-4xl leading-none text-red">&ldquo;</span>
            <blockquote className="serif-note -mt-1 text-base leading-snug text-ink">{t.quote}</blockquote>
            <figcaption className="mt-4">
              <p className="text-sm font-bold text-ink">{t.name}</p>
              <p className="text-xs text-ink-faint">{t.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- book card -- */

function BookCard() {
  return (
    <section className="card p-6 text-center">
      <h2 className="display text-2xl">
        Design a programme.<br />Curate a room.
      </h2>
      <p className="mx-auto mt-2 max-w-xs text-sm text-ink-soft">{profile.responsePromise}.</p>
      <div className="mt-4 flex justify-center gap-2">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="act act-green">
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
        <Link href="/contact/" className="act act-red">
          Book a session <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
