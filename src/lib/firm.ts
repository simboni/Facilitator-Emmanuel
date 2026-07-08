// ---------------------------------------------------------------------------
// Single source of truth for Misiati & Associates.
// All firm details come from the client's Website Information Request Form.
// Update values here and they flow through every page.
// ---------------------------------------------------------------------------

export const firm = {
  name: "Misiati & Associates",
  legalName: "Misiati & Associates, Certified Public Accountants of Kenya",
  tagline: "Certified Public Accountants of Kenya",
  shortPitch:
    "Trusted audit, tax and advisory services for businesses, schools, SACCOs and organisations across Kenya.",
  established: 2024,
  yearsExperience: 25, // Managing partner's practice experience
  clientsServed: "100+",

  // Registration & credentials (build trust)
  credentials: {
    icpakMemberNo: "10286",
    practicingNo: "PF/1330",
    firmLicenceNo: "M/0087",
  },

  managingPartner: {
    name: "CPA John Simboni Misiati",
    role: "Managing Partner",
    education: "O'Level (Form Four)",
    qualifications: [
      "Diploma in Cooperative Management — Cooperative College of Kenya",
      "Certified Public Accountant of Kenya (CPA-K) — KASNEB",
      "Member, Institute of Certified Public Accountants of Kenya (ICPAK)",
    ],
    experience: [
      "Manager, Bungoma Teachers Savings & Cooperative Society — 16 years",
      "Tax consultancy, accounting & business advisory — 25 years",
    ],
    bio: "CPA John Simboni Misiati leads the firm with more than 25 years of hands-on experience in tax, accounting and business advisory. Before founding the practice he served for 16 years as Manager of Bungoma Teachers Savings & Cooperative Society, giving him deep, practical insight into the finances of cooperatives, schools and growing businesses across Kenya.",
  },

  mission:
    "To provide quality services to customers based on integrity, objectivity, honesty and focused customer satisfaction.",

  history:
    "The firm grew out of Josimi Consultancy Services, a practice run by our managing partner for more than 25 years, offering business advisory, tax services and tax returns. In 2024 that experience was formalised into Misiati & Associates, a fully licensed CPA firm — broadening our services into audit, assurance and a complete range of accountancy support while keeping the same personal, dependable approach our clients have always known.",

  differentiators: [
    {
      title: "Decades of experience",
      body: "More than 25 years of practical accounting and tax experience behind every engagement.",
    },
    {
      title: "Personal service",
      body: "You deal directly with people who know your business — not a call centre.",
    },
    {
      title: "Affordable fees",
      body: "Fair, transparent pricing suited to businesses and organisations of every size.",
    },
    {
      title: "Modern & tech-ready",
      body: "We adapt quickly to changes in the industry, from eTIMS to digital filing on iTax.",
    },
  ],

  contact: {
    email: "jsmisiati@gmail.com",
    proposedEmail: "info@misiatiassociates.co.ke",
    postal: "P.O. Box 341-50200, Bungoma",
    phones: ["0725026442", "0739375977", "0720379782", "0721463809"],
    whatsapp: "0725026442",
    // International format for wa.me links (Kenya +254, drop leading 0)
    whatsappIntl: "254725026442",
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
      { days: "Saturday", time: "8:00 AM – 1:00 PM" },
      { days: "Sunday & Public Holidays", time: "Closed" },
    ],
  },

  offices: [
    {
      name: "Bungoma Town Office",
      address: "Chewai Plaza, Bungoma Town",
      landmark: "Next to the Mosque / Adatia Wholesalers",
      mapsQuery: "Chewai Plaza, Bungoma, Kenya",
    },
    {
      name: "Sang'alo Office",
      address: "Sang'alo Junction, off Mumias Road",
      landmark: "2 km from the Bungoma–Mumias Road",
      mapsQuery: "Sang'alo Junction, Mumias Road, Bungoma, Kenya",
    },
  ],

  domain: "misiatiassociates.co.ke",
} as const;

// ---------------------------------------------------------------------------
// Core services (plain language). `slug` used for anchors on the services page.
// `featured` services are highlighted on the home page.
// ---------------------------------------------------------------------------
export type Service = {
  slug: string;
  title: string;
  summary: string;
  featured?: boolean;
  icon: string; // key mapped to an SVG icon in components/icons
};

