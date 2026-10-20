import * as React from "react";
import { researchItems } from "@/data/research";
import { BookOpen, BookmarkCheck, Compass, Sparkles, Tag } from "lucide-react";

export function ResearchSection() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium">
            <BookmarkCheck className="w-3 h-3" />
            Completed
          </span>
        );
      case "Currently Exploring":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 border border-sky-500/20 font-medium">
            <Compass className="w-3 h-3 animate-spin" style={{ animationDuration: "8s" }} />
            Exploring
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 border border-purple-500/20 font-medium">
            <BookOpen className="w-3 h-3" />
            Reference
          </span>
        );
    }
  };

  return (
    <section id="research" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
              Continuous Learning
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
              <Sparkles className="w-3 h-3" />
              Reading & Research
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Architectural Studies & Deep Dives
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            System design concepts, distributed systems papers, and algorithmic paradigms I study and apply to real-world engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-border transition-colors space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                <div className="text-xs font-mono text-primary/90 flex items-center gap-1.5">
                  <span>Source:</span>
                  <span className="font-semibold text-foreground/80">{item.authorOrSource}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {item.keyTakeaways}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted/60 text-muted-foreground text-[11px] font-mono border border-border/50"
                  >
                    <Tag className="w-2.5 h-2.5 opacity-60" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
