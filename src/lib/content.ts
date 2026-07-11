/* ============================================================================
   FACILITATOR MISIATI — single source of truth for every word on the site.
   Edit this file to change content; the pages render whatever lives here.
   ========================================================================== */

export const site = {
  name: "Facilitator Misiati",
  // Swap for the real domain at launch — drives canonical URLs, sitemap, JSON-LD.
  domain: "facilitatormisiati.com",
  title: "Facilitator Misiati — Professional MC, Facilitator & Moderator",
  description:
    "Emmanuel Misiati is a professional Master of Ceremonies, experiential facilitator and panel moderator in Nairobi, Kenya. 1,500+ facilitation hours across corporate summits, NGO convenings and youth engagements.",
};

export const profile = {
  name: "Emmanuel Misiati",
  brand: "Facilitator Misiati",
  role: "Professional Master of Ceremonies, Facilitator & Moderator",
  location: "Nairobi, Kenya",
  reach: "Available across East Africa & virtually",
  email: "facilitatormisiati@gmail.com",
  phone: "+254707136869",
  phoneDisplay: "+254 707 136869",
  whatsapp:
    "https://wa.me/254707136869?text=" +
    encodeURIComponent(
      "Hi Emmanuel, I'd like to check your availability for an upcoming event.",
    ),
  linkedin: "https://www.linkedin.com/in/emmanuel-misiati",
  responsePromise: "Enquiries answered within one business day",
  intro:
    "I am an engagement and experiential facilitator dedicated to helping people learn, connect and grow through meaningful, high-energy interactions.",
  bio: [
    "Spanning corporate summits, conferences and intimate focus groups, my approach integrates immersive, experiential activities that break the ice, drive active audience participation and maximise content retention. I enjoy transforming standard gatherings into collaborative spaces where impact sticks.",
    "My proficiency is rooted in a powerful blend of hands-on experience and rigorous professional training. With over five years designing and facilitating high-stakes engagements for both youth and corporate audiences, I deploy creative, time-tested methodologies that guarantee results.",
    "Backed by an academic foundation in Community Development, my expertise is further sharpened by specialised professional training in advanced facilitation, mediation, corporate training and stage moderation.",
  ],
  pitch:
    "Behind every successful conference is the invisible thread that keeps the agenda moving, the speakers comfortable and the audience locked in. As your MC, my priority is giving you total peace of mind. Leave the timing, the energy and the stage flow to me — so you can focus entirely on your guests and your message.",
};

export const stats = [
  { value: 1500, suffix: "+", label: "Facilitation hours" },
  { value: 100, suffix: "+", label: "Engagements facilitated" },
  { value: 50, suffix: "+", label: "Groups engaged" },
  { value: 5, suffix: "+", label: "Years on stage" },
];

/* Current roles — the circles on page 3 of the portfolio */
export const roles = [
  {
    title: "Senior Lead Facilitator",
    org: "OSOTWA",
    since: "2023",
    logo: "/images/logos/osotwa.webp",
  },
  {
    title: "Programs Associate",
    org: "SME Founders Association",
    since: "2026",
    logo: "/images/logos/sme-founders.webp",
  },
  {
    title: "Co-chair, Board of Stewards",
    org: "The Resilience Project UK",
    since: "2026",
    logo: "/images/logos/resilience-project.webp",
  },
  {
    title: "Executive Facilitator",
    org: "Taifa Teule Network",
    since: "2021",
    logo: "/images/logos/taifa-teule-network.webp",
  },
];

export const expertise = [
  {
    no: "01",
    title: "Conference MCing",
    body: "Seamlessly navigating tight schedules, managing high-profile speakers and keeping audience energy sustained across multi-day events.",
  },
  {
    no: "02",
    title: "Strategic Facilitation",
    body: "Leading co-design sessions, panel discussions and governance workshops with international stakeholders.",
  },
  {
    no: "03",
    title: "Experiential Engagement",
    body: "Deploying purposeful friction, icebreakers and immersive check-in methodologies to build immediate psychological safety and connection.",
  },
  {
    no: "04",
    title: "Logistical Command",
    body: "Impeccable time management and event-flow coordination, honed through executive operations and Toastmasters leadership.",
  },
];

