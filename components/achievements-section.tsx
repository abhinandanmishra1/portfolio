import * as React from "react";
import { achievements } from "@/data/achievements";
import { Trophy, Award, ArrowUpRight, Medal } from "lucide-react";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
              Algorithmic Honors
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-mono">
              <Trophy className="w-3 h-3" />
              Competitive Programming
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Proven Problem Solving & Global Rankings
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Demonstrated mastery in computational complexity, graph theory, dynamic programming, and high-pressure competitive coding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-amber-500/30 transition-all duration-150 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold border border-amber-500/20">
                    <Medal className="w-3 h-3" />
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{item.year}</span>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-primary font-mono mt-0.5">
                    {item.rank}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-2 border-t border-border/50">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Verify Ranking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
