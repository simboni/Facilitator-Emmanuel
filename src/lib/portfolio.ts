/* ==========================================================================
   Simboni Misiati Peter (SMP) — Portfolio content (single source of truth)
   --------------------------------------------------------------------------
   Everything the site shows lives here. Add a project, edit a skill, change a
   link — it updates everywhere (home grid, /work directory, the individual
   /work/[slug] case study, the sitemap and the SEO tags).

   Content sourced from the previous site (smp-developers.com). Add live URLs,
   screenshots and richer case-study detail as you have them.
   ========================================================================== */

/* ------------------------------- Profile -------------------------------- */

export const profile = {
  name: "Simboni Misiati Peter",
  shortName: "SMP",
  firstName: "Peter",
  /** Shown under the name in the hero. */
  role: "Software Engineer · Web Developer · Tech Consultant",
  /** Short second line used in the header/footer logo lockup. */
  logoTagline: "SMP Developers",
  /** The 5-second value proposition. */
  valueProp:
    "I'm a software engineer, social entrepreneur and tech consultant building software that drives real impact — microfinance systems, ERP platforms, e-learning tools and modern websites — while empowering youth through technology and financial education.",
  /** A slightly longer hero support line. */
  tagline:
    "Software engineer and tech consultant from Kenya. I design and build custom software, websites and mobile apps — and help organisations put technology to work.",
  location: "Nairobi & Bungoma, Kenya",
  availability: "Available for freelance & consulting",
  email: "info@smp-developers.com",
  phone: "+254 706 289 514",
  whatsapp: "254706289514",
  /** The live résumé (opens the hosted Notion CV). */
  resumeUrl:
    "https://simboni.notion.site/Peter-Misiati-Simboni-RESUME-bdb4a222938a4b1dace331074dc92336?pvs=4",
  socials: {
    github: "", // add your GitHub URL to show the icon
    linkedin: "", // add your LinkedIn URL to show the icon
    x: "",
    email: "info@smp-developers.com",
  },
  /** Quick "by the numbers" stats. */
  stats: [
    { value: 8, suffix: "+", label: "Years in tech" },
    { value: 10, suffix: "+", label: "Projects delivered" },
    { value: 10, suffix: "+", label: "Clients served" },
    { value: 3, suffix: "", label: "Ventures led" },
  ],
} as const;

/* --------------------------------- About -------------------------------- */

export const about = {
  paragraphs: [
    "Hello — SMP here. I'm a software engineer, social entrepreneur and tech consultant passionate about driving social impact through technology. I've built innovative solutions like microfinance systems, ERP platforms and online learning tools, while empowering youth through mentorship and financial education.",
    "Through my studio, SMP Developers, I design and build custom software, websites and mobile apps end-to-end — from the first conversation to launch and handover. I work across the modern web and mobile, and I'm equally at home advising organisations on the right technology strategy.",
    "Beyond code, I lead SMP Eventures and run financial-literacy programmes that help young people earn, save and invest. My goal is simple: inspire positive change and build a future shaped by innovation and inclusion. If you're building something, I'd love to hear about it.",
  ],
  /** How I work — adapted from "why clients choose me". */
  principles: [
    {
      title: "Tailored, not templated",
      body: "I build solutions around your actual needs and goals — not a one-size-fits-all template.",
    },
    {
      title: "End-to-end ownership",
      body: "Discovery, design, development, deployment and handover — I own the whole journey and the outcome.",
    },
    {
      title: "Impact-driven",
      body: "I care about results that matter: systems that work, communities empowered, businesses that grow.",
    },
    {
      title: "Creativity & excellence",
      body: "A commitment to craft, clean execution and work I'm proud to put my name on.",
    },
  ],
} as const;

