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
  {
    slug: "smp-microfinance-app",
    title: "SMP Microfinance App",
    summary:
      "A mobile microfinance platform — SMP Credits — that lets youth earn, save and invest, promoting financial independence.",
    type: "Product",
    year: "2024",
    role: "Software engineering & product",
    stack: ["Android", "iOS", "PHP / Laravel", "MySQL", "Payments"],
    tags: ["Mobile", "Systems", "Fintech"],
    featured: true,
    cover: { from: "from-gold-500", to: "to-gold-700", initials: "SMP" },
    links: {},
    problem:
      "Many young people lack access to simple, trustworthy tools to save, invest and build credit. Traditional finance is out of reach or intimidating, so good financial habits never start.",
    approach:
      "I designed SMP Credits as a mobile-first microfinance platform that makes earning, saving and investing approachable — paired with financial-literacy content so users learn as they go. The system handles member accounts, contributions and disbursements with clear, friendly UX.",
    architecture: [
      "Native mobile experience for Android and iOS users.",
      "PHP/Laravel backend with a MySQL data layer for members, savings and transactions.",
      "Payment and mobile-money integration for contributions and payouts.",
      "Admin tooling for the SACCO/microfinance team to manage members and reporting.",
    ],
    highlights: [
      "Made saving and investing genuinely accessible to first-time users.",
      "Combined fintech with financial education in one product.",
      "Built to serve real community groups, not just a demo.",
    ],
    impact: [
      { value: "Fintech", label: "Earn · save · invest" },
      { value: "Mobile", label: "Android & iOS" },
      { value: "Youth", label: "Financial inclusion" },
    ],
    media: [],
  },
  {
    slug: "junior-sports-world",
    title: "Junior Sports World",
    summary:
      "An e-commerce store for sportswear — catalogue, cart and checkout for a growing retail brand.",
    type: "Client project",
    year: "2024",
    role: "Design & development",
    stack: ["WordPress", "WooCommerce", "PHP", "Payments"],
    tags: ["Ecommerce", "Websites"],
    featured: true,
    cover: { from: "from-navy-600", to: "to-navy-900", initials: "JSW" },
    links: {},
    problem:
      "A sportswear brand needed to sell online with a storefront that could showcase products and take payments reliably.",
    approach:
      "I built a WooCommerce store with a clean product catalogue, categories and a smooth checkout, set up to be easy for the team to manage day-to-day.",
    architecture: [
      "WordPress + WooCommerce storefront with a custom-styled theme.",
      "Product catalogue, variants, cart and secure checkout.",
      "Payment gateway integration and order management.",
    ],
    highlights: [
      "A retail-ready online store the client can run themselves.",
      "Mobile-friendly shopping experience.",
    ],
    impact: [
      { value: "Ecommerce", label: "Online store + payments" },
      { value: "Live", label: "Retail brand" },
    ],
    media: [],
  },
  {
    slug: "dennis-wamalwa",
    title: "Commissioner Dennis Wamalwa",
    summary:
      "A public-figure website for a commissioner — profile, initiatives and a channel to reach constituents.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["Websites", "Politics"],
    featured: true,
    cover: { from: "from-navy-700", to: "to-navy-900", initials: "DW" },
    links: {},
    problem:
      "A public figure needed a credible online presence to share their work, values and initiatives with the public.",
    approach:
      "I designed a dignified, trustworthy website presenting the commissioner's profile, priorities and updates, with clear ways for people to get in touch.",
    architecture: [
      "WordPress + Elementor for easy content updates.",
      "Profile, initiatives and news sections.",
      "Contact and engagement channels.",
    ],
    highlights: [
      "A professional, credible presence for a public leader.",
      "Editable by the team without a developer.",
    ],
    impact: [
      { value: "Public", label: "Leadership presence" },
      { value: "Live", label: "Constituent reach" },
    ],
    media: [],
  },
  {
    slug: "talitha-kum",
    title: "Talitha Kum International",
    summary:
      "A website for an international NGO — mission, programmes and outreach across a global network.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["NGO", "Websites"],
    featured: true,
    cover: { from: "from-gold-600", to: "to-navy-800", initials: "TK" },
    links: {},
    problem:
      "An international NGO needed a clear, welcoming website to communicate its mission and coordinate outreach.",
    approach:
      "I built an accessible, content-rich site that tells the organisation's story and supports its programmes and network.",
    architecture: [
      "WordPress + Elementor with a structured content model.",
      "Programme, story and contact sections.",
      "Mobile-first, accessible layout.",
    ],
    highlights: [
      "A polished home for a global mission.",
      "Straightforward for staff to update.",
    ],
    impact: [
      { value: "NGO", label: "Global network" },
      { value: "Live", label: "Mission outreach" },
    ],
    media: [],
  },
  {
    slug: "ruaka-golden-star",
    title: "Ruaka Golden Star",
    summary: "A school website — admissions, programmes and information for parents and students.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["School", "Websites"],
    cover: { from: "from-navy-600", to: "to-navy-900", initials: "GS" },
    links: {},
    problem:
      "A school needed an online presence to share information and attract admissions.",
    approach:
      "I built a friendly, informative school website covering programmes, admissions and news.",
    architecture: [
      "WordPress + Elementor, easy for staff to maintain.",
      "Programmes, admissions and contact sections.",
    ],
    highlights: ["A welcoming digital front door for the school."],
    impact: [
      { value: "School", label: "Admissions & info" },
      { value: "Live", label: "Parent-friendly" },
    ],
    media: [],
  },
  {
    slug: "jobe-wisdom-academy",
    title: "Jobe Wisdom Academy",
    summary: "A school website presenting the academy's programmes, values and admissions.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["School", "Websites"],
    cover: { from: "from-navy-700", to: "to-navy-900", initials: "JW" },
    links: {},
    problem: "An academy needed a professional website to inform families and support enrolment.",
    approach: "I designed and built a clear, welcoming site around the academy's programmes and values.",
    architecture: ["WordPress + Elementor.", "Programmes, values and admissions sections."],
    highlights: ["A credible, easy-to-update school site."],
    impact: [
      { value: "School", label: "Programmes & enrolment" },
      { value: "Live", label: "Family-focused" },
    ],
    media: [],
  },
  {
    slug: "nahusom-kenya",
    title: "Nahusom Kenya",
    summary: "A website for an NGO — sharing its mission, work and ways to get involved.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["NGO", "Websites"],
    cover: { from: "from-gold-500", to: "to-navy-800", initials: "NK" },
    links: {},
    problem: "An NGO needed an online home to communicate its work and reach supporters.",
    approach: "I built a clear, mission-first website with the content and structure the organisation needed.",
    architecture: ["WordPress + Elementor.", "Mission, work and contact sections."],
    highlights: ["A clean, purposeful NGO presence."],
    impact: [
      { value: "NGO", label: "Mission & outreach" },
      { value: "Live", label: "Supporter reach" },
    ],
    media: [],
  },
  {
    slug: "primex-brands-kenya",
    title: "Primex Brands Kenya",
    summary: "A business website for a Kenyan brand — presenting products and services online.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["Websites"],
    cover: { from: "from-navy-600", to: "to-navy-900", initials: "PB" },
    links: {},
    problem: "A brand needed a professional website to present its products and reach customers.",
    approach: "I designed and built a modern business site around the brand's offering.",
    architecture: ["WordPress + Elementor.", "Products, services and contact sections."],
    highlights: ["A polished, conversion-minded business site."],
    impact: [
      { value: "Brand", label: "Products & services" },
      { value: "Live", label: "Customer reach" },
    ],
    media: [],
  },
  {
    slug: "esambo-media",
    title: "Esambo Media",
    summary: "A media-house website with streaming — content, shows and live media online.",
    type: "Client project",
    year: "2023",
    role: "Design & development",
    stack: ["WordPress", "Streaming", "PHP"],
    tags: ["Media", "Websites"],
    cover: { from: "from-navy-700", to: "to-gold-700", initials: "EM" },
    links: {},
    problem: "A media house needed a home for its content and a way to stream to its audience.",
    approach: "I built a media website with streaming so the audience can watch and engage online.",
    architecture: ["WordPress with streaming integration.", "Shows, content and live sections."],
    highlights: ["Brought a media brand online with live streaming."],
    impact: [
      { value: "Media", label: "Content + streaming" },
      { value: "Live", label: "Audience reach" },
    ],
    media: [],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary: "A personal portfolio site — showcasing work, profile and a way to get in touch.",
    type: "Personal",
    year: "2024",
    role: "Design & development",
    stack: ["WordPress", "Elementor", "PHP"],
    tags: ["Portfolio", "Websites"],
    cover: { from: "from-gold-500", to: "to-gold-700", initials: "PF" },
    links: {},
    problem: "I needed a professional home to showcase my work and expertise.",
    approach: "I built a portfolio presenting my services, projects and profile — the foundation this site now upgrades.",
    architecture: ["WordPress + Elementor portfolio.", "Works, resume and contact sections."],
    highlights: ["A personal brand hub — now rebuilt with a modern stack."],
    impact: [
      { value: "Personal", label: "Brand & showcase" },
      { value: "Live", label: "Online presence" },
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
