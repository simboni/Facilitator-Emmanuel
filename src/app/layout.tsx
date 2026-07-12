import type { Metadata } from "next";
import { Archivo, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";
import { profile, site, tiers } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  // Italic only — the serif appears exclusively as italic editorial notes.
  style: ["italic"],
  axes: ["SOFT", "WONK", "opsz"],
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const siteUrl = `https://${site.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${profile.brand}`,
  },
  description: site.description,
  keywords: [
    "Emmanuel Misiati",
    "Facilitator Misiati",
    "MC Nairobi",
    "master of ceremonies Kenya",
    "corporate MC Kenya",
    "professional facilitator Nairobi",
    "panel moderator Kenya",
    "conference host East Africa",
    "workshop facilitator Kenya",
    "event emcee Nairobi",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: profile.brand,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#17130f" },
  ],
};

// Runs before first paint: applies the saved theme (or the OS preference) to
// <html data-theme> so there's no flash of the wrong theme on load.
const themeLoader = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.brand,
  jobTitle: "Master of Ceremonies, Facilitator & Moderator",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  description: profile.intro,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [profile.linkedin],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event MC, facilitation and moderation services",
  provider: { "@type": "Person", name: profile.name },
  areaServed: "East Africa",
  offers: tiers.map((t) => ({
    "@type": "Offer",
    name: t.name,
    price: t.price,
    priceCurrency: "KES",
    description: t.tagline,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${fraunces.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <script dangerouslySetInnerHTML={{ __html: themeLoader }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