/* -------------------------------- Skills -------------------------------- */

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML / CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "PHP", "Laravel", "Python", "Django", "REST APIs"],
  },
  {
    title: "WordPress & CMS",
    icon: "code",
    items: ["WordPress", "Elementor", "DIVI", "Gutenberg", "Theme Development"],
  },
  {
    title: "Databases & Systems",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "ERP Systems", "Microfinance Systems"],
  },
  {
    title: "Mobile & Fintech",
    icon: "chart",
    items: ["Android", "iOS", "SACCO Systems", "Payments", "Savings & Investments"],
  },
  {
    title: "Design & Consulting",
    icon: "sparkle",
    items: ["Web Design", "Graphic Design", "Canva", "Photoshop", "Tech Strategy", "Git", "Notion"],
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
    role: "Senior Developer",
    period: "2023 — Present",
    location: "Nairobi, Kenya",
    summary:
      "Lead development of systems, websites and mobile apps, and coordinate teams to raise output and product quality.",
    highlights: [
      "Deliver custom software, websites and apps end-to-end for clients across Kenya.",
      "Coordinate creative and development teams to ship quality products on time.",
      "Own everything from discovery and UX through deployment and handover.",
    ],
  },
  {
    company: "eLearners Academy",
    role: "Youth Empowerment & Financial Education",
    period: "2022 — Present",
    location: "Kenya",
    summary:
      "Train, inspire and collaborate with youth across the nation to improve livelihoods and financial independence.",
    highlights: [
      "Run financial-literacy and technology mentorship programmes for young people.",
      "Built learning tools and community platforms supporting the work.",
    ],
  },
  {
    company: "SMP Eventures Ltd",
    role: "Chairman & Director",
    period: "2015 — Present",
    location: "Kenya",
    summary:
      "Collaborate with creative and development teams on the execution of ideas across ventures.",
    highlights: [
      "Lead a multi-disciplinary team turning ideas into delivered projects.",
      "Founded and grew the venture alongside the software practice.",
    ],
  },
];

/* ------------------------------ Education ------------------------------- */

export type Education = {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    institution: "Jomo Kenyatta University of Agriculture & Technology (JKUAT)",
    qualification: "Master's Degree in Software Engineering",
    period: "2023 — 2025",
    detail: "Nairobi, Kenya",
  },
  {
    institution: "JKUAT — Programming Certificate",
    qualification: "Software & App Development",
    period: "2024 — Present",
    detail: "Git, JavaScript, iOS, Android, PHP, Laravel, Python, Django, Notion.",
  },
  {
    institution: "WordPress Development",
    qualification: "Certification & Practice",
    period: "2015 — 2025",
    detail: "DIVI, Elementor, Gutenberg and full WordPress theme development.",
  },
];

/* ------------------------------- Clients -------------------------------- */

export type Client = { name: string; logo: string };

export const clients: Client[] = [
  { name: "Talitha Kum International", logo: "/clients/talithakum.webp" },
  { name: "Golden Star", logo: "/clients/golden-star.webp" },
  { name: "Commissioner Dennis Wamalwa", logo: "/clients/dr-wamalwa.png" },
  { name: "eLearners Academy", logo: "/clients/elearners.webp" },
  { name: "KEYSA", logo: "/clients/keysa.png" },
  { name: "Canossian", logo: "/clients/canossian.webp" },
  { name: "Zuri", logo: "/clients/zuri.png" },
  { name: "Admin-Up", logo: "/clients/admin-up.png" },
];

/* ------------------------------- Projects ------------------------------- */

export type Metric = { value: string; label: string };
export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  type: string;
  year: string;
  role: string;
  stack: string[];
  tags: string[];
  featured?: boolean;
  cover: { from: string; to: string; initials: string };
  links: { live?: string; code?: string; extra?: ProjectLink };
  problem: string;
  approach: string;
  architecture: string[];
  highlights: string[];
  impact: Metric[];
  media: { src: string; alt: string }[];
};

