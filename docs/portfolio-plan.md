# Peter Misiati — Software Engineer Portfolio
### Design & Build Plan · Prepared by your engineer · v1

> A "directory of work" that reads like a **tier-1 engineer's portfolio** — not a template. This
> document is the blueprint we build against. Everything here is grounded in how the most‑referenced
> engineer portfolios (Brittany Chiang, Josh Comeau, Lee Robinson, Rauno Freiberg, Cassie Evans)
> are actually put together, plus current 2026 hiring‑manager expectations.

---

## 0. First, a scope flag (needs your call)

This repository is currently the **live website for _Misiati & Associates, Certified Public
Accountants of Kenya_** (an accounting firm). Your new request is a **software‑engineer portfolio** —
a different product with a different audience.

We need to decide **where the portfolio lives**:

| Option | What it means | Recommended when |
| --- | --- | --- |
| **A. Fresh repo** | New repo `peter-portfolio`, own domain (e.g. `petermisiati.dev`). The accounting site stays untouched. | You want a clean personal brand separate from the firm. **(Recommended)** |
| **B. Sub‑path here** | Portfolio at `/portfolio` inside this project. | You want one deploy, one domain. |
| **C. Replace** | This repo becomes the portfolio; accounting site retires. | The firm site is no longer needed. |

The plan below is **stack‑ and location‑agnostic** — it holds regardless of A/B/C. My recommendation
is **Option A**. The accounting‑firm site itself becomes a **flagship case study** in the portfolio
(real client, real launch, measurable outcome — exactly what tier‑1 portfolios lead with).

---

## 1. What actually separates a Tier‑1 portfolio from a template

Most portfolios are a résumé with a dark background. The top ~5% do six things templates don't:

1. **Lead with a one‑sentence value proposition, not a greeting.** Above the fold: name, current
   role/specialty, and _what you build and for whom_ — readable in 5 seconds. (Chiang's site loads
   in milliseconds and puts name + role + value prop first.)
2. **Projects are case studies, not screenshots.** Every headline project answers **Problem →
   Approach → Architecture → Impact (with numbers)**. This is the single biggest differentiator that
   hiring managers cite.
3. **The work is _shown_, not described** — live demos, embedded interactive previews, real GitHub
   links that resolve, short screen‑capture loops. "Show, don't tell."
4. **The site itself is a proof of craft.** Sub‑second loads, buttery motion, flawless mobile,
   perfect Lighthouse/accessibility scores. The portfolio _is_ a work sample — recruiters judge your
   engineering by how the page is built.
5. **A point of view / personality.** Josh Comeau's sound effects, Chiang's green‑on‑navy restraint,
   Bruno Simon's 3D world. One deliberate signature move, not ten gimmicks.
6. **Frictionless contact + a downloadable, current résumé.** Email, LinkedIn, GitHub in the hero
   _and_ footer; one‑click CV; a contact method that actually reaches you.

Everything below operationalizes these six.

---

## 2. Information architecture (site map)

A tier‑1 SWE portfolio is usually **one long, fast home page** with a few deep sub‑pages for the
work. We'll build:

```
/                     Home — the pitch, in one scroll
  ├─ Hero            name · role · value prop · primary CTAs (View work / Contact) · socials
  ├─ Featured work   3–5 flagship projects as rich cards → each links to a case study
  ├─ Selected clients / logos (optional, social proof)
  ├─ Skills          grouped, honest, tied to real projects (bento or tidy columns)
  ├─ Experience      condensed timeline (roles, dates, one‑line impact each)
  ├─ About           2–3 short paragraphs — who you are, what you build, what you want next
  ├─ Testimonials    1–3 real quotes (clients/leads) — huge trust signal
  └─ Contact         form + direct email + socials + résumé download

/work                 The "directory" — full filterable grid of ALL projects
/work/[slug]          Individual case study (the heart of the portfolio)
/about                Long‑form bio, photo, values, tools, timeline (optional split from home)
/resume  or  /cv      HTML résumé + downloadable PDF
/uses     (optional)  Tools, hardware, editor setup — a beloved dev‑culture page
/blog     (optional)  Writing = thought leadership (Lee Robinson / Josh Comeau model)
```

