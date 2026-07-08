import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { firm } from "@/lib/firm";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = `https://www.${firm.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${firm.name} | Certified Public Accountants of Kenya`,
    template: `%s | ${firm.name}`,
  },
  description: firm.shortPitch,
  keywords: [
    "accountants Kenya",
    "CPA firm Kenya",
    "audit firm Kenya",
    "auditors Kenya",
    "tax consultants Kenya",
    "tax returns Kenya",
    "eTIMS Kenya",
    "KRA PIN registration",
    "SACCO audit Kenya",
    "accountants Bungoma",
    "Misiati & Associates",
  ],
  authors: [{ name: firm.legalName }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: firm.name,
    title: `${firm.name} | Certified Public Accountants of Kenya`,
    description: firm.shortPitch,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
