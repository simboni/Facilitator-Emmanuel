import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { PartnersTabs } from "@/components/partners-tabs";
import { partnerWorks } from "@/components/client-logos";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The brands and organisations Simboni Misiati Peter has built for — web apps, businesses and NGOs across Kenya and beyond.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Brands & organisations I've built for"
        intro="The companies and causes behind the work — grouped by what they do. Each links straight to the live product or a full case study."
      />
      <Section>
        <PartnersTabs works={partnerWorks} />
      </Section>
    </>
  );
}
