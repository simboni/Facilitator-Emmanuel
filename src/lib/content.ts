/* ============================================================================
   FACILITATOR MISIATI — single source of truth for every word on the site.
   Edit this file to change content; the pages render whatever lives here.
   ========================================================================== */

export const site = {
  name: "Facilitator Misiati",
  // The live base URL — drives canonical links, sitemap, JSON-LD and the social
  // share-card (Open Graph) image URL. Currently the Render host; change to the
  // custom domain (e.g. facilitatormisiati.com) once it's pointed at the site.
  domain: "facilitator-misiati.onrender.com",
  title: "Emmanuel Misiati — Facilitator, Program Strategist & Community Development Practitioner",
  description:
    "Emmanuel Misiati partners with organizations, networks and groups to design high-impact learning experiences, facilitate complex conversations and build community-driven systems that deliver lasting results. Nairobi, Kenya.",
};

export const profile = {
  name: "Emmanuel Misiati",
  fullName: "Emmanuel Marumbu Misiati",
  brand: "Facilitator Misiati",
  role: "Facilitator · Program Strategist · Community Development Practitioner",
  roleShort: "Facilitator & Program Strategist",
  location: "Nairobi, Kenya",
  reach: "Working across Kenya, East Africa & globally",
  email: "facilitatormisiati@gmail.com",
  phone: "+254707136869",
  phoneDisplay: "+254 707 136 869",
  whatsapp:
    "https://wa.me/254707136869?text=" +
    encodeURIComponent(
      "Hi Emmanuel, I'd like to talk about facilitation for an upcoming programme or event.",
    ),
  linkedin: "https://www.linkedin.com/in/emmanuel-misiati-262571143",
  responsePromise: "Replies within one business day",

  // The line the whole brand rests on
  tagline:
    "Creating structured, caring spaces where individuals learn, connect and lead with confidence.",

  // Hero
  heroKicker: "Facilitator · Program Strategist · Community Development",
  heroHeadline: ["Build capacity.", "Drive engagement.", "Structure impact."],
  heroLede:
    "I partner with organizations, networks and groups to design high-impact learning experiences, facilitate complex conversations, and build community-driven systems that deliver lasting results.",

  intro:
    "I am an engagement and experiential facilitator who finds fulfilment in helping people learn, connect and grow in fun, meaningful ways.",
  bio: [
    "I am passionate about creating spaces where people can learn, grow and lead with confidence. Over the past four years I have coordinated and facilitated programmes that combine structure with care — supporting youth and professionals across Kenya to build skills and community.",
    "From programmes to group engagements — summits, conferences, focus-group discussions and everywhere people gather — I use engaging activities and approaches that encourage participation and the retention of content. My strength lies in connecting people, organizing systems that work, and making sure every participant has a meaningful, transformative experience.",
    "Grounded in a formal foundation in Community Development and sharpened by certified training in facilitation, mediation and training-of-trainers, I bring rigorous structure and genuine care to every room I hold.",
  ],
  pitch:
    "Whether it is an intimate focus group or a summit of thousands, my job is the same: hold the room with structure and care, so people leave having learned, connected and moved something forward.",
};

/* Headline impact — verified across Busara, Taifa Teule, Osotwa & Shiriki */
export const stats = [
  { value: 300, suffix: "+", label: "Facilitators trained", note: "across 20 locations" },
  { value: 1500, suffix: "+", label: "Conference attendees engaged", note: "at large-scale events" },
  { value: 500, suffix: "+", label: "Youth in civic dialogues", note: "in-person & online" },
  { value: 5, prefix: "KSh ", suffix: "M+", label: "Programme & donor funding raised", note: "operational leadership" },
];

/* The three pillars — the spine of the whole site */
export type Pillar = {
  no: string;
  name: string;
  summary: string;
  points: { title: string; body: string }[];
};

