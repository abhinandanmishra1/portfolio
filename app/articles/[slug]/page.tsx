import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { MdxRenderer } from '@/components/mdx/mdx-renderer';
import { getAllSlugs, getArticleBySlug, getAdjacentArticles } from '@/lib/mdx';

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

  const ogImageUrl = article.coverImage?.url || `/articles/${article.slug}/opengraph-image`;

  return {
    title: article.title,
    description: article.brief,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.brief,
      url: `https://abhinandanmishra.in/articles/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags.map((t) => t.name),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.brief,
      creator: '@abhinandan_0001',
      site: '@abhinandan_0001',
      images: [ogImageUrl],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { prevArticle, nextArticle } = getAdjacentArticles(slug);
  const ogImageUrl = article.coverImage?.url || `https://abhinandanmishra.in/articles/${article.slug}/opengraph-image`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.brief,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    image: ogImageUrl,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: 'https://abhinandanmishra.in',
      jobTitle: 'SDE-II',
      worksFor: {
        '@type': 'Organization',
        name: 'Project44',
        url: 'https://project44.com',
      },
      sameAs: [
        'https://github.com/abhinandanmishra1',
        'https://www.linkedin.com/in/abhinandanmishra1',
        'https://x.com/abhinandan_0001',
        'https://leetcode.com/u/abhinandanmishra1',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Abhinandan Mishra',
      url: 'https://abhinandanmishra.in',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abhinandanmishra.in/articles/${article.slug}`,
    },
    keywords: article.tags.map((t) => t.name).join(', '),
    articleSection: article.category || 'Engineering',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-24 sm:pt-28 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/articles"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>all articles</span>
          </Link>

          {nextArticle && (
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              title={nextArticle.title}
            >
              <span>next article</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        <header className="mb-10 border-b border-border/70 pb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={article.publishedAt}>{article.date}</time>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readTimeInMinutes} min read
            </span>
            {article.category && (
              <>
                <span>·</span>
                <Link
                  href={`/categories/${article.categorySlug}`}
                  className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400 transition-colors hover:border-blue-500/40 hover:bg-blue-500/20"
                >
                  {article.category}
                </Link>
              </>
            )}
            {article.series && (
              <>
                <span>·</span>
                <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-400">
                  {article.series.name}
                </span>
              </>
            )}
          </div>

          <h1 className="mt-4 font-serif text-2xl italic font-normal tracking-tight text-foreground break-words sm:text-4xl sm:leading-[1.2]">
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
                <Link
                  key={tag.slug}
                  href={`/tags/${tag.slug}`}
                  className="rounded-md border border-border/70 bg-card/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-blue-500/40"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {article.coverImage?.url && (
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-border/80 bg-card/40 shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={article.coverImage.url}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <article className="prose-content">
          <MdxRenderer source={article.content} />
        </article>

        {/* Adjacent Articles Navigation (Created Date Order) */}
        {(prevArticle || nextArticle) && (
          <nav
            aria-label="Article pagination"
            className="mt-14 grid grid-cols-1 gap-4 border-t border-border/80 pt-8 sm:grid-cols-2"
          >
            {prevArticle ? (
              <Link
                href={`/articles/${prevArticle.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-border/70 bg-card/40 p-4 transition-all hover:border-blue-500/40 hover:bg-card/70"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                    <span>Previous Article</span>
                  </div>
                  <div className="mt-2 font-serif text-base italic font-medium leading-snug text-foreground line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {prevArticle.title}
                  </div>
                </div>
                <div className="mt-3 font-mono text-[11px] text-muted-foreground">
                  {prevArticle.date}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextArticle ? (
              <Link
                href={`/articles/${nextArticle.slug}`}
                className="group flex flex-col justify-between items-end text-right rounded-xl border border-border/70 bg-card/40 p-4 transition-all hover:border-blue-500/40 hover:bg-card/70 sm:col-start-2"
              >
                <div className="w-full">
                  <div className="flex items-center justify-end gap-1.5 font-mono text-xs text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <span>Next Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="mt-2 font-serif text-base italic font-medium leading-snug text-foreground line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {nextArticle.title}
                  </div>
                </div>
                <div className="mt-3 font-mono text-[11px] text-muted-foreground">
                  {nextArticle.date}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </nav>
        )}

        <footer className="mt-10 border-t border-border/60 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
      <Footer maxWidth="3xl" />
    </>
  );
}
