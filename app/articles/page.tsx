import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { getAllArticles, getAllCategories, getAllTags } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Articles & System Deep Dives',
  description:
    'In-depth technical essays on distributed databases, isolation levels, caching strategies, and algorithms by Abhinandan Mishra.',
  alternates: {
    canonical: '/articles',
  },
  openGraph: {
    title: 'Articles & System Deep Dives | Abhinandan Mishra',
    description:
      'In-depth technical essays on distributed databases, isolation levels, caching strategies, and algorithms.',
    url: 'https://abhinandanmishra.in/articles',
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = getAllCategories();
  const tags = getAllTags();

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
            <BookOpen className="h-3.5 w-3.5" />
            <span>Technical Archive</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            Essays & System Design Deep Dives
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            Practical, in-depth breakdowns of distributed systems, database internals, low-level design patterns, operating systems, and high-performance algorithms.
          </p>

          {categories.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/categories"
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-medium text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-500/20"
              >
                All Tracks ({categories.reduce((a, c) => a + c.count, 0)})
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="rounded-full border border-border/80 bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-blue-500/40"
                >
                  {cat.name}{' '}
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">({cat.count})</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="divide-y divide-border border-t border-border">
          {articles.map((article) => (
            <article key={article.slug} className="group py-8 transition-colors">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-muted-foreground">
                  <time dateTime={article.publishedAt}>{article.date}</time>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
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
                      <span className="text-blue-600 dark:text-blue-400">
                        {article.series.name}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="font-serif text-xl italic font-medium leading-snug text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 sm:text-2xl">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
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
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
