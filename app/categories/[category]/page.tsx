import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Clock, ArrowUpDown, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import {
  getAllCategories,
  getArticlesByCategory,
  getCategoryBySlug,
} from '@/lib/mdx';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} — Technical Curriculum & Deep Dives`,
    description: `Read all ${category.count} in-depth articles on ${category.name} by Abhinandan Mishra, arranged chronologically from fundamentals to advanced systems.`,
    alternates: {
      canonical: `/categories/${categorySlug}`,
    },
    openGraph: {
      title: `${category.name} | Abhinandan Mishra`,
      description: `Chronological technical track on ${category.name} (${category.count} articles).`,
      url: `https://abhinandanmishra.in/categories/${categorySlug}`,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: `${category.name} — Abhinandan Mishra`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} — Technical Curriculum`,
      description: `Chronological technical track on ${category.name} (${category.count} articles).`,
      creator: '@abhinandan_0001',
      site: '@abhinandan_0001',
      images: ['/og.png'],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  // Articles returned in ASCENDING order of written date (Part 1 -> Part 2 -> Part 3...)
  const articles = getArticlesByCategory(categorySlug);
  const allCategories = getAllCategories();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        {/* Header Navigation */}
        <div className="mb-10">
          <Link
            href="/articles"
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to all articles</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Curated Learning Track</span>
          </div>

          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            {category.name}
          </h1>

          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            A progressive, chronologically ordered series of {articles.length} in-depth essays and architectural breakdowns. Read from top to bottom to follow the original conceptual narrative.
          </p>

          {/* Chronological order notice pill */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 font-mono text-xs text-blue-600 dark:text-blue-400">
            <ArrowUpDown className="h-3.5 w-3.5" />
            <span>Arranged in chronological order of publication (Foundations → Advanced)</span>
          </div>

          {/* Category Switcher Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-t border-border/70 pt-6">
            <Link
              href="/articles"
              className="rounded-full border border-border/80 bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              All Articles
            </Link>
            {allCategories.map((c) => {
              const isActive = c.slug === category.slug;
              return (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                    isActive
                      ? 'border-blue-500/40 bg-blue-500/10 font-medium text-blue-600 dark:text-blue-400'
                      : 'border-border/80 bg-card/60 text-muted-foreground hover:text-foreground hover:border-blue-500/30'
                  }`}
                >
                  {c.name}{' '}
                  <span
                    className={`text-[10px] ${
                      isActive ? 'text-blue-500' : 'opacity-60'
                    }`}
                  >
                    ({c.count})
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Chronological Article List */}
        <div className="divide-y divide-border border-t border-border">
          {articles.map((article, idx) => {
            const stepNumber = String(idx + 1).padStart(2, '0');
            return (
              <article
                key={article.slug}
                className="group py-8 transition-colors"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-muted-foreground">
                    <span className="rounded bg-muted/60 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-foreground">
                      #{stepNumber}
                    </span>
                    <span>·</span>
                    <time dateTime={article.publishedAt}>{article.date}</time>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTimeInMinutes} min read
                    </span>
                    {article.series && (
                      <>
                        <span>·</span>
                        <span className="text-blue-600 dark:text-blue-400">
                          {article.series.name}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="font-serif text-xl italic font-medium leading-snug text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 sm:text-2xl">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1.5"
                    >
                      <span>{article.title}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>
                  </h2>

                  {article.brief && (
                    <p className="text-[14.5px] leading-relaxed text-muted-foreground line-clamp-2">
                      {article.brief}
                    </p>
                  )}

                  {article.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <Link
                          key={tag.slug}
                          href={`/tags/${tag.slug}`}
                          className="rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground hover:border-blue-500/30"
                        >
                          #{tag.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
