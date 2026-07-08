import Link from "next/link";
import type { Project } from "@/lib/portfolio";
import { SpotlightCard } from "@/components/spotlight-card";
import { ArrowUpRightIcon, GitHubIcon, ExternalLinkIcon } from "@/components/icons";

/** A single chip, e.g. a tech-stack tag. */
export function Chip({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.7rem] font-medium ${
        light
          ? "bg-white/10 text-navy-100"
          : "bg-navy-50 text-navy-600 ring-1 ring-inset ring-navy-100"
      }`}
    >
      {children}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = `/work/${project.slug}`;
  return (
    <SpotlightCard
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5"
    >
      {/* Cover */}
      <Link href={href} className="block" aria-label={project.title}>
        <div
          className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${project.cover.from} ${project.cover.to}`}
        >
          <span className="font-mono text-4xl font-bold tracking-tight text-white/90">
            {project.cover.initials}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-black/20 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-white/90 backdrop-blur">
            {project.type}
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-navy-400">
          <span>{project.year}</span>
          <span className="h-1 w-1 rounded-full bg-navy-300" />
          <span>{project.role}</span>
        </div>

        <h3 className="mt-2 flex items-center gap-1.5 text-lg font-semibold text-navy-900">
          <Link href={href} className="after:absolute after:inset-0">
            {project.title}
          </Link>
          <ArrowUpRightIcon className="h-4 w-4 text-navy-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-500" />
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          {project.stack.length > 4 && (
            <Chip>+{project.stack.length - 4}</Chip>
          )}
        </div>

        {/* Direct links (raised above the card overlay link) */}
        {(project.links.live || project.links.code) && (
          <div className="relative z-10 mt-5 flex items-center gap-4 border-t border-navy-100 pt-4 text-sm">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-navy-600 transition-colors hover:text-gold-600"
              >
                <ExternalLinkIcon className="h-4 w-4" /> Live
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-navy-600 transition-colors hover:text-gold-600"
              >
                <GitHubIcon className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}
