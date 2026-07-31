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
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { ArrowIcon, ArrowDownIcon, AsteriskIcon, WhatsAppIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientTicker />
      <Impact />
      <Pillars />
      <Methodology />
      <FeaturedWork />
      <Testimonials />
      <ClosingCta />
    </>
  );
}

/* ---------------------------------------------------------------- hero -- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <p className="display text-outline scroll-ghost absolute -left-[3vw] top-[3.5rem] whitespace-nowrap text-[20vw] leading-[0.8]">
          FACILITATE
        </p>
      </div>

      <div className="container-page relative grid items-center gap-8 pb-12 pt-12 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-6 lg:pb-16 lg:pt-14">
        <div className="hero-stagger relative z-10">
          <div className="flex flex-wrap gap-2">
            <span className="chip chip-red">Facilitator</span>
            <span className="chip">Program Strategist</span>
            <span className="chip">Community Development</span>
          </div>

          <h1 className="display mt-7 text-[15vw] leading-[0.9] sm:text-6xl lg:text-[5.4rem] lg:leading-[0.92]">
            {profile.heroHeadline[0]}
            <br />
            <span className="text-red">{profile.heroHeadline[1]}</span>
            <br />
            {profile.heroHeadline[2]}
          </h1>

          <p className="serif-note mt-6 max-w-md text-xl text-ink-soft sm:text-2xl">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-lg text-ink-soft">{profile.heroLede}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact/" className="btn btn-red">
              Book a session <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link href="/expertise/" className="btn btn-ghost">
              Explore expertise <ArrowDownIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative z-10 hidden min-h-[560px] lg:block">
          <div className="absolute inset-x-4 bottom-0 top-6">
            <Image
              src="/images/emmanuel-stage.webp"
              alt="Emmanuel Misiati facilitating on stage, mic in hand"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-contain object-bottom drop-shadow-[12px_12px_0_rgba(166,28,28,0.9)]"
            />
          </div>
          <span className="chip absolute bottom-16 left-0 shadow-hard-sm">300+ facilitators trained</span>
          <span className="chip chip-red absolute bottom-4 right-2 shadow-hard-sm">Certified mediator</span>
        </div>

        <div className="relative z-10 -mt-2 h-72 sm:h-96 lg:hidden">
          <Image
            src="/images/emmanuel-stage.webp"
            alt="Emmanuel Misiati facilitating on stage, mic in hand"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom drop-shadow-[9px_9px_0_rgba(166,28,28,0.9)]"
          />
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-ink bg-paper">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-3">
          <p className="meta text-ink-faint">[ {profile.role} ]</p>
          <p className="meta hidden text-ink-faint sm:block">{profile.location.toUpperCase()}</p>
          <p className="meta text-ink-faint">{profile.responsePromise.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- client ticker -- */

