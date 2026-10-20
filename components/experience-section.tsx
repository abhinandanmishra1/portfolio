import * as React from "react";
import { experiences } from "@/data/experience";
import { Briefcase, ArrowUpRight, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
            Work History
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Professional Experience
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Track record of shipping impactful software across high-growth startups and global enterprises.
          </p>
        </div>

        <div className="relative border-l border-border/80 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-background transition-transform group-hover:scale-125 ${
                  exp.isCurrent ? "bg-primary ring-4 ring-primary/20" : "bg-muted-foreground/60"
                }`}
              />

              <div className="p-5 sm:p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-border transition-all duration-150 space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-border bg-muted/40 text-muted-foreground self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/60 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