/* The signature framework — rendered as a pinned scroll story on the home page */
export const framework = {
  title: "The Signature Framework",
  intro:
    "Every room I hold moves through the same four beats. It is the difference between an agenda that is read out and an agenda that lands.",
  steps: [
    {
      no: "01",
      name: "The Arrival",
      body: "Grounding the room with mindful, intentional check-ins that transition the audience from distracted to present.",
    },
    {
      no: "02",
      name: "The Hook",
      body: "Creating a safe container for engagement through interactive energizers and deliberate context-setting.",
    },
    {
      no: "03",
      name: "The Drive",
      body: "Navigating speakers, panels and transitions with sharp wit, clear focus and strict adherence to the clock.",
    },
    {
      no: "04",
      name: "The Harvest",
      body: "Synthesising complex discussions into actionable takeaways and powerful closing reflections.",
    },
  ],
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Corporate & SME" | "Global summit" | "Youth & community";
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
    category: "Global summit",
    year: "2026",
    role: "Managed a multi-day, multi-stakeholder summit involving East African exporters, government and institutional players, global buyers and ecosystem stakeholders.",
    impact:
      "Maintained seamless chronological flow across multiple keynote sessions and panels while driving audience engagement. Tailored energizers and mindful transition techniques kept the energy high and the audience deeply connected to the summit's core theme from opening to closing remarks.",
    images: [
      { src: "/images/events/weconnect-1.webp", alt: "WEConnect summit delegates group photo on a rooftop terrace" },
      { src: "/images/events/weconnect-6.webp", alt: "Emmanuel Misiati on the mic at the WEConnect summit podium" },
      { src: "/images/events/weconnect-2.webp", alt: "Delegates applauding during a WEConnect session" },
      { src: "/images/events/weconnect-3.webp", alt: "Delegates in conversation between sessions" },
      { src: "/images/events/weconnect-4.webp", alt: "Networking on the summit floor" },
      { src: "/images/events/weconnect-5.webp", alt: "Delegates sharing a light moment during an energizer" },
    ],
    featured: true,
  },
  {
    slug: "accelerateher-summit",
    title: "AccelerateHER 2.0 Trade Summit",
    client: "CBI Women's Economic Empowerment Program",
    category: "Global summit",
    year: "2026",
    role: "Primary MC, facilitator and voice for the high-profile, high-energy summit dedicated to women's leadership, entrepreneurship and acceleration. Managed the entire event flow, speaker introductions and critical transitions.",
    impact:
      "Facilitated and coordinated keynote speeches and breakout sessions that kept all delegates aligned, engaged and moving toward collaborative strategic outcomes.",
    images: [
      { src: "/images/events/accelerateher-1.webp", alt: "AccelerateHER 2.0 delegates group photo" },
      { src: "/images/events/accelerateher-2.webp", alt: "Emmanuel Misiati hosting on the AccelerateHER stage" },
      { src: "/images/events/accelerateher-3.webp", alt: "Delegates on their feet during an interactive session" },
    ],
    featured: true,
  },
  {
    slug: "founders-exchange",
    title: "Monthly Founders Gathering — Founders Exchange",
    client: "SME Founders Association",
    category: "Corporate & SME",
    year: "Ongoing",
    role: "Programs Associate for the SME Founders Association. From planning to execution, I facilitate high-energy entrepreneurial ecosystem events, balancing community building and engagement with strict corporate dynamics.",
    impact:
      "Ensured flawless event executions, clear protocols and a welcoming atmosphere for high-calibre founders and professionals — every month.",
    images: [
      { src: "/images/events/founders-1.webp", alt: "Emmanuel Misiati facilitating a Founders Exchange session" },
      { src: "/images/events/founders-2.webp", alt: "Founders celebrating with message paddles at a gathering" },
      { src: "/images/events/founders-4.webp", alt: "Founders Exchange group photo outside the venue" },
      { src: "/images/events/founders-3.webp", alt: "A founder taking a selfie with fellow members" },
      { src: "/images/events/founders-5.webp", alt: "A participant contributing during a session" },
      { src: "/images/events/founders-6.webp", alt: "Round-table discussion at Founders Exchange" },
    ],
    featured: true,
  },
  {
    slug: "youth-engagement",
    title: "Youth Engagement Portfolio",
    client: "Mzalendo Trust · Generation Mental Health · Greenpeace Africa",
    category: "Youth & community",
    year: "2021 — present",
    role: "Over 1,000 hours engaging young people — curating activities that draw curiosity, spark engagement and create memorability. From icebreakers, energizers and experiential activities to mental and context framing techniques, everything is designed to keep young minds interested and invested.",
    impact:
      "Highlights include three policy-brief presentations with Mzalendo Trust, the Generation Mental Health Summit, and the Greenpeace International global team engagement 2025. As Co-chair of The Resilience Project UK Stewards Board, I run periodic engagements using frameworks and synthesis sessions that keep global board members aligned and moving toward collaborative outcomes.",
    images: [
      { src: "/images/events/youth-1.webp", alt: "Young participants presenting policy briefs at Mzalendo Trust" },
      { src: "/images/events/youth-4.webp", alt: "Emmanuel Misiati leading an outdoor session with a youth group" },
      { src: "/images/events/youth-2.webp", alt: "Youth group photo on a lawn after a session" },
      { src: "/images/events/youth-3.webp", alt: "Large youth cohort gathered in a bamboo grove" },
      { src: "/images/events/youth-5.webp", alt: "Audience listening during a youth summit" },
    ],
    featured: true,
  },
];

