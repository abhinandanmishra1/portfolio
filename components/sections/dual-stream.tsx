import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { portfolio, recentArticles, recentProjects } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function DualStream() {
  return (
    <section id="projects" className="pt-20 scroll-mt-20">
      <SectionHeading index="02" title="Recent work & writing" />
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Recent Projects
          </h3>
          <ul className="divide-y divide-border">
            {recentProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href ?? '#'}
                  target={project.href ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group block py-4 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[15px] font-medium text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {project.name}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {project.metric}
                    </span>
                  </div>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {project.role} — {project.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="#honors"
            className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-foreground/80 transition-all hover:gap-2 hover:text-foreground"
          >
            All Projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div id="writing" className="scroll-mt-20">
          <h3 className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Recent Articles
          </h3>
          <ul className="divide-y divide-border">
            {recentArticles.map((article) => (
              <li key={article.title}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 py-4"
                >
                  <span className="shrink-0 font-mono text-[11.5px] text-muted-foreground">
                    {article.date}
                  </span>
                  <span className="text-[14px] leading-snug text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {article.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={portfolio.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-foreground/80 transition-all hover:gap-2 hover:text-foreground"
          >
            All Articles
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
