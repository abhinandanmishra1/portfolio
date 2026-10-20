import * as React from "react";
import { profile } from "@/data/profile";
import { CheckCircle2, Code2, Cpu, Globe2 } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      title: "Full-Stack & Frontend Craft",
      description: "Building fast, accessible interfaces with React, Next.js, and TypeScript, backed by clean API contracts and solid client state architectures."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "Distributed Systems & Backend",
      description: "Architecting reliable microservices with Java/Spring Boot, Node.js, and Python, paired with event streaming via Apache Kafka and relational database tuning."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-emerald-500" />,
      title: "Technical Writing & Open Source",
      description: "Documenting complex engineering topics—from segment trees to distributed database isolation levels—on my blog and publishing open-source tooling."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Engineering software that scales with elegance and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative text */}
          <div className="lg:col-span-7 space-y-4 text-muted-foreground leading-relaxed text-base">
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Specialized in Next.js & React</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Microservices & REST / Kafka</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>PostgreSQL & Caching Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Developer Tooling & MCP Agents</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-border bg-card/60 hover:bg-card transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-muted/60">{pillar.icon}</div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
