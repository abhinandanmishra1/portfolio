import * as React from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/30 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-foreground text-sm tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>{profile.name}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {profile.tagline} • Designed for clarity and performance.
            </p>
          </div>

          {/* Cross links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#research" className="hover:text-foreground transition-colors">
              Research
            </a>
            <a
              href={profile.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold inline-flex items-center gap-0.5"
            >
              <span>Blog</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-0.5"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground/80 gap-2">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Next.js 15 • React 19 • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