The **`/work` directory + `/work/[slug]` case studies** are what make this a "directory of my
portfolio" rather than a single scroll — this is the centre of gravity of the whole build.

---

## 3. The case‑study template (the most important artifact)

Every project in `/work/[slug]` follows one repeatable structure. This is what turns "I built a
website" into "I solved a business problem with engineering."

```
Hero:        Project name · one‑line summary · role · timeline · stack chips · [Live] [Code] buttons
Snapshot:    Client/context · my role · team size · dates · outcome headline (a number if possible)
The problem: 2–4 sentences. What was broken / needed? Who for?
The approach: How I framed it, key decisions, trade‑offs I weighed (this shows seniority).
Architecture: Diagram or bullets — stack, data flow, notable technical choices & WHY.
Highlights:  3–5 things I'm proud of (a hard bug, a perf win, a clever UX, an integration).
Visuals:     Screenshots / screen‑capture loops / embedded live preview.
Impact:      Results — metrics, launch, user feedback, what it enabled. Numbers > adjectives.
Links:       Live site · repo · related writeup.
Next:        Prev/next project nav to keep them browsing.
```

**Launch content: 3 flagship case studies.** Quality over quantity is the universal rule.
Candidate #1 is the **Misiati & Associates site** (real client, Next.js 16, static‑export, live
domain, contact pipeline). We'll pick two more from your old site + GitHub.

---

## 4. Content model (single source of truth)

All portfolio content lives in typed data files so the design and the data never tangle — the same
pattern the current repo already uses well (`src/lib/firm.ts`). We'll mirror it:

```
src/content/
  profile.ts      name, headline, value prop, bio, location, avatar, socials, résumé URL
  projects.ts     Project[] — slug, title, summary, role, dates, stack[], links, featured,
                  problem, approach, architecture, highlights[], impact[], media[], metrics
  experience.ts   Job[] — company, role, dates, bullets[]
  skills.ts       grouped: languages / frontend / backend / data / devops / tooling
  testimonials.ts Quote[] — author, role, company, quote, avatar
  seo.ts          per‑page titles, descriptions, OG images
```

Add a project by appending one typed object — it appears on the home grid, the `/work` directory,
generates its own `/work/[slug]` page, its sitemap entry, and its OG image. Zero page edits.

---

## 5. Design system & aesthetic direction

A portfolio must look like _one_ intentional system. We define tokens up front:

- **Typography:** one expressive display face (headings) + one highly‑readable text/UI face + a mono
  face for code and stack chips. A clear type scale.
- **Color:** a restrained palette — one dark‑first neutral base + **one signature accent**. Full
  light/dark support (respect `prefers-color-scheme`, plus a manual toggle).
- **Space & grid:** generous whitespace, a consistent spacing scale, a 12‑col grid; **bento‑grid**
  tiles for skills/highlights (a current 2026 signature).
- **Motion:** purposeful, fast, reduced‑motion aware — scroll reveals, hover states, one hero moment.
  Never janky, never blocking. (This is where the site proves your front‑end craft.)
- **Imagery:** real screenshots in device frames, subtle gradients/noise, optional 3D/canvas hero as
  the "signature move" if we want to go bold.

**Direction options** we'll pick from once I see the old site (I'll mock 2–3):
`Editorial‑minimal` (Chiang‑style restraint) · `Playful‑crafted` (Comeau‑style delight) ·
`Technical/terminal` (IDE‑aesthetic) · `Bold‑immersive` (3D/canvas hero).

---

## 6. Technical architecture & standards

The build stays on the repo's modern foundation and pushes it to a tier‑1 finish.

- **Framework:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4 — already in place.
  ⚠️ This is a customized Next.js; we read `node_modules/next/dist/docs/` before writing routing/
  data code (per `AGENTS.md`), not training‑data assumptions.
