import * as React from "react";
import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight, Mail, FileText, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/60 text-muted-foreground shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Currently engineering at</span>
            <a
              href={profile.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:underline inline-flex items-center gap-0.5"
            >
              {profile.company}
              <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
            </a>
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-foreground/90">
              {profile.headline}
            </p>
          </div>

          {/* Summary */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Full-stack software engineer with 3+ years of experience building reliable web applications, distributed event-driven systems, and developer tools. Driven by frontend craftsmanship, system design, and open-source software.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={profile.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Read Technical Blog</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </a>

            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card/60 hover:bg-muted text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-3 flex items-center gap-4 text-muted-foreground">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">Connect:</span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted text-foreground/80 hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted text-foreground/80 hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted text-foreground/80 hover:text-foreground transition-colors"
              aria-label="X / Twitter"
              title="X / Twitter"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.links.email}
              className="p-2 rounded-lg hover:bg-muted text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-border/70 bg-card/40">
          {profile.stats.map((stat, i) => (
            <div key={i} className="px-2 py-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