export const pillars: Pillar[] = [
  {
    no: "01",
    name: "Programs Facilitation",
    summary:
      "Designing, scaling and delivering structured learning and leadership-development frameworks — curriculum-driven environments where participants gain practical skills, retain what matters and step into leadership.",
    points: [
      {
        title: "Facilitator systems & mentorship",
        body: "Designed training architecture that equipped 300+ facilitators, indirectly impacting 3,000+ youth across 20 locations. Personally trained and mentored 100+ youth through direct delivery.",
      },
      {
        title: "Professional development & executive skills",
        body: "Co-delivered flagship facilitation-skills programmes for 70+ professionals and designed executive-functioning training tailored for young creatives.",
      },
      {
        title: "Curriculum design & training of trainers",
        body: "NITA-certified Trainer of Trainers, skilled in documenting training modules, leading 10-week leadership initiatives and building volunteer execution capacity.",
      },
    ],
  },
  {
    no: "02",
    name: "Engagement Facilitation",
    summary:
      "Curating room dynamics, moderating panels and guiding participatory problem-solving — from intimate focus groups to summit stages of thousands, bringing structured clarity to group dynamics.",
    points: [
      {
        title: "Large-scale event & conference curation",
        body: "Coordinated participant experience and engagement logistics for major conferences with a combined 1,500+ attendees.",
      },
      {
        title: "Panel moderation & civic dialogue",
        body: "Moderated 40+ dialogue sessions on complex social, economic and political issues, engaging 500+ youth in meaningful conversation.",
      },
      {
        title: "Mediation & group consensus",
        body: "Certified Professional Mediator using structured dispute-resolution tools to bridge communication gaps, manage friction and drive collective decisions.",
      },
    ],
  },
  {
    no: "03",
    name: "Community Development",
    summary:
      "Mobilizing resources, co-creating governance structures and building resilient community networks — grounded in formal community-development training and inclusive, sustainable systems.",
    points: [
      {
        title: "Operational & resource leadership",
        body: "Led organizational operations, raising KSh 5M+ in programme and donor support while scaling volunteer execution teams from 3 to 15.",
      },
      {
        title: "Grassroots outreach & social impact",
        body: "Coordinated health outreach serving 100+ children, managed food assistance for 3,000+ families and expanded student-sponsorship access.",
      },
      {
        title: "Youth governance & strategic guidance",
        body: "Co-Chair of a regional youth Board of Stewards, designing cross-cultural governance frameworks and guiding climate-leadership fellowship recruitment across East Africa.",
      },
    ],
  },
];

/* Methodology — three principles every session is built on */
export const methodology = [
  {
    no: "01",
    name: "Structure with Care",
    body: "Rigorous agenda design, clear logistics and defined outcomes — held together with psychological safety and genuine participant care.",
  },
  {
    no: "02",
    name: "Experiential Learning",
    body: "Moving away from passive lecturing to active participation, practical exercises and high content retention.",
  },
  {
    no: "03",
    name: "Bridge-Building",
    body: "Connecting diverse stakeholders — youth, corporate leaders and community members — through active listening and certified mediation strategies.",
  },
];

/* Service lines offered */
export const services = [
  {
    title: "Event Facilitation & Panel Moderation",
    body: "MC, host and moderator for conferences, summits, fireside chats and focus groups — keeping the agenda moving, the panel sharp and the room engaged.",
  },
  {
    title: "Facilitator Development & Training of Trainers",
    body: "NITA-certified ToT programmes, facilitation-skills training and mentorship systems that equip teams to deliver at scale.",
  },
  {
    title: "Program & Curriculum Design",
    body: "Structured, curriculum-driven learning journeys — from single workshops to multi-week leadership initiatives — designed for retention and impact.",
  },
  {
    title: "Community Engagement & Governance Consulting",
    body: "Community-engagement strategy, participatory frameworks and governance structures that build resilient, self-sustaining networks.",
  },
];

/* Optional fixed-rate event hosting packages (secondary offering) */
export type Tier = {
  slug: string;
  name: string;
  tagline: string;
  price: number; // KES
  priceNote: string;
  popular?: boolean;
  includes: string[];
};

export const tiers: Tier[] = [
  {
    slug: "event-host",
    name: "Event Host",
    tagline: "A safe pair of hands on the mic, start to finish.",
    price: 25000,
    priceNote: "per event day",
    includes: [
      "Full-day stage hosting",
      "Speaker introductions",
      "Housekeeping",
      "Agenda management",
    ],
  },
  {
    slug: "host-facilitator",
    name: "Host + Facilitator",
    tagline: "Hosting plus the energy work — the room stays with you.",
    price: 35000,
    priceNote: "per event day",
    popular: true,
    includes: [
      "Everything in Event Host",
      "Audience engagement & energizers",
      "Moderation of panels, fireside chats & Q&A",
    ],
  },
  {
    slug: "full-event-partner",
    name: "Full Event Partner",
    tagline: "From pre-event strategy to post-event report.",
    price: 57500,
    priceNote: "per event day",
    includes: [
      "Everything in Host + Facilitator",
      "Pre-event consultation & run-of-show design",
      "Post-event report & debrief",
    ],
  },
];

