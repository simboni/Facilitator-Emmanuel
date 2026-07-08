/* ==========================================================================
   Peter Misiati — Portfolio content (single source of truth)
   --------------------------------------------------------------------------
   Everything the site shows lives here. Add a project, edit a skill, change a
   link — it updates everywhere (home grid, /work directory, the individual
   /work/[slug] case study, the sitemap and the SEO tags). You never need to
   touch the page components to change content.

   👉 Items marked  // SAMPLE — replace  are realistic placeholders. Swap them
      for your real work when you're ready (or send me the details and I will).
   ========================================================================== */

/* ------------------------------- Profile -------------------------------- */

export const profile = {
  name: "Peter Misiati",
  firstName: "Peter",
  /** Shown under the name in the hero. Keep it to one line. */
  role: "Full-Stack Software Engineer",
  /** The 5-second value proposition — what you build and for whom. */
  valueProp:
    "I design and build fast, accessible web applications end-to-end — from the database to the pixel — that help businesses launch, grow and look world-class online.",
  /** A slightly longer hero support line. */
  tagline:
    "Full-stack engineer specialising in modern TypeScript, React and Next.js. I turn ideas and rough briefs into production software that ships.",
  location: "Nairobi, Kenya · Available worldwide (remote)",
  availability: "Open to freelance projects & full-time roles",
  email: "misiatipeter@gmail.com",
  /** Put your CV PDF in /public and point here, e.g. "/peter-misiati-cv.pdf". */
  resumeUrl: "",
  socials: {
    github: "https://github.com/", // SAMPLE — replace with your GitHub URL
    linkedin: "https://www.linkedin.com/", // SAMPLE — replace
    x: "", // optional
    email: "misiatipeter@gmail.com",
  },
  /** Quick "by the numbers" stats for the hero / about. Keep them honest. */
  stats: [
    { value: 5, suffix: "+", label: "Years writing code" },
    { value: 20, suffix: "+", label: "Projects shipped" },
    { value: 12, suffix: "+", label: "Happy clients" },
    { value: 100, suffix: "%", label: "On-time delivery" },
  ],
} as const;

/* --------------------------------- About -------------------------------- */

export const about = {
  /** 2–3 short paragraphs. Human and direct. Who you are, what you build, what you want next. */
  paragraphs: [
    "I'm Peter, a full-stack software engineer based in Kenya building for clients everywhere. I care about two things in equal measure: software that is genuinely pleasant to use, and software that is built well enough to maintain and grow for years.",
    "My day-to-day is modern TypeScript across the stack — React and Next.js on the front end, Node and serverless APIs on the back, and SQL or document databases underneath. I've shipped everything from marketing sites and dashboards to full commerce platforms, and I run my own small studio, SMP Developers, for client work.",
    "I'm currently open to freelance engagements and full-time roles where I can own features end-to-end and raise the quality bar. If you're building something, I'd love to hear about it.",
  ],
  /** A short, human list of what you value / how you work. */
  principles: [
    {
      title: "Ship, then refine",
      body: "Working software in front of real users beats a perfect plan. I get to a live, testable version early and iterate.",
    },
    {
      title: "Performance is a feature",
      body: "Sub-second loads, no layout shift, green Core Web Vitals. Speed is the first thing users feel.",
    },
    {
      title: "Accessible by default",
      body: "Semantic HTML, keyboard support and proper contrast aren't extras — they're the baseline of good engineering.",
    },
    {
      title: "Own the outcome",
      body: "I care about the result, not just the ticket. If something is off, I'll flag it and fix it.",
    },
  ],
} as const;

/* -------------------------------- Skills -------------------------------- */

export type SkillGroup = {
  title: string;
  /** icon key from iconMap in components/icons.tsx */
  icon: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Vite"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express", "Next.js API / RSC", "REST", "GraphQL", "FastAPI"],
  },
  {
    title: "Data",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Supabase"],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    items: ["Docker", "Vercel", "Cloudflare", "AWS", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Tooling & Practice",
    icon: "tools",
    items: ["Git", "Jest / Vitest", "Playwright", "Figma", "Agile", "Testing"],
  },
];

/* ------------------------------ Experience ------------------------------ */

export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    company: "SMP Developers",
    role: "Founder & Full-Stack Engineer",
    period: "2022 — Present",
    location: "Remote · Kenya",
    summary:
      "Run a small software studio delivering web apps and sites for businesses across East Africa and beyond.",
    highlights: [
      "Designed and shipped 20+ production websites and web apps end-to-end.",
      "Owned everything from discovery and UX to deployment, DNS and handover.",
      "Standardised on a modern Next.js + TypeScript stack for speed and maintainability.",
    ],
  },
  // SAMPLE — replace / add your real roles below
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2020 — 2022",
    location: "Remote",
    summary:
      "Built custom web solutions for startups and SMEs — landing pages, dashboards and internal tools.",
    highlights: [
      "Delivered React front ends backed by Node/Express APIs.",
      "Integrated payments, auth and third-party APIs.",
    ],
  },
];

/* ------------------------------- Projects ------------------------------- */
/* The heart of the portfolio. Each project renders a card on the home page
   and /work grid, and its own case-study page at /work/<slug>.               */

