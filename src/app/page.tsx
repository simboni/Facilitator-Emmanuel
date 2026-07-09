import {
  profile,
  about,
  skills,
  experience,
  featuredProjects,
  testimonials,
  clients,
} from "@/lib/portfolio";
import { Button, Section, SectionHeading, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { ProjectCard, Chip } from "@/components/project-card";
import {
  ServiceIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  QuoteIcon,
  CheckIcon,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-navy-gradient">
        <div className="hero-orb left-[8%] top-[12%] h-72 w-72 bg-gold-500/20" />
        <div
          className="hero-orb right-[6%] bottom-[8%] h-80 w-80 bg-navy-400/25"
          style={{ animationDelay: "2s" }}
        />
        <div className="container-page relative py-24 sm:py-28 lg:py-36">
          <div className="hero-stagger mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              {profile.availability}
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl">
              {profile.name}
              <span className="mt-3 block bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              {profile.valueProp}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/work" variant="gold" size="lg" withArrow>
                View my work
              </Button>
              <Button href="/contact" variant="white" size="lg">
                Get in touch
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {profile.socials.github && (
                <HeroSocial href={profile.socials.github} label="GitHub">
                  <GitHubIcon className="h-5 w-5" />
                </HeroSocial>
              )}
              {profile.socials.linkedin && (
                <HeroSocial href={profile.socials.linkedin} label="LinkedIn">
                  <LinkedInIcon className="h-5 w-5" />
                </HeroSocial>
              )}
              <HeroSocial href={`mailto:${profile.email}`} label="Email">
                <MailIcon className="h-5 w-5" />
              </HeroSocial>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-navy-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  <DownloadIcon className="h-4 w-4" /> Résumé
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <div className="border-b border-navy-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================== CLIENTS =========================== */}
      <Section className="py-12 sm:py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-navy-400">
          Trusted by organisations across Kenya &amp; beyond
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((c) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              className="h-10 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12"
              loading="lazy"
            />
          ))}
        </div>
      </Section>

      {/* ========================= FEATURED WORK ======================= */}
      <Section id="work" className="bg-sand-50">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I'm proud of"
            intro="A few builds that show how I think — from the problem to the shipped result. Every one is a full case study."
          />
          <Button href="/work" variant="outline" withArrow className="shrink-0">
            All projects
          </Button>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ SKILLS =========================== */}
      <Section id="skills">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I build with"
          intro="A modern, TypeScript-first stack across the whole application — with the fundamentals to back it up."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 transition-colors hover:border-navy-200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <ServiceIcon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-navy-900">{group.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================== EXPERIENCE ========================= */}
      <Section className="bg-sand-50">
        <SectionHeading eyebrow="Experience" title="Where I've been building" />
        <div className="mt-12 space-y-5">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 70}>
              <div className="grid gap-4 rounded-2xl border border-navy-100 bg-white p-6 sm:grid-cols-12 sm:p-8">
                <div className="sm:col-span-4">
                  <div className="font-mono text-xs text-gold-600">{job.period}</div>
                  <h3 className="mt-1 text-lg font-semibold text-navy-900">{job.role}</h3>
                  <div className="text-sm text-navy-500">{job.company}</div>
                  {job.location && (
                    <div className="mt-1 text-xs text-navy-400">{job.location}</div>
                  )}
                </div>
                <div className="sm:col-span-8">
                  <p className="text-sm leading-relaxed text-navy-600">{job.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm text-navy-600">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* =========================== ABOUT ============================= */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>About me</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy-900 text-balance sm:text-4xl">
              Engineer, problem-solver, and relentless finisher.
            </h2>
            <p className="mt-5 leading-relaxed text-navy-500">{about.paragraphs[0]}</p>
            <Button href="/about" variant="outline" withArrow className="mt-7">
              More about me
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {about.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6">
                  <h3 className="font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ========================= TESTIMONIAL ========================= */}
      {testimonials.length > 0 && (
        <Section className="bg-sand-50">
          <div className="mx-auto max-w-3xl text-center">
            <QuoteIcon className="mx-auto h-10 w-10 text-gold-400" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-navy-900 text-balance sm:text-3xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div className="mt-6 text-sm">
              <div className="font-semibold text-navy-900">{testimonials[0].author}</div>
              <div className="text-navy-500">{testimonials[0].title}</div>
            </div>
          </div>
        </Section>
      )}

      {/* ============================= CTA ============================= */}
      <section className="bg-navy-gradient">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white text-balance sm:text-4xl">
            Have a project in mind? Let&rsquo;s build it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-100">
            Whether it&rsquo;s a new product, a rescue mission, or a role on your team — I&rsquo;d love to hear about it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="gold" size="lg" withArrow>
              Start a conversation
            </Button>
            <Button href={`mailto:${profile.email}`} variant="white" size="lg">
              <MailIcon className="h-5 w-5" /> {profile.email}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroSocial({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-navy-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
    >
      {children}
    </a>
  );
}