function ClientTicker() {
  return (
    <section aria-label="Organizations worked with" className="overflow-hidden border-b-2 border-ink bg-red py-3.5 text-paper">
      <Marquee duration={48} ariaLabel="Organizations Emmanuel has worked with">
        {clients.map((c) => (
          <span key={c.name} className="mx-6 flex items-center gap-6">
            <span className="meta whitespace-nowrap !text-[0.78rem] text-paper">{c.name}</span>
            <AsteriskIcon className="h-3.5 w-3.5 shrink-0 text-paper/55" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* -------------------------------------------------------------- impact -- */

function Impact() {
  return (
    <section className="border-b-2 border-ink bg-paper-dim">
      <div className="container-page py-16">
        <p className="index-label">SELECTED IMPACT</p>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <p className="display text-6xl text-ink lg:text-7xl">
                  <CountUp end={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
                </p>
                <p className="mt-3 border-t-2 border-red pt-2 font-bold text-ink">{s.label}</p>
                {s.note && <p className="meta mt-1 text-ink-faint">{s.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="meta mt-10 max-w-2xl text-ink-faint">
          Data backed by verified programme outcomes across Busara Empowerment Organization,
          Taifa Teule Network, Osotwa &amp; Shiriki.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- pillars -- */

function Pillars() {
  return (
    <section className="relative overflow-x-clip border-b-2 border-ink">
      <div className="container-page py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="index-label">HOW I WORK</p>
          <h2 className="display mt-4 text-[11vw] leading-[0.95] sm:text-6xl lg:text-7xl">
            Three pillars<span className="text-red">.</span>
          </h2>
          <p className="serif-note mt-5 text-xl text-ink-soft">
            Every engagement draws on one — or all three — of these.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {pillars.map((p, i) => (
            <Reveal key={p.no} delay={i * 60}>
              <article className="grid gap-6 border-2 border-ink bg-paper p-6 shadow-hard-sm sm:p-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-10">
                <div>
                  <p className="display text-5xl text-red sm:text-6xl">{p.no}</p>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">{p.name}</h3>
                  <p className="mt-3 text-sm text-ink-soft">{p.summary}</p>
                </div>
                <ul className="grid gap-5 sm:grid-cols-3 lg:gap-6">
                  {p.points.map((pt) => (
                    <li key={pt.title} className="border-t-2 border-line pt-4">
                      <h4 className="font-bold leading-snug text-ink">{pt.title}</h4>
                      <p className="mt-2 text-sm text-ink-soft">{pt.body}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/expertise/" className="btn btn-ghost">
            Full expertise &amp; services <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- methodology -- */

function Methodology() {
  return (
    <section className="overflow-x-clip border-b-2 border-ink bg-ink text-paper">
      <div className="container-page py-16 lg:py-20">
        <p className="meta text-red-bright">METHODOLOGY</p>
        <h2 className="display mt-4 max-w-3xl text-[10.5vw] leading-[0.95] sm:text-6xl">
          Built on three principles
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden border-2 border-paper/50 bg-paper/20 md:grid-cols-3">
          {methodology.map((m) => (
            <div key={m.no} className="bg-ink p-7">
              <p className="display text-5xl text-red-bright">{m.no}</p>
              <h3 className="display mt-4 text-2xl">{m.name}</h3>
              <p className="mt-3 text-paper/70">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- featured work -- */

function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured);
  return (
    <section className="overflow-x-clip border-b-2 border-ink">
      <div className="container-page py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="index-label">IN THE ROOM</p>
            <h2 className="display mt-4 text-[11vw] leading-[0.95] sm:text-6xl lg:text-7xl">
              Featured <span className="text-red">work</span>
            </h2>
          </div>
          <Link href="/experience/" className="btn btn-ghost mb-1">
            Full experience <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((cs, i) => (
            <Reveal key={cs.slug} delay={(i % 2) * 80}>
              <Link
                href={`/experience/#${cs.slug}`}
                className="group block h-full border-2 border-ink bg-paper shadow-hard-sm transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-ink">
                  <Image
                    src={cs.images[0].src}
                    alt={cs.images[0].alt}
                    fill
                    sizes="(min-width: 768px) 40rem, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="chip absolute left-3 top-3 shadow-hard-sm">{cs.category}</span>
                </div>
                <div className="p-6">
                  <p className="meta text-red">{cs.client} · {cs.year}</p>
                  <h3 className="display mt-2 text-2xl sm:text-3xl">{cs.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft">
                    {cs.impact.length > 150 ? `${cs.impact.slice(0, 147).trimEnd()}…` : cs.impact}
                  </p>
                  <span className="meta mt-4 inline-flex items-center gap-2 text-ink transition-colors group-hover:text-red">
                    Read more <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- testimonials -- */

function Testimonials() {
  return (
    <section className="overflow-x-clip border-b-2 border-ink bg-paper-dim">
      <div className="container-page py-16 lg:py-20">
        <p className="index-label">WHAT PARTNERS SAY</p>
        <h2 className="display mt-4 max-w-3xl text-[10.5vw] leading-[0.95] sm:text-6xl">
          Words from the room
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 80}>
              <figure className="flex h-full flex-col border-2 border-ink bg-paper p-7 shadow-hard-sm">
                <span aria-hidden="true" className="display text-5xl leading-none text-red">&ldquo;</span>
                <blockquote className="serif-note -mt-2 flex-1 text-lg leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t-2 border-line pt-4">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="meta mt-1 text-ink-faint">{t.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ closing -- */

function ClosingCta() {
  return (
    <section className="bg-red text-paper">
      <div className="container-page py-16 lg:py-20">
        <p className="meta text-paper/70">LET&rsquo;S WORK</p>
        <h2 className="display mt-4 max-w-4xl text-[12vw] leading-[0.92] sm:text-7xl">
          Design a programme. Curate a room. Build a community.
        </h2>
        <p className="serif-note mt-6 max-w-xl text-xl text-paper/85">{profile.pitch}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact/" className="btn border-paper bg-paper !text-ink shadow-hard-sm">
            Get in touch <ArrowIcon className="h-4 w-4" />
          </Link>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn border-paper bg-transparent !text-paper shadow-none hover:bg-paper/10">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