export type Metric = { value: string; label: string };
export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  /** One-line summary shown on cards. */
  summary: string;
  /** e.g. "Client project", "Personal", "Open source". */
  type: string;
  year: string;
  role: string;
  /** Tech chips. First 3–4 show on the card. */
  stack: string[];
  /** Categories used by the /work filter. */
  tags: string[];
  featured?: boolean;
  /** Accent gradient for the card cover (from/to are Tailwind classes). */
  cover: { from: string; to: string; initials: string };
  links: {
    live?: string;
    code?: string;
    extra?: ProjectLink;
  };
  /* ---- Case study body ---- */
  problem: string;
  approach: string;
  architecture: string[];
  highlights: string[];
  impact: Metric[];
  /** Optional screenshot paths in /public. Empty = show the branded cover. */
  media: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "misiati-associates",
    title: "Misiati & Associates",
    summary:
      "A production marketing website and lead pipeline for a Certified Public Accountants firm in Kenya.",
    type: "Client project",
    year: "2026",
    role: "Design & full-stack development",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Cloudflare Pages"],
    tags: ["Web", "Design", "Client"],
    featured: true,
    cover: { from: "from-navy-700", to: "to-navy-900", initials: "M&A" },
    links: {
      live: "https://misiatiassociates.co.ke",
      extra: { label: "Case study", href: "/work/misiati-associates" },
    },
    problem:
      "An established accounting firm had no web presence. Prospective clients couldn't find them, verify their credentials, or get in touch without a phone call — and competitors with even a basic site were winning that first impression.",
    approach:
      "I ran a short discovery to capture the firm's services, credentials and tone, then designed a trust-first brand system (navy + gold, serif display) and built a fast static site around a single editable content file so the firm can update details without a developer. Every piece of content — services, team, testimonials, contact details — is typed data, so the site can't drift out of sync.",
    architecture: [
      "Next.js 16 App Router with static HTML export — no server to run, deploys anywhere.",
      "All firm data in one typed source file; pages render from it, so edits are one-line.",
      "Contact form posts to a no-backend delivery service with a WhatsApp/email fallback.",
      "Deployed on Cloudflare Pages via GitHub with an automatic build on every push.",
      "SEO: metadata, Open Graph, sitemap.xml, robots.txt and JSON-LD tuned for local search.",
    ],
    highlights: [
      "Sub-second first load and a perfect mobile layout on a zero-cost static host.",
      "A motion system (scroll reveals, cursor spotlight cards) that stays smooth and respects reduced-motion.",
      "Editable-by-the-client architecture — add a service or testimonial by appending one object.",
    ],
    impact: [
      { value: "0→1", label: "Web presence launched" },
      { value: "<1s", label: "First load on mobile" },
      { value: "100%", label: "Static — no hosting cost" },
    ],
    media: [],
  },

  // SAMPLE — replace with a real project ↓
  {
    slug: "taskflow",
    title: "TaskFlow",
    summary:
      "A real-time team task manager with boards, drag-and-drop and live collaboration.",
    type: "Personal project",
    year: "2025",
    role: "Full-stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets"],
    tags: ["Web", "Full-stack", "SaaS"],
    featured: true,
    cover: { from: "from-gold-500", to: "to-gold-700", initials: "TF" },
    links: { live: "", code: "" },
    problem:
      "Small teams needed a lightweight, real-time board without the complexity and price of enterprise tools.",
    approach:
      "Built a Kanban-style app with optimistic UI and live sync so multiple users see changes instantly. Focused on a snappy drag-and-drop experience and a clean data model.",
    architecture: [
      "Next.js front end with optimistic updates for instant feedback.",
      "PostgreSQL + Prisma for a typed, relational data layer.",
      "WebSocket channel for real-time board sync across clients.",
      "Auth with sessions; role-based board permissions.",
    ],
    highlights: [
      "Real-time multi-user sync with conflict-safe updates.",
      "Accessible drag-and-drop with full keyboard support.",
    ],
    impact: [
      { value: "Real-time", label: "Live collaboration" },
      { value: "60fps", label: "Drag interactions" },
    ],
    media: [],
  },

  // SAMPLE — replace with a real project ↓
  {
    slug: "devmart-api",
    title: "DevMart Commerce API",
    summary:
      "A headless e-commerce API with carts, payments and inventory, built to scale.",
    type: "Open source",
    year: "2024",
    role: "Backend",
    stack: ["Node.js", "Express", "MongoDB", "Stripe", "Docker"],
    tags: ["Backend", "API", "Full-stack"],
    featured: false,
    cover: { from: "from-navy-500", to: "to-navy-800", initials: "DM" },
    links: { live: "", code: "" },
    problem:
      "Front-end teams needed a clean, well-documented commerce backend they could drop into any storefront.",
    approach:
      "Designed a RESTful API with clear resource boundaries, robust validation and Stripe-backed checkout, all containerised for easy deployment.",
    architecture: [
      "Express REST API with layered architecture (routes → services → data).",
      "MongoDB for flexible product/catalog modelling.",
      "Stripe integration for payments and webhooks.",
      "Dockerised with a reproducible dev environment.",
    ],
    highlights: [
      "Fully documented endpoints with example requests.",
      "Idempotent, webhook-driven order fulfilment.",
    ],
    impact: [
      { value: "REST", label: "Clean, documented API" },
      { value: "Docker", label: "One-command deploy" },
    ],
    media: [],
  },
];

/* --------------------------- Derived helpers ---------------------------- */

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** All unique tags, for the /work directory filter. */
export const projectTags = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
];

/* ----------------------------- Testimonials ----------------------------- */

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Peter took our firm from no website to a polished, professional presence in weeks. It's fast, it looks premium, and we can update it ourselves. Clients notice.",
    author: "Managing Partner",
    title: "Misiati & Associates, CPA(K)", // SAMPLE — replace with a named quote when you have permission
  },
];

/* -------------------------------- Nav ----------------------------------- */

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ------------------------------- Site meta ------------------------------ */

export const site = {
  /** Change to your real domain before launch. */
  domain: "petermisiati.dev",
  title: `${profile.name} — ${profile.role}`,
  description: profile.valueProp,
} as const;
