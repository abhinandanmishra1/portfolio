"use client";

import * as React from "react";
import { projects, Project } from "@/data/projects";
import { Globe, Star, ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = [
    "All",
    "Flagship Products",
    "AI & Protocols",
    "Full Stack & Systems",
    "Frontend & Tooling",
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
              Featured Work
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Production Products & Architectures
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Real-world products, AI agent systems, and cloud infrastructure engineered for resilience and performance.
            </p>
          </div>

          <a
            href="https://github.com/abhinandanmishra1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline self-start md:self-auto"
          >
            <span>View all 80+ repos on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
            >
              <div className="space-y-4">
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-lg text-foreground hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.role && (
                      <span className="text-xs font-semibold text-foreground/80 block">
                        {project.role}
                      </span>
                    )}
                    {project.badge && (
                      <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    {project.stars && (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-500 font-semibold bg-amber-500/10 px-2 py-0.5 rounded">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        {project.stars}
                      </span>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-muted text-foreground/70 hover:text-foreground transition-colors"
                        title="View GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-muted text-foreground/70 hover:text-foreground transition-colors"
                        title="View Live Site"
                        aria-label="Live Site"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tagline */}
                {project.tagline && (
                  <p className="text-xs font-medium text-primary">
                    {project.tagline}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-6 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-muted/60 text-muted-foreground text-[11px] font-mono border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground/70 font-mono text-[11px]">
                    {project.category}
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-muted-foreground hover:text-foreground"
                    >
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
