import * as React from "react";
import { skillCategories } from "@/data/skills";
import { Layers } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
              Competencies
            </h2>
          </div>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Stack & Skills
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Technologies and tooling I utilize daily to build robust, scalable end-to-end applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card/60 hover:bg-card transition-colors space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-border/50 pb-3">
                <Layers className="w-4 h-4 text-primary" />
                <h3 className="font-bold text-base text-foreground">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-foreground text-xs font-medium hover:border-primary/40 transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.level === "Expert" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Expert" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
