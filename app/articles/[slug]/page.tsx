import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { MdxRenderer } from '@/components/mdx/mdx-renderer';
import { getAllSlugs, getArticleBySlug } from '@/lib/mdx';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.brief,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.brief,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: article.coverImage?.url ? [article.coverImage.url] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.brief,
      images: article.coverImage?.url ? [article.coverImage.url] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.brief,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: 'https://abhinandanmishra.in',
    },
    publisher: {
      '@type': 'Person',
      name: 'Abhinandan Mishra',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abhinandanmishra.in/articles/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        <Link
          href="/articles"
          className="group mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>all articles</span>
        </Link>

        <header className="mb-10 border-b border-border/70 pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={article.publishedAt}>{article.date}</time>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readTimeInMinutes} min read
            </span>
            {article.series && (
              <>
                <span>·</span>
                <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-400">
                  {article.series.name}
                </span>
              </>
            )}
          </div>

          <h1 className="mt-4 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl sm:leading-[1.2]">
            {article.title}
          </h1>

          {article.brief && (
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              {article.brief}
            </p>
          )}

          {article.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="rounded-md border border-border/70 bg-card/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
        </header>

        <article className="prose-content">
          <MdxRenderer source={article.content} />
        </article>

        <footer className="mt-16 border-t border-border/80 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>back to all articles</span>
            </Link>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                article.title,
              )}&url=${encodeURIComponent(`https://abhinandanmishra.in/articles/${article.slug}`)}`}
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
      <Footer />
    </>
  );
}
