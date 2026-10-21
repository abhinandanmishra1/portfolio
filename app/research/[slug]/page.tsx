import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookMarked, Calendar, Clock, ExternalLink, Lightbulb, Share2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { MdxRenderer } from '@/components/mdx/mdx-renderer';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/mdx';

interface ResearchPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllResearchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = getResearchBySlug(slug);

  if (!paper) {
    return {
      title: 'Paper Not Found | Architectural Papershelf',
    };
  }

  const title = `${paper.title} | Systems Research`;
  const description = paper.note || `Architectural reading notes and systems breakdown of ${paper.title} (${paper.authors}).`;

  return {
    title,
    description,
    alternates: {
      canonical: `/research/${paper.slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description,
      publishedTime: paper.publishedAt,
      authors: [paper.authors],
      url: `https://abhinandanmishra.in/research/${paper.slug}`,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@abhinandan_0001',
      site: '@abhinandan_0001',
      images: ['/og.png'],
    },
  };
}

export default async function ResearchDetailPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const paper = getResearchBySlug(slug);

  if (!paper) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: paper.title,
    description: paper.note,
    datePublished: paper.publishedAt,
    author: {
      '@type': 'Person',
      name: paper.authors,
    },
    publisher: {
      '@type': 'Person',
      name: 'Abhinandan Mishra',
      url: 'https://abhinandanmishra.in',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abhinandanmishra.in/research/${paper.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-24 sm:pt-28 pb-20">
        <Link
          href="/research"
          className="group mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>all research papers</span>
        </Link>

        <header className="mb-10 border-b border-border/70 pb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
              <BookMarked className="h-3.5 w-3.5" />
              <span>{paper.tag}</span>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={paper.publishedAt}>{paper.date}</time>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {paper.readTimeInMinutes} min read
            </span>
          </div>

          <h1 className="mt-4 font-serif text-2xl italic font-normal tracking-tight text-foreground break-words sm:text-4xl sm:leading-[1.2]">
            {paper.title}
          </h1>

          <p className="mt-2 font-mono text-xs text-muted-foreground">
            Authors: {paper.authors}
          </p>

          {paper.note && (
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              {paper.note}
            </p>
          )}

          {paper.paperUrl && (
            <div className="mt-5">
              <a
                href={paper.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:bg-muted"
              >
                <ExternalLink className="h-3.5 w-3.5 text-blue-500" />
                <span>Original Publication Source</span>
                <span className="text-muted-foreground">↗</span>
              </a>
            </div>
          )}

          {paper.takeaways && paper.takeaways.length > 0 && (
            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 sm:p-6">
              <div className="mb-3.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <Lightbulb className="h-4 w-4 shrink-0" />
                <span>Key Architectural Insights</span>
              </div>
              <ul className="space-y-2.5 text-[14px] leading-relaxed text-foreground/90">
                {paper.takeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <article className="prose-content">
          <MdxRenderer source={paper.content} />
        </article>

        <footer className="mt-16 border-t border-border/80 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>back to papershelf</span>
            </Link>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Reading notes on "${paper.title}"`,
              )}&url=${encodeURIComponent(`https://abhinandanmishra.in/research/${paper.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Share2 className="h-3 w-3" />
              <span>Share on X</span>
            </a>
          </div>
        </footer>
      </main>
      <Footer maxWidth="3xl" />
    </>
  );
}