export const clients: { name: string; logo?: string }[] = [
  { name: "SME Founders Association", logo: "/images/logos/sme-founders.webp" },
  { name: "PassionProfit", logo: "/images/logos/passionprofit.webp" },
  { name: "Mzalendo Trust", logo: "/images/logos/mzalendo.webp" },
  { name: "Greenpeace Africa", logo: "/images/logos/greenpeace.webp" },
  { name: "WEConnect International" },
  { name: "Wakilisha", logo: "/images/logos/wakilisha.webp" },
  { name: "Shiriki", logo: "/images/logos/shiriki.webp" },
  { name: "KEAN International", logo: "/images/logos/kean.webp" },
  { name: "Taifa Teule Leadership Experience", logo: "/images/logos/tlx.webp" },
  { name: "Maisha Yangu", logo: "/images/logos/maisha-yangu.webp" },
  { name: "The Resilience Project UK", logo: "/images/logos/resilience-project.webp" },
  { name: "OSOTWA", logo: "/images/logos/osotwa.webp" },
  { name: "This Is Me" },
  { name: "Inungiro Self Help Group" },
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
      "Full-day stage hosting",
      "Speaker introductions",
      "Housekeeping",
      "Agenda management",
      "Audience engagement & energizers",
      "Moderation of panel discussions, fireside chats and audience Q&A",
    ],
  },
  {
    slug: "full-event-partner",
    name: "Full Event Partner",
    tagline: "From pre-event strategy to post-event report — total peace of mind.",
    price: 57500,
    priceNote: "per event day",
    includes: [
      "Pre-event consultation",
      "Full-day stage hosting",
      "Speaker introductions",
      "Housekeeping",
      "Agenda management",
      "Audience engagement & energizers",
      "Moderation of panel discussions, fireside chats and audience Q&A",
      "Post-event report & debrief",
    ],
  },
];

export const addOns = [
  {
    title: "Session & agenda co-design",
    body: "Workshop flows, breakout structures and synthesis sessions designed around your outcomes — using the same frameworks I run for international boards.",
  },
  {
    title: "Youth-centred engagements",
    body: "1,000+ hours with young audiences. Icebreakers, energizers and experiential activities engineered for curiosity and memorability.",
  },
  {
    title: "Virtual & hybrid moderation",
    body: "The same energy and time discipline, adapted for cameras, chat and hybrid rooms.",
  },
  {
    title: "Focus groups & co-design sessions",
    body: "Intimate, high-trust facilitation for research conversations and stakeholder co-design with honest, usable outputs.",
  },
];

export const process = [
  {
    no: "01",
    title: "Enquire",
    body: "Send the date, venue, audience and format on WhatsApp, the form or email. You'll hear back within one business day.",
  },
  {
    no: "02",
    title: "Discovery call",
    body: "We walk through your agenda, audience and outcomes — and agree the right package for the room.",
  },
  {
    no: "03",
    title: "Run-of-show co-design",
    body: "I review the program, script the transitions, research your speakers and plan the energy arc. A deposit locks the date.",
  },
  {
    no: "04",
    title: "Event day",
    body: "I arrive early, sync with your production team, and hold the room — timing, energy and flow — so you can focus on your guests.",
  },
  {
    no: "05",
    title: "Harvest & debrief",
    body: "On Full Event Partner bookings, you receive a post-event report: what landed, what the room said and what to carry forward.",
  },
];

export const faq = [
  {
    q: "What's included in the day rate?",
    a: "Everything listed in the package — preparation, the full event day on stage and coordination with your team. There are no hidden fees for standard Nairobi events.",
  },
  {
    q: "Do you travel outside Nairobi?",
    a: "Yes — I work across Kenya and East Africa. For events outside Nairobi, the client covers transport and accommodation on top of the package rate.",
  },
  {
    q: "How do we confirm a date?",
    a: "A deposit confirms your date, payable via M-Pesa or bank transfer, with the balance due around the event. Full details come with your quote.",
  },
  {
    q: "How far ahead should we book?",
    a: "Popular dates go early — conference season especially. Two to eight weeks ahead is typical; if your event is sooner, ask anyway and I'll tell you honestly whether I can prepare properly in the time available.",
  },
  {
    q: "Can you handle virtual or hybrid events?",
    a: "Yes. I moderate virtual and hybrid sessions with the same time discipline and audience engagement — energizers included, adapted for the camera.",
  },
  {
    q: "Can you handle multi-day summits?",
    a: "Multi-day, multi-stakeholder summits are my home ground — WEConnect in Africa and AccelerateHER 2.0 both ran across multiple days with sustained energy. Multi-day rates are quoted per event.",
  },
];

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