export const services: Service[] = [
  {
    slug: "external-audit",
    title: "External & Statutory Audits",
    summary:
      "Independent audit of your financial statements that satisfies regulators, banks, donors and boards — carried out to professional ICPAK standards.",
    featured: true,
    icon: "shield",
  },
  {
    slug: "tax-returns",
    title: "Tax Returns Filing",
    summary:
      "Accurate, on-time filing of individual, partnership and company returns on KRA iTax — so you stay compliant and avoid penalties.",
    featured: true,
    icon: "document",
  },
  {
    slug: "objections-appeals",
    title: "Tax Objections & Appeals",
    summary:
      "We challenge incorrect KRA assessments on your behalf — preparing objections and appeals to protect you from unfair tax demands.",
    featured: true,
    icon: "scale",
  },
  {
    slug: "etims",
    title: "eTIMS Management",
    summary:
      "Set-up, onboarding and day-to-day management of KRA eTIMS electronic invoicing, keeping your business fully compliant.",
    featured: true,
    icon: "receipt",
  },
  {
    slug: "internal-audit",
    title: "Internal Audits",
    summary:
      "Reviews of your systems and controls that uncover risks, prevent loss and strengthen how your organisation is run.",
    icon: "search",
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping & Accounts",
    summary:
      "Well-kept books and up-to-date accounts that give you a clear, reliable picture of your finances all year round.",
    icon: "book",
  },
  {
    slug: "financial-statements",
    title: "Financial Statements Preparation",
    summary:
      "Professionally prepared financial statements ready for lenders, tenders, regulators and annual reporting.",
    icon: "chart",
  },
  {
    slug: "payroll",
    title: "Payroll Services",
    summary:
      "Complete payroll processing including PAYE, NHIF, NSSF and Housing Levy — paid and filed correctly, every month.",
    icon: "users",
  },
  {
    slug: "kra-pin",
    title: "KRA PIN & Registration",
    summary:
      "Fast KRA PIN registration and business registration support to get you set up and trading properly.",
    icon: "id",
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    summary:
      "Practical advice on budgeting, growth, financing and strategy — drawing on decades of local business knowledge.",
    icon: "lightbulb",
  },
  {
    slug: "bq-preparation",
    title: "Bills of Quantity Preparation",
    summary:
      "Detailed Bills of Quantity for contractors and construction projects, prepared to support tenders and cost control.",
    icon: "building",
  },
  {
    slug: "proposals-budgeting",
    title: "Project Proposals & Budgeting",
    summary:
      "Fundable project proposals and budgets for NGOs, CBOs and self-help groups seeking donor and grant support.",
    icon: "clipboard",
  },
];

// ---------------------------------------------------------------------------
// Industries served (with what each client typically gets).
// ---------------------------------------------------------------------------
export type Industry = {
  slug: string;
  title: string;
  clients: string;
  services: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    clients: "Contractors & builders",
    services:
      "Bills of Quantity preparation, tax administration, internal & external audits.",
    icon: "building",
  },
  {
    slug: "education",
    title: "Education",
    clients: "Schools & institutions",
    services: "Tax consultancy, internal & external audits.",
    icon: "cap",
  },
  {
    slug: "pbo",
    title: "Public Benefit Organisations",
    clients: "NGOs, CBOs & self-help groups",
    services:
      "Project proposals, budgeting, tax consultancy, internal & external audits.",
    icon: "hands",
  },
  {
    slug: "business",
    title: "Business Community",
    clients: "Individuals, partnerships & companies",
    services: "Tax consultancy, internal & external audits.",
    icon: "briefcase",
  },
  {
    slug: "cooperatives",
    title: "Cooperatives",
    clients: "SACCOs & farmers' societies",
    services: "Tax consultancy, internal & external audits.",
    icon: "users",
  },
];

// ---------------------------------------------------------------------------
// Team members (beyond the managing partner).
// ---------------------------------------------------------------------------
export const team = [
  {
    name: "Lazarus Onjala",
    role: "Audit Assistant & Tax Consulting Assistant",
    initials: "LO",
  },
  {
    name: "Phillip Makhatsa Misiati",
    role: "Business Consultant & Strategic Planning Officer",
    initials: "PM",
  },
  {
    name: "Peter Simboni Misiati",
    role: "Finance Advisory Services & ICT",
    initials: "PS",
  },
  {
    name: "Jentrix Norah Misiati",
    role: "Executive Officer, Operations",
    initials: "JN",
  },
];

// ---------------------------------------------------------------------------
// Testimonials & notable clients (published with permission per the brief).
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "Misiati & Associates handled our audits and tax matters professionally and on time. Their team is knowledgeable, approachable and truly reliable.",
    author: "Nalbar Construction Company Limited",
    role: "Construction",
  },
  {
    quote:
      "Dependable, thorough and always available when we need advice. They understand our operations and give us confidence in our numbers.",
    author: "Appex Hospital, Malaba",
    role: "Healthcare",
  },
];

export const notableClients = [
  "Nalbar Construction Company Ltd",
  "Appex Hospital — Malaba",
  "St. Charles Lwanga Secondary School",
];

// Navigation used by header and footer.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
