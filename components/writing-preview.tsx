import * as React from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

export function WritingPreview() {
  const blogUrl = profile.links.blog;

  const articles = [
    {
      title: "How I Rebuilt My Blog with Next.js, MDX, and Clean Architecture",
      brief: "The journey of migrating from traditional blogging limitations to a custom Next.js App Router MDX platform with interactive demos and code sandbox components.",
      slug: "building-my-blog",
      publishedAt: "December 2025",
      readTime: "9 min read",
      tags: ["Next.js", "MDX", "React"],
      href: `${blogUrl}/articles/building-my-blog`
    },
    {
      title: "System Design: Approaching Scalable System Design Problems",
      brief: "A systematic, battle-tested framework for tackling system design challenges—from capacity estimation and API contracts to data modeling and fault tolerance.",
      slug: "system-design-approaching-problem",
      publishedAt: "November 2025",
      readTime: "12 min read",
      tags: ["System Design", "Distributed Systems", "Architecture"],
      href: `${blogUrl}/articles/system-design-approaching-problem`
    },
    {
      title: "Understanding Databases for Designing Systems: ACID & Isolation Levels",
      brief: "Demystifying transaction isolation levels, concurrency anomalies (dirty reads, non-repeatable reads, write skew), and real-world trade-offs in modern SQL engines.",
      slug: "understanding-databases-isolation",
      publishedAt: "October 2025",
      readTime: "11 min read",
      tags: ["Databases", "PostgreSQL", "Transactions"],
      href: `${blogUrl}/articles/understanding-databases-isolation`
    },
    {
      title: "Segment Tree: Range Updates with Lazy Propagation",
      brief: "A deep dive into tree-based range query optimization in O(log N) using delayed push-downs for competitive programming and interval computations.",
      slug: "segment-tree-lazy-propagation",
      publishedAt: "September 2025",
      readTime: "8 min read",
      tags: ["DSA", "Segment Trees", "Algorithms"],
      href: `${blogUrl}/articles/segment-tree-lazy-propagation`
    }
  ];

  return (
    <section id="writing" className="py-20 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-xs uppercase font-mono font-semibold tracking-wider text-primary">
              Publications
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Technical Writing & Engineering Blog
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Long-form deep dives into system architecture, data structures, and modern web development.
            </p>
          </div>

          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity self-start md:self-auto shadow-sm"
          >
            <span>Visit Technical Blog</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{article.publishedAt}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {article.brief}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted/60 text-muted-foreground text-[11px] font-mono"
                    >
                      <Tag className="w-2.5 h-2.5 opacity-60" />
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
