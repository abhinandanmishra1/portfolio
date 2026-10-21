import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Tag, Clock } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { getAllTags, getArticlesByTag } from '@/lib/mdx';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((t) => ({
    tag: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tags = getAllTags();
  const tagInfo = tags.find((t) => t.slug === tagSlug);

  if (!tagInfo) {
    return {
      title: 'Tag Not Found',
    };
  }

  return {
    title: `#${tagInfo.name} — Technical Essays & Deep Dives`,
    description: `Browse all articles tagged with #${tagInfo.name} by Abhinandan Mishra.`,
    alternates: {
      canonical: `/tags/${tagSlug}`,
    },
    openGraph: {
      title: `#${tagInfo.name} | Abhinandan Mishra`,
      description: `Browse all articles tagged with #${tagInfo.name} by Abhinandan Mishra.`,
      url: `https://abhinandanmishra.in/tags/${tagSlug}`,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag: tagSlug } = await params;
  const tags = getAllTags();
  const tagInfo = tags.find((t) => t.slug === tagSlug);

  if (!tagInfo) {
    notFound();
  }

  const articles = getArticlesByTag(tagSlug);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-24 sm:pt-28 pb-20">
        <div className="mb-10">
          <Link
            href="/articles"
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to all articles</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Tag className="h-3.5 w-3.5" />
            <span>Tag Archive</span>
          </div>

          <h1 className="mt-2 font-serif text-2xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            #{tagInfo.name}
          </h1>

          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'} filed under #{tagInfo.name}.
          </p>
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
                        className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:border-blue-500/40"
                      >
                        {article.category}
                      </Link>
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
                        className="rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
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