/* Real career — the experience timeline */
export type Role = {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  logo?: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: "Programs & Content Design Lead",
    org: "Busara Empowerment Organization",
    period: "Jan 2026 — Present",
    current: true,
    summary:
      "Developing and documenting the organization's programmes and projects, running the monthly newsletter and guiding content design across its channels.",
    highlights: [
      "Owns programme documentation and content architecture",
      "Guides social-media and website content strategy",
    ],
  },
  {
    title: "Co-Chair, Board of Stewards",
    org: "The Resilience Project",
    period: "2025 — Present",
    current: true,
    logo: "/images/logos/resilience-project.webp",
    summary:
      "Leading board convening sessions and providing strategic guidance on programme design and alignment with regional youth needs across East Africa.",
    highlights: [
      "Helped recruit 16 climate leaders from East Africa for the fellowship",
      "Contributed to the programme's launch and early implementation",
    ],
  },
  {
    title: "Senior Lead Facilitator",
    org: "Osotwa",
    period: "Aug 2024 — Present",
    current: true,
    logo: "/images/logos/osotwa.webp",
    summary:
      "Co-designing professional-development programmes in facilitation and leadership, managing logistics and delivering training for professionals and creatives.",
    highlights: [
      "Co-delivered 2 flagship facilitation programmes reaching 70+ professionals",
      "Designed Executive Functioning Skills training for 50 young creatives",
      "Coordinated engagement support for 3 conferences with 1,500+ combined attendees",
    ],
  },
  {
    title: "Executive Facilitator & Board Member",
    org: "Taifa Teule Network",
    period: "Jan 2021 — Present",
    current: true,
    logo: "/images/logos/taifa-teule-network.webp",
    summary:
      "Leading the Facilitator Development team, supporting the 10-week flagship leadership programme and contributing to organizational growth and scaling.",
    highlights: [
      "Designed facilitator systems that equipped 300+ facilitators",
      "Supported facilitators who impacted 3,000+ youth nationally",
      "Grew volunteer teams from 50 to 150+ per cohort across 20 locations",
    ],
  },
  {
    title: "Co-Lead & Senior Facilitator",
    org: "Shiriki",
    period: "Jan 2021 — Present",
    current: true,
    logo: "/images/logos/shiriki.webp",
    summary:
      "Designing youth civic-engagement programmes, facilitating dialogue on political, economic and social issues and growing community participation.",
    highlights: [
      "Facilitated 40+ civic-engagement sessions, in-person and online",
      "Engaged 500+ youth in meaningful discussions",
      "Grew Shiriki from inception to 300+ members",
    ],
  },
  {
    title: "Engagement Coordinator",
    org: "Team Safi",
    period: "2024 — Present",
    current: true,
    summary:
      "Developing participatory approaches for impactful civic engagement across age groups, and moderating panels and conversations for small and large groups.",
    highlights: [
      "Designed civic-engagement activities across diverse age groups",
      "Moderated panels for small and large-group civic discussions",
    ],
  },
  {
    title: "Community Engagement Director",
    org: "KEAN International",
    period: "Jan 2024 — Dec 2024",
    logo: "/images/logos/kean.webp",
    summary:
      "Designed and delivered a strategic community-engagement framework, managing onboarding, member engagement and activity planning.",
    highlights: [
      "Facilitated 20+ online sessions and 3 in-person engagements",
      "Built consistent weekly engagement for 50+ members",
      "Organized the network's first in-person team-building event",
    ],
  },
  {
    title: "Chief Operations Officer",
    org: "Busara Empowerment Organization",
    period: "Jan 2023 — Jan 2025",
    summary:
      "Oversaw day-to-day programme execution across education, health and community support, plus donor management, volunteer recruitment and reporting.",
    highlights: [
      "Raised KSh 5M+ in programme and donor support",
      "Expanded student sponsorship from 3 to 10 beneficiaries",
      "Health outreach for 100+ children; food support for 3,000+ families",
      "Grew the volunteer team from 3 to 15",
    ],
  },
];

