import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui";
import { WorkDirectory } from "@/components/work-directory";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A directory of projects by Peter Misiati — web apps, sites and APIs, each with a full case study.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A directory of my work"
        intro="Every project here is a full case study — the problem, how I approached it, what I built, and the result. Filter by what you're looking for."
      />
      <Section>
        <WorkDirectory />
      </Section>
    </>
  );
}
