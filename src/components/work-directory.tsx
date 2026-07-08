"use client";

import { useState } from "react";
import { projects, projectTags } from "@/lib/portfolio";
import { ProjectCard } from "@/components/project-card";

export function WorkDirectory() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {projectTags.map((tag) => {
          const on = tag === active;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              aria-pressed={on}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "bg-navy-800 text-white"
                  : "border border-navy-200 text-navy-600 hover:border-navy-400 hover:text-navy-900"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-navy-500">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