export const projects: Project[] = [
  // NOTE: Naveedex, TallyPay and Fit Generations summaries are best-effort —
  // send me a one-liner + live/repo URLs (or let me add the repos) to refine.
  {
    slug: "naveedex",
    title: "Naveedex",
    summary:
      "A modern web platform built end-to-end with Next.js, React and TypeScript.",
    type: "Client project",
    year: "2025",
    role: "Full-stack development",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["Web App", "Client"],
    featured: true,
    cover: { from: "from-navy-600", to: "to-navy-900", initials: "NX" },
    links: {},
    problem:
      "The client needed a fast, modern web platform built on today's stack — not a dated template — that could grow with them.",
    approach:
      "I designed and built the product end-to-end with a component-driven Next.js architecture, a typed data layer and a clean, responsive UI.",
    architecture: [
      "Next.js (App Router) + React with TypeScript throughout.",
      "Tailwind CSS design system for a consistent, responsive UI.",
      "Server-rendered pages with fast loads and strong SEO.",
    ],
    highlights: [
      "Built on a modern, maintainable stack.",
      "Fast, responsive and accessible by default.",
    ],
    impact: [
      { value: "Next.js", label: "Modern stack" },
      { value: "Fast", label: "Optimised performance" },
    ],
    media: [],
  },
  {
    slug: "tallypay",
    title: "TallyPay",
    summary:
      "A fintech app for tracking, tallying and managing payments in one clean dashboard.",
    type: "Product",
    year: "2025",
    role: "Full-stack development",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    tags: ["Fintech", "Web App"],
    featured: true,
    cover: { from: "from-gold-500", to: "to-gold-700", initials: "TP" },
    links: {},
    problem:
      "Individuals and small businesses need a simple way to record and reconcile payments without wrestling with spreadsheets or heavy accounting tools.",
    approach:
      "I built a focused dashboard that makes recording, tallying and reviewing payments effortless, with a clean UX and a reliable data model.",
    architecture: [
      "Next.js + React front end with a typed API layer.",
      "PostgreSQL for reliable, relational transaction data.",
      "Clear dashboards, filtering and summaries.",
    ],
    highlights: [
      "Turns payment tracking into a few taps.",
      "Clean, trustworthy fintech UX.",
    ],
    impact: [
      { value: "Fintech", label: "Payments made simple" },
      { value: "Real-time", label: "Live tallies" },
    ],
    media: [],
  },
  {
    slug: "misiati-associates",
    title: "Misiati & Associates",
    summary:
      "A production website and lead pipeline for a firm of Certified Public Accountants in Kenya.",
    type: "Client project",
    year: "2026",
    role: "Design & full-stack development",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Cloudflare Pages"],
    tags: ["Web", "Client"],
    featured: true,
    cover: { from: "from-navy-700", to: "to-navy-900", initials: "M&A" },
    links: { live: "https://misiatiassociates.co.ke" },
    problem:
      "An established accounting firm had no web presence — prospective clients couldn't find them, verify credentials or get in touch, and competitors with even a basic site were winning that first impression.",
    approach:
      "I ran a short discovery, designed a trust-first brand system, and built a fast static site around a single editable content file so the firm can update details without a developer.",
    architecture: [
      "Next.js 16 App Router with static export — no server, deploys anywhere.",
      "All firm data in one typed source file; pages render from it.",
      "Contact form with email + WhatsApp fallback.",
      "Cloudflare Pages with automatic builds; SEO, Open Graph, sitemap and JSON-LD.",
    ],
    highlights: [
      "Sub-second first load and a flawless mobile layout on a zero-cost static host.",
      "Editable-by-the-client architecture — add a service by appending one object.",
    ],
    impact: [
      { value: "0→1", label: "Web presence launched" },
      { value: "<1s", label: "First load on mobile" },
      { value: "100%", label: "Static — no hosting cost" },
    ],
    media: [],
  },
  {
    slug: "fit-generations",
    title: "Fit Generations",
    summary:
      "A bold, modern website and membership experience for a fitness brand and gym.",
    type: "Client project",
    year: "2025",
    role: "Design & full-stack development",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["Web", "Fitness"],
    featured: true,
    cover: { from: "from-gold-500", to: "to-navy-800", initials: "FG" },
    links: {},
    problem:
      "A fitness brand needed an energetic online home to showcase classes and memberships and convert visitors into members.",
    approach:
      "I designed and built a bold, high-energy site with clear membership and class information and a smooth, mobile-first experience.",
    architecture: [
      "Next.js + React with TypeScript.",
      "Tailwind CSS for a punchy, responsive design system.",
      "Fast, SEO-friendly pages.",
    ],
    highlights: [
      "A brand-forward, high-energy design.",
      "Mobile-first and conversion-focused.",
    ],
    impact: [
      { value: "Brand", label: "Memberships & classes" },
      { value: "Fast", label: "Mobile-first" },
    ],
    media: [],
  },
  {
    slug: "64-theatre",
    title: "64 Theatre",
    summary:
      "A platform for a theatre — productions, events and online ticketing in one place.",
    type: "Client project",
    year: "2025",
    role: "Full-stack development",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["Web App", "Events"],
    featured: true,
    cover: { from: "from-navy-700", to: "to-gold-700", initials: "64" },
    links: {},
    problem:
      "A theatre needed a modern platform to promote its productions and let audiences discover events and book online.",
    approach:
      "I built a platform that showcases shows and events with a smooth browsing and booking experience, on a fast, modern stack.",
    architecture: [
      "Next.js + React with TypeScript.",
      "Production and event listings with a clean booking flow.",
      "Responsive, fast and SEO-friendly pages.",
    ],
    highlights: [
      "A polished home for a theatre's productions.",
      "Smooth discovery and booking experience.",
    ],
    impact: [
      { value: "Events", label: "Shows & ticketing" },
      { value: "Web app", label: "Modern platform" },
    ],
    media: [],
  },
  {
    slug: "smp-portfolio",
    title: "SMP Portfolio",
    summary:
      "This site — my own portfolio and work directory, designed and built from scratch.",
    type: "Personal",
    year: "2026",
    role: "Design & full-stack development",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel"],
    tags: ["Web", "Portfolio"],
    featured: false,
    cover: { from: "from-navy-600", to: "to-navy-900", initials: "SMP" },
    links: { live: "https://smp-developers.com" },
    problem:
      "I needed a portfolio that reads like a senior engineer's — a real directory of work with proper case studies, not a template.",
    approach:
      "I designed a full design system and built the site with a typed content model, a filterable work directory and per-project case studies generated statically.",
    architecture: [
      "Next.js 16 App Router, React 19, TypeScript, Tailwind v4 — static export.",
      "Typed content model: add a project by appending one object.",
      "Filterable /work directory and generated /work/[slug] case studies.",
      "SEO, Open Graph, sitemap, robots and JSON-LD; deployed on Vercel.",
    ],
    highlights: [
      "A real work directory with full case studies.",
      "One-file content model; fast, accessible, SEO-ready.",
    ],
    impact: [
      { value: "Directory", label: "Full case studies" },
      { value: "<1s", label: "Static & fast" },
    ],
    media: [],
  },
];

/* --------------------------- Derived helpers ---------------------------- */

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectTags = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
];

/* ----------------------------- Testimonials ----------------------------- */

export type Testimonial = { quote: string; author: string; title: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Choose SMP for dedication to delivering innovative, tailored solutions that meet your unique needs. With expertise in software development, tech consulting and youth empowerment, he brings a proven track record of impactful results.",
    author: "Why clients choose SMP",
    title: "Software development · Tech consulting · Community impact",
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
  domain: "smp-developers.com",
  title: `${profile.name} (SMP) — ${profile.role}`,
  description: profile.valueProp,
} as const;