- **Rendering:** static‑first (SSG) for instant loads and cheap hosting; MDX for case‑study bodies
  so long‑form content is pleasant to author.
- **Components:** small, typed, reusable — `ProjectCard`, `CaseStudyLayout`, `StackChip`,
  `SectionHeading`, `Timeline`, `BentoGrid`, `ThemeToggle`, `Reveal` (some already exist here).
- **Assets:** `next/image`, AVIF/WebP, device‑framed screenshots, generated per‑project OG images.
- **Quality bars (non‑negotiable, this is the actual differentiator):**
  - Lighthouse **95+** across Performance / Accessibility / Best Practices / SEO.
  - **WCAG 2.2 AA**: semantic HTML, keyboard nav, focus states, alt text, contrast, reduced motion.
  - Core Web Vitals green; sub‑second first load; zero layout shift.
  - SEO: metadata, Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`, JSON‑LD `Person`/
    `WebSite` schema so search + AI surfaces read it correctly.
  - Analytics (privacy‑friendly, e.g. Plausible/Umami) + basic event tracking on CTAs.
- **CI/CD:** GitHub → auto‑deploy (Cloudflare Pages / Vercel). Preview deploy per PR. Custom domain.

---

## 7. Workflow — phased delivery

A senior engagement runs in reviewable milestones, each shippable, each with your sign‑off.

| Phase | Milestone | What you get | Your input |
| --- | --- | --- | --- |
| **0 · Discovery** | Scope & content audit | Location decision (A/B/C), positioning, project shortlist mined from your **old site + GitHub** | Old‑site link, target roles, assets |
| **1 · Design** | Look & feel | 2–3 direction mockups (hero + a case study), design tokens, chosen direction | Pick a direction |
| **2 · Foundation** | Skeleton | Repo/branch, design system, layout, nav, theme toggle, content model wired | Review |
| **3 · Content build** | The work | Home page + `/work` directory + 3 flagship case studies authored | Approve copy |
| **4 · Polish** | Craft pass | Motion, responsive QA, empty/edge states, 404, OG images, résumé page | Review on real devices |
| **5 · Hardening** | Tier‑1 finish | Lighthouse/a11y/SEO to target, cross‑browser, analytics, meta | — |
| **6 · Launch** | Live | Domain, deploy pipeline, sitemap submitted, final QA | Go/no‑go |
| **7 · Handover** | Yours to run | Docs on "how to add a project", short Loom, maintenance notes | — |

We can compress or expand any phase. Nothing gets built before Phase 0's positioning is locked.

---

## 8. What I need from you to start (Phase 0)

1. **Your old website link** (you mentioned this) — I'll audit it and salvage copy, projects,
   photos, and anything worth keeping.
2. **Positioning:** what roles/work are you targeting? (e.g. full‑stack, front‑end, mobile,
   freelance/agency, specific industries.) This sets the whole tone.
3. **Project raw material:** GitHub username, any repos/live sites you want featured, client work you
   can show.
4. **Assets:** a good photo (or a decision to go monogram‑only, as the firm site does), CV/résumé,
   any existing brand colors.
5. **The scope call:** Option **A / B / C** from §0.

---

## 9. Immediate next step

You share the **old‑site link**. I'll do a full audit (content, projects, design, salvageable
assets), fold the findings into this plan, and come back with the **2–3 design directions** and the
**final project shortlist** for your pick. Then we build.

---

### Sources / references informing this plan
- Brittany Chiang — brittanychiang.com (value‑prop hero, 4‑project restraint, dark+accent)
- Josh Comeau — joshwcomeau.com (personality, motion, content engine)
- Lee Robinson — leerob.com (writing as thought leadership, MDX)
- sitebuilderreport.com / careerfoundry.com / institutedata.com — 2026 must‑have sections, case‑study
  structure, quality‑over‑quantity, contact/CV expectations
- emmabostian/developer-portfolios (GitHub) — large curated set of real engineer portfolios
