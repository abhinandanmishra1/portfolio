import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { recentProjects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Projects & Systems',
  description:
    'Flagship production systems, cloud execution engines, and developer tools built by Abhinandan Mishra.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects & Production Systems | Abhinandan Mishra',
    description:
      'Flagship production systems, cloud execution engines, and developer tools built by Abhinandan Mishra.',
    url: 'https://abhinandanmishra.in/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        <div className="mb-10">
          <Link
            href="/"
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to overview</span>
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Flagship Systems</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            Selected Projects & Architecture
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            Production platforms, distributed execution engines, and developer tools engineered for resilience, low latency, and scale.
          </p>
        </div>

        <div className="space-y-12">
          {recentProjects.map((project, idx) => (
            <article
              key={project.name}
              className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8 transition-colors hover:border-border/90"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border/60 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl italic font-medium text-foreground">
                      {project.name}
                    </h2>
                    {project.metric && (
                      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400">
                        {project.metric}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {project.role}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2 sm:pt-0">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <span>Live App</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-foreground"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-[15px] leading-relaxed text-foreground/85">
                  {project.longDescription || project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                    <h3 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Architectural Highlights
                    </h3>
                    <ul className="space-y-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/80 bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
