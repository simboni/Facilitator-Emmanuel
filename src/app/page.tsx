import Image from "next/image";
import Link from "next/link";
import {
  caseStudies,
  clients,
  expertise,
  framework,
  profile,
  stats,
  testimonials,
  tiers,
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
      <Numbers />
      <Manifesto />
      <Framework />
      <FeaturedWork />
      <Testimonials />
      <PricingTeaser />
    </>
  );
}

/* ---------------------------------------------------------------- hero -- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      {/* Ghost type wall */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <p className="display text-outline scroll-ghost absolute -left-[3vw] top-[4rem] whitespace-nowrap text-[21vw] leading-[0.82]">
          MISIATI MISIATI
        </p>
        <p className="display text-outline-red scroll-ghost absolute -left-[14vw] bottom-[2rem] whitespace-nowrap text-[21vw] leading-[0.82] opacity-70">
          HOLD THE ROOM
        </p>
      </div>

      <div className="container-page relative grid min-h-[calc(100svh-4rem)] items-end gap-8 pb-10 pt-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-stretch lg:gap-4">
        {/* Copy block */}
        <div className="hero-stagger relative z-10 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="chip chip-red">Master of Ceremonies</span>
            <span className="chip">Facilitator</span>
            <span className="chip">Moderator</span>
            <span className="chip rotate-2">Nairobi → East Africa</span>
          </div>

          <h1 className="display mt-8 text-[17vw] leading-[0.85] sm:text-7xl lg:text-[6.4rem]">
            I hold
            <br />
            the <span className="text-red">room</span>
            <span className="text-red-bright">.</span>
          </h1>

          <p className="serif-note mt-6 max-w-md text-2xl text-ink-soft sm:text-[1.7rem]">
            …so your agenda moves, your speakers shine &amp; your message{" "}
            <span className="underline decoration-red decoration-wavy decoration-2 underline-offset-4">sticks</span>.
          </p>

          <p className="mt-6 max-w-lg text-ink-soft">
            {profile.intro} Corporate summits, NGO convenings, founder gatherings and
            youth rooms — held with structure, energy and a strict eye on the clock.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact/" className="btn btn-red">
              Check availability <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link href="/work/" className="btn btn-ghost">
              See the work <ArrowDownIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Collage block */}
        <div className="relative z-10 hidden min-h-[540px] lg:block">
          <div className="absolute inset-x-6 bottom-0 top-8">
            <Image
              src="/images/emmanuel-stage.webp"
              alt="Emmanuel Misiati on stage, mic in hand, holding a tablet"
              fill
              priority
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-contain object-bottom drop-shadow-[14px_14px_0_rgba(166,28,28,0.9)]"
            />
          </div>
          <span className="stamp absolute right-2 top-10 h-28 w-28 -rotate-12">
            As seen<br />on stage<br />★ KE ★
          </span>
          <span className="chip absolute bottom-24 left-0 -rotate-3 shadow-hard-sm">1,500+ hrs on the clock</span>
          <span className="chip chip-red absolute bottom-10 right-4 rotate-2 shadow-hard-sm">MC®</span>
        </div>

        {/* Mobile portrait */}
        <div className="relative z-10 -mt-2 h-80 lg:hidden">
          <Image
            src="/images/emmanuel-stage.webp"
            alt="Emmanuel Misiati on stage, mic in hand, holding a tablet"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom drop-shadow-[10px_10px_0_rgba(166,28,28,0.9)]"
          />
          <span className="stamp absolute right-0 top-0 h-24 w-24 -rotate-12 text-[0.55rem]">
            As seen<br />on stage<br />★ KE ★
          </span>
        </div>
      </div>

      {/* Meta strip */}
      <div className="relative z-10 border-t-2 border-ink bg-paper">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-3">
          <p className="meta text-ink-faint">[ {profile.role} ]</p>
          <p className="meta hidden text-ink-faint sm:block">EST. 5+ YEARS · {profile.location.toUpperCase()}</p>
          <p className="meta text-ink-faint">{profile.responsePromise.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- client ticker -- */

function ClientTicker() {
  return (
    <section aria-label="Clients and partners" className="relative -my-1 overflow-hidden">
      <div className="-rotate-[1.2deg] scale-[1.02] border-y-2 border-ink bg-red py-4 text-paper">
        <Marquee duration={45} ariaLabel="Organisations Emmanuel has worked with">
          {clients.map((c) => (
            <span key={c.name} className="mx-7 flex items-center gap-7">
              <span className="meta whitespace-nowrap !text-[0.8rem] text-paper">{c.name}</span>
              <AsteriskIcon className="h-4 w-4 shrink-0 text-paper/60" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- numbers -- */

function Numbers() {
  return (
    <section className="border-b-2 border-ink bg-paper-dim">
      <div className="container-page grid gap-x-6 gap-y-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className={`${i % 2 === 1 ? "sm:translate-y-6" : ""}`}>
              <p className="display text-7xl text-ink lg:text-8xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="meta mt-3 border-t-2 border-red pt-2 text-ink-soft">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- manifesto -- */

function Manifesto() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <p aria-hidden="true" className="display text-outline pointer-events-none absolute -right-[6vw] top-6 select-none whitespace-nowrap text-[16vw] leading-none">
        THE CRAFT
      </p>
      <div className="container-page relative grid gap-14 py-20 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="index-label">01 / WHY IT WORKS</p>
          <Reveal>
            <blockquote className="serif-note mt-6 max-w-xl text-2xl leading-snug text-ink sm:text-3xl">
              &ldquo;Behind every successful conference is the{" "}
              <span className="bg-red px-1.5 not-italic text-paper">invisible thread</span>{" "}
              that keeps the agenda moving, the speakers comfortable and the audience
              locked in.&rdquo;
            </blockquote>
          </Reveal>
          <p className="mt-6 max-w-lg text-ink-soft">
            As your MC, my priority is total peace of mind. Leave the timing, the
            energy and the stage flow to me — so you can focus entirely on your
            guests and your message.
          </p>

          <div className="relative mt-12 max-w-md">
            <div className="tape rotate-[-2deg] border-2 border-ink bg-paper p-3 shadow-hard">
              <div className="duotone">
                <Image
                  src="/images/events/weconnect-6.webp"
                  alt="Emmanuel Misiati holding the podium at the WEConnect in Africa Summit"
                  width={700}
                  height={1050}
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="block h-auto w-full"
                />
              </div>
              <p className="meta mt-2 flex items-center justify-between text-ink-soft">
                <span>WECONNECT IN AFRICA SUMMIT</span>
                <span className="text-red">°026</span>
              </p>
            </div>
            <span className="chip absolute -right-4 -top-4 rotate-6 shadow-hard-sm">Live &amp; unscripted</span>
          </div>
        </div>

        <div className="lg:pt-24">
          <p className="index-label">02 / CORE EXPERTISE</p>
          <ul className="mt-6">
            {expertise.map((x, i) => (
              <Reveal key={x.no} delay={i * 80}>
                <li className="group border-b-2 border-ink py-6 first:border-t-2">
                  <div className="flex items-baseline gap-4">
                    <span className="meta text-red">{x.no}</span>
                    <h3 className="display text-2xl transition-transform group-hover:translate-x-2 sm:text-3xl">
                      {x.title}
                    </h3>
                  </div>
                  <p className="mt-2 pl-10 text-ink-soft">{x.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- framework -- */

function Framework() {
  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="container-page grid gap-10 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="meta text-red-bright">03 / METHOD</p>
          <h2 className="display mt-4 text-6xl sm:text-7xl">
            The
            <br />
            signature
            <br />
            <span className="text-outline-paper">frame</span>work
          </h2>
          <p className="serif-note mt-6 max-w-sm text-xl text-paper/75">{framework.intro}</p>
          <p className="meta mt-8 hidden text-paper/40 lg:block">[ SCROLL ]</p>
        </div>

        <ol className="space-y-8">
          {framework.steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 60}>
              <li
                className={`border-2 border-paper/80 bg-ink p-7 sm:p-9 ${
                  i % 2 === 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
                } transition-transform hover:rotate-0`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="display text-5xl text-red-bright sm:text-6xl">{s.no}</p>
                  <AsteriskIcon className="h-6 w-6 text-paper/30" />
                </div>
                <h3 className="display mt-4 text-3xl sm:text-4xl">{s.name}</h3>
                <p className="mt-3 max-w-md text-paper/70">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- featured work -- */

function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured);
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="index-label">04 / SELECTED ROOMS</p>
            <h2 className="display mt-4 text-6xl sm:text-8xl">
              The <span className="text-red">work</span>
            </h2>
          </div>
          <Link href="/work/" className="btn btn-ghost mb-2">
            All case studies <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 space-y-24">
          {featured.map((cs, i) => (
            <Reveal key={cs.slug}>
              <article className="grid items-center gap-10 lg:grid-cols-12">
                {/* Photo collage */}
                <div className={`relative lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`relative border-2 border-ink shadow-hard ${i % 2 ? "rotate-[0.8deg]" : "rotate-[-0.8deg]"}`}>
                    <Image
                      src={cs.images[0].src}
                      alt={cs.images[0].alt}
                      width={1400}
                      height={933}
                      sizes="(min-width: 1024px) 44rem, 100vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  {cs.images[1] && (
                    <div className={`absolute -bottom-8 w-40 border-2 border-ink bg-paper p-1.5 shadow-hard-sm sm:w-56 ${i % 2 ? "-left-3 rotate-[3deg]" : "-right-3 rotate-[-3deg]"}`}>
                      <Image
                        src={cs.images[1].src}
                        alt={cs.images[1].alt}
                        width={448}
                        height={299}
                        sizes="14rem"
                        className="block h-auto w-full"
                      />
                    </div>
                  )}
                  <span className={`chip absolute -top-4 shadow-hard-sm ${i % 2 ? "right-6 rotate-2" : "left-6 -rotate-2"}`}>
                    {cs.category}
                  </span>
                </div>

                {/* Copy */}
                <div className={`pt-4 lg:col-span-5 lg:pt-0 ${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <p className="meta text-red">
                    {cs.client} · {cs.year}
                  </p>
                  <h3 className="display mt-3 text-4xl sm:text-5xl">{cs.title}</h3>
                  <p className={`mt-4 max-w-md text-ink-soft ${i % 2 === 1 ? "lg:ml-auto" : ""}`}>
                    {cs.impact.length > 190 ? `${cs.impact.slice(0, 187).trimEnd()}…` : cs.impact}
                  </p>
                  <Link
                    href={`/work/#${cs.slug}`}
                    className="meta mt-4 inline-flex items-center gap-2 border-b-2 border-red py-2 text-ink transition-colors hover:text-red"
                  >
                    Read the case study <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
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
    <section className="relative overflow-hidden border-b-2 border-ink bg-paper-dim">
      <p aria-hidden="true" className="display text-outline-red pointer-events-none absolute -left-[4vw] bottom-0 select-none whitespace-nowrap text-[15vw] leading-none opacity-60">
        WORD ON THE FLOOR
      </p>
      <div className="container-page relative py-20">
        <p className="index-label">05 / RECEIPTS</p>
        <h2 className="display mt-4 max-w-3xl text-5xl sm:text-7xl">
          What organisers say<span className="text-red">*</span>
        </h2>
        <p className="meta mt-3 text-ink-faint">*the people who booked the room, not just sat in it</p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <figure
                className={`border-2 border-ink bg-paper p-7 shadow-hard ${
                  ["rotate-[0.7deg]", "-rotate-[0.8deg]", "-rotate-[0.5deg]", "rotate-[0.9deg]"][i % 4]
                } ${i % 2 === 1 ? "md:translate-y-8" : ""} transition-transform hover:rotate-0`}
              >
                <span aria-hidden="true" className="display block text-6xl leading-none text-red">
                  &ldquo;
                </span>
                <blockquote className="serif-note -mt-3 text-xl leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t-2 border-line pt-4">
                  <p className="meta font-bold text-ink">{t.name}</p>
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

/* ------------------------------------------------------ pricing teaser -- */

function PricingTeaser() {
  return (
    <section className="torn-bottom bg-red pb-24 pt-20 text-paper">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="meta text-paper/70">06 / BOOKING</p>
            <h2 className="display mt-4 text-6xl sm:text-8xl">
              Straight
              <br />
              pricing<span className="text-ink">.</span>
            </h2>
            <p className="serif-note mt-5 max-w-md text-xl text-paper/85">
              No &ldquo;request a quote&rdquo; maze. Three packages, in Kenya shillings,
              on the table.
            </p>
          </div>
          <Link href="/services/" className="btn mb-2 border-paper bg-paper !text-ink shadow-hard-sm">
            Full packages &amp; FAQ <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.slug} delay={i * 80}>
              <Link
                href="/services/"
                className={`block h-full border-2 p-6 transition-transform hover:-translate-y-1 ${
                  t.popular
                    ? "border-ink bg-ink text-paper shadow-hard-sm"
                    : "border-paper/80 bg-transparent text-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-2xl">{t.name}</h3>
                  {t.popular && (
                    <span className="chip border-paper bg-transparent text-[0.6rem] !text-paper">Most booked</span>
                  )}
                </div>
                <p className={`mt-2 text-sm ${t.popular ? "text-paper/70" : "text-paper/80"}`}>{t.tagline}</p>
                <p className="display mt-6 text-4xl">
                  <span className="meta mr-1 align-top !text-[0.8rem]">KES</span>
                  {t.price.toLocaleString("en-KE")}
                </p>
                <p className="meta mt-1 opacity-70">{t.priceNote}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-paper bg-paper !text-ink shadow-hard-sm"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp me the date
          </a>
          <p className="meta text-paper/70">[ {profile.responsePromise} ]</p>
        </div>
      </div>
    </section>
  );
}