/* Featured engagement highlights (with photography) */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Summit" | "Founder ecosystem" | "Youth & community";
  year: string;
  role: string;
  impact: string;
  images: { src: string; alt: string }[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "weconnect-africa-summit",
    title: "WEConnect in Africa Summit",
    client: "WEConnect International",
    category: "Summit",
    year: "2026",
    role: "Managed a multi-day, multi-stakeholder summit involving East African exporters, government and institutional players, global buyers and ecosystem stakeholders.",
    impact:
      "Maintained seamless chronological flow across multiple keynotes and panels while driving engagement. Tailored energizers and mindful transitions kept the audience connected to the theme from opening to closing.",
    images: [
      { src: "/images/events/weconnect-1.webp", alt: "WEConnect summit delegates group photo on a rooftop terrace" },
      { src: "/images/events/weconnect-6.webp", alt: "Emmanuel Misiati on the mic at the WEConnect summit podium" },
      { src: "/images/events/weconnect-2.webp", alt: "Delegates applauding during a WEConnect session" },
      { src: "/images/events/weconnect-4.webp", alt: "Networking on the summit floor" },
    ],
    featured: true,
  },
  {
    slug: "accelerateher-summit",
    title: "AccelerateHER 2.0 Trade Summit",
    client: "CBI Women's Economic Empowerment Program",
    category: "Summit",
    year: "2026",
    role: "Primary MC, facilitator and voice for the high-energy summit on women's leadership, entrepreneurship and acceleration — managing event flow, speaker introductions and transitions.",
    impact:
      "Facilitated keynotes and breakout sessions that kept delegates aligned, engaged and moving toward collaborative strategic outcomes.",
    images: [
      { src: "/images/events/accelerateher-1.webp", alt: "AccelerateHER 2.0 delegates group photo" },
      { src: "/images/events/accelerateher-2.webp", alt: "Emmanuel Misiati hosting on the AccelerateHER stage" },
      { src: "/images/events/accelerateher-3.webp", alt: "Delegates on their feet during an interactive session" },
    ],
    featured: true,
  },
  {
    slug: "founders-exchange",
    title: "Monthly Founders Gathering",
    client: "SME Founders Association",
    category: "Founder ecosystem",
    year: "Ongoing",
    role: "Facilitating high-energy entrepreneurial-ecosystem events from planning to execution — balancing community building with corporate dynamics.",
    impact:
      "Ensured flawless executions, clear protocols and a welcoming atmosphere for high-calibre founders and professionals, every month.",
    images: [
      { src: "/images/events/founders-1.webp", alt: "Emmanuel Misiati facilitating a Founders Exchange session" },
      { src: "/images/events/founders-2.webp", alt: "Founders celebrating with message paddles at a gathering" },
      { src: "/images/events/founders-4.webp", alt: "Founders Exchange group photo outside the venue" },
    ],
    featured: true,
  },
  {
    slug: "youth-engagement",
    title: "Youth Civic Engagement",
    client: "Mzalendo Trust · Generation Mental Health · Greenpeace Africa",
    category: "Youth & community",
    year: "2021 — present",
    role: "Curating activities that draw curiosity, spark engagement and create memorability — from icebreakers and energizers to context-framing techniques for young audiences.",
    impact:
      "Highlights include policy-brief presentations with Mzalendo Trust, the Generation Mental Health Summit and the Greenpeace International global team engagement 2025 — plus 500+ youth engaged through Shiriki civic dialogues.",
    images: [
      { src: "/images/events/youth-1.webp", alt: "Young participants presenting policy briefs at Mzalendo Trust" },
      { src: "/images/events/youth-4.webp", alt: "Emmanuel Misiati leading an outdoor session with a youth group" },
      { src: "/images/events/youth-3.webp", alt: "Large youth cohort gathered in a bamboo grove" },
    ],
    featured: true,
  },
];

/* Organizations worked with / trusted by */
export const clients: { name: string; logo?: string }[] = [
  { name: "Osotwa", logo: "/images/logos/osotwa.webp" },
  { name: "Taifa Teule Network", logo: "/images/logos/taifa-teule-network.webp" },
  { name: "Busara Empowerment Organization" },
  { name: "KEAN International", logo: "/images/logos/kean.webp" },
  { name: "Shiriki", logo: "/images/logos/shiriki.webp" },
  { name: "The Resilience Project", logo: "/images/logos/resilience-project.webp" },
  { name: "SME Founders Association", logo: "/images/logos/sme-founders.webp" },
  { name: "WEConnect International" },
  { name: "Mzalendo Trust", logo: "/images/logos/mzalendo.webp" },
  { name: "Greenpeace Africa", logo: "/images/logos/greenpeace.webp" },
  { name: "PassionProfit", logo: "/images/logos/passionprofit.webp" },
  { name: "Wakilisha", logo: "/images/logos/wakilisha.webp" },
  { name: "Maisha Yangu", logo: "/images/logos/maisha-yangu.webp" },
  { name: "Team Safi" },
  { name: "Generation Mental Health" },
];

