import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile, roles, stats, clients } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { Marquee } from "@/components/marquee";
import { ArrowIcon, AsteriskIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Emmanuel Misiati",
  description:
    "Engagement and experiential facilitator with 5+ years designing high-stakes engagements for corporate and youth audiences — grounded in Community Development and professional facilitation training.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <p aria-hidden="true" className="display text-outline pointer-events-none absolute -right-[8vw] top-2 select-none whitespace-nowrap text-[19vw] leading-none">
          MISIATI
        </p>
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="index-label">ABOUT / THE FACILITATOR</p>
            <h1 className="display mt-4 text-[11.5vw] sm:text-6xl lg:text-7xl">
              This is
              <br />
              <span className="text-red">Emmanuel</span>
              <br />
              Misiati<span className="text-red-bright">.</span>
            </h1>
            <p className="serif-note mt-6 max-w-lg text-2xl text-ink-soft">{profile.intro}</p>
            <div className="mt-8 space-y-5 max-w-xl text-ink-soft">
              {profile.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">BA Community Development</span>
              <span className="chip -rotate-1">Advanced facilitation</span>
              <span className="chip">Mediation</span>
              <span className="chip rotate-1">Corporate training</span>
              <span className="chip">Stage moderation</span>
              <span className="chip chip-red -rotate-1">Toastmasters leadership</span>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="tape relative mx-auto max-w-sm rotate-[1.4deg] border-2 border-ink bg-paper p-3 shadow-hard">
              <Image
                src="/images/emmanuel-portrait.webp"
                alt="Portrait of Emmanuel Misiati"
                width={660}
                height={990}
                sizes="(min-width: 1024px) 24rem, 80vw"
                priority
                className="block h-auto w-full bg-red object-cover"
              />
              <p className="meta mt-2 flex justify-between text-ink-soft">
                <span>THE FACILITATOR, AT REST</span>
                <span className="text-red">EST. 5+ YRS</span>
              </p>
            </div>
            <span className="stamp absolute -bottom-6 left-2 h-28 w-28 rotate-6">
              Nairobi<br />★ Kenya ★<br />East Africa
            </span>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="container-page grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="display text-5xl text-red-bright sm:text-6xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="meta mt-2 text-paper/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current roles */}
      <section className="border-b-2 border-ink">
        <div className="container-page py-16">
          <p className="index-label">WHERE I SIT TODAY</p>
          <h2 className="display mt-4 text-[10.5vw] sm:text-6xl">
            Current <span className="text-red">roles</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r, i) => (
              <Reveal key={r.org} delay={i * 70}>
                <div className={`flex h-full flex-col border-2 border-ink bg-paper p-6 shadow-hard-sm ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"} transition-transform hover:rotate-0`}>
                  <div className="flex h-16 items-center">
                    <Image
                      src={r.logo}
                      alt={`${r.org} logo`}
                      width={140}
                      height={56}
                      sizes="9rem"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <h3 className="display mt-4 text-xl">{r.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{r.org}</p>
                  <p className="meta mt-auto pt-4 text-red">{r.since} — present</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client wall */}
      <section className="border-b-2 border-ink bg-paper-dim">
        <div className="container-page py-16">
          <p className="index-label">TRUSTED BY</p>
          <h2 className="display mt-4 text-[10.5vw] sm:text-6xl">
            The client <span className="text-red">wall</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 50}>
                <div className={`flex h-28 items-center justify-center border-2 border-ink bg-paper p-4 ${["-rotate-[0.4deg]", "rotate-[0.5deg]", "rotate-[-0.6deg]", "rotate-[0.3deg]"][i % 4]} transition-transform hover:rotate-0`}>
                  {c.logo ? (
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      width={180}
                      height={72}
                      sizes="11rem"
                      className="max-h-16 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="display text-center text-lg leading-tight">{c.name}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy + CTA */}
      <section className="relative overflow-hidden">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="index-label">THE PHILOSOPHY</p>
            <blockquote className="serif-note mt-6 text-3xl leading-snug text-ink sm:text-4xl">
              &ldquo;Impact, insights and findings{" "}
              <span className="bg-red px-2 not-italic text-paper">need not be boring</span>. A room
              that laughs together, thinks together.&rdquo;
            </blockquote>
            <p className="mt-6 max-w-xl text-ink-soft">{profile.pitch}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact/" className="btn btn-red">
                Work with me <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link href="/work/" className="btn btn-ghost">
                See the rooms <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:col-span-4 lg:block">
            <Image
              src="/images/emmanuel-standing.webp"
              alt="Emmanuel Misiati, smiling, ready to work"
              width={480}
              height={719}
              sizes="24rem"
              className="mx-auto h-auto w-full max-w-xs drop-shadow-[12px_12px_0_rgba(22,18,15,0.9)]"
            />
          </div>
        </div>
        <Marquee duration={30} className="border-t-2 border-ink bg-paper py-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="meta mx-4 flex items-center gap-8 text-ink-faint">
              ENGAGE <AsteriskIcon className="h-3 w-3 text-red" /> CONNECT{" "}
              <AsteriskIcon className="h-3 w-3 text-red" /> GROW{" "}
              <AsteriskIcon className="h-3 w-3 text-red" />
            </span>
          ))}
        </Marquee>
      </section>
    </>
  );
}
