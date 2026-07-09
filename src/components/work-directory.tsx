"use client";

import { useState } from "react";
import { projects, projectTags } from "@/lib/portfolio";
import { ProjectCard } from "@/components/project-card";

export function WorkDirectory() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 font-mono text-sm">
        {projectTags.map((tag) => {
          const on = tag === active;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              aria-pressed={on}
              className={`rounded-md px-3 py-1.5 transition-colors ${
                on
                  ? "bg-green-400 text-ink-950"
                  : "border border-ink-600 text-mist-400 hover:border-green-400/60 hover:text-green-300"
              }`}
            >
              {tag === "All" ? "all" : tag}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-mono text-mist-500">
          {"// no projects in this category yet"}
        </p>
      )}
    </div>
  );
}