export const testimonials = [
  {
    quote:
      "You have earned yourself my favourite Moderator Award! You were professional, adaptable and a great pleasure to work with. You brought the WEConnect International in Africa Summit to life — thank you so much! Looking forward to more adventures.",
    name: "Frida Owinga",
    title: "Founder, PassionProfit · SME Founder & Ecosystem Builder",
  },
  {
    quote:
      "Your facilitation skills are top-notch. It was a great pleasure listening to you during the summit.",
    name: "Ben Kimani",
    title: "Founder & CEO, Stratium Research & Consulting",
  },
  {
    quote:
      "A session for youth, by youth and with the youth in mind! It's always fun working with you, Misiati. Impact, insights and findings need not be boring — and this session was a testament to that.",
    name: "Benjamin Mwamburi",
    title: "Advocate · Programs Coordinator, Mzalendo Trust",
  },
  {
    quote: "You gave us positive energy for two full days.",
    name: "Khadija Nankanja",
    title: "Founder & Executive Director, Community Women's Enterprise Network Uganda",
  },
];

/* Formal qualifications & accreditations */
export const qualifications = [
  { title: "B.A. Community Development", org: "Africa Nazarene University", year: "2019 — 2025" },
  { title: "Diploma, Church & Community Mobilization Process", org: "Global University for Life-Long Learning", year: "2022" },
  { title: "Certified Professional Mediator", org: "Amani Communities Africa", year: "" },
  { title: "Certified Trainer of Trainers (ToT)", org: "National Industrial Training Authority (NITA)", year: "" },
  { title: "Mental Health First Aid", org: "Certified", year: "" },
  { title: "Taifa Teule Leadership Experience", org: "Graduate", year: "" },
];

export const skills = [
  "Program coordination & management",
  "Experiential training & facilitation",
  "Panel moderation & mediation",
  "Stakeholder & partner engagement",
  "Curriculum & content design",
  "Event & workshop logistics",
  "Strategic planning & systems",
  "Monitoring & evaluation",
  "Fundraising & donor engagement",
  "Recruitment & outreach",
];

/* References (from the CVs) */
export const references = [
  {
    name: "Andrew G. Ranja",
    title: "Founder & Executive Director, Taifa Teule Network",
    relationship: "Team Lead",
  },
  {
    name: "Joy Thuo",
    title: "Founder & CEO, Osotwa",
    relationship: "Team Lead",
  },
  {
    name: "Iffat Omar",
    title: "Founder & CEO, Busara Empowerment Organization",
    relationship: "Former Employer",
  },
];

export const faq = [
  {
    q: "What kinds of engagements do you take on?",
    a: "Three main areas: facilitating programmes and training (including Training of Trainers), curating and moderating events — from focus groups to summits of thousands — and community-development and governance consulting. If people need to learn, decide or connect, that's my work.",
  },
  {
    q: "Do you travel outside Nairobi?",
    a: "Yes — I work across Kenya, the wider East Africa region and virtually. For engagements outside Nairobi, the client covers transport and accommodation.",
  },
  {
    q: "Can you design a full programme, not just facilitate one?",
    a: "Yes. I design curriculum-driven learning journeys end to end — from a single workshop to multi-week leadership initiatives — and can train your team to deliver them at scale as a certified Trainer of Trainers.",
  },
  {
    q: "How do event-hosting rates work?",
    a: "Straightforward MC and moderation work has fixed day-rates (see the Event hosting options). Programme design, facilitator development and governance consulting are scoped per engagement — send the brief and you'll get a clear proposal.",
  },
  {
    q: "Can you moderate panels and mediate difficult conversations?",
    a: "Yes. As a Certified Professional Mediator I use structured dispute-resolution tools to bridge gaps, manage friction and guide groups to genuine consensus — on stage or around a table.",
  },
  {
    q: "How far ahead should we reach out?",
    a: "Popular dates go early, especially in conference season. Two to eight weeks ahead is typical; if your event is sooner, ask anyway and I'll tell you honestly whether I can prepare properly.",
  },
];

export const nav = [
  { href: "/expertise/", label: "Expertise" },
  { href: "/experience/", label: "Experience" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
