import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { getAllCategories, getArticlesByCategory } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Categories & Learning Tracks | Abhinandan Mishra',
  description:
    'Browse in-depth technical essays and system deep dives by category: System Design, Low Level Design, React & Frontend, Data Structures, and more.',
  alternates: {
    canonical: '/categories',
  },
  openGraph: {
    title: 'Categories & Learning Tracks | Abhinandan Mishra',
    description:
      'Browse in-depth technical essays and system deep dives by category: System Design, Low Level Design, React & Frontend, Data Structures, and more.',
    url: 'https://abhinandanmishra.in/categories',
  },
};

export default function CategoriesIndexPage() {
  const categories = getAllCategories();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        <div className="mb-12">
          <Link
            href="/articles"
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to all articles</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Curated Tracks</span>
          </div>

          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            Knowledge Tracks & Categories
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            Structured learning pathways organized chronologically from first principles to production architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((cat) => {
            const articles = getArticlesByCategory(cat.slug);
            const firstArticle = articles[0];
            const latestArticle = articles[articles.length - 1];

            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card/40 p-6 transition-all hover:border-blue-500/40 hover:bg-card/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                      {cat.count} {cat.count === 1 ? 'Essay' : 'Essays'}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      Chronological Track
                    </span>
                  </div>

                  <h2 className="mt-4 font-serif text-2xl italic font-medium text-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {cat.name}
                  </h2>

                  {firstArticle && (
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground line-clamp-2">
                      Starts with <span className="text-foreground font-medium">"{firstArticle.title}"</span> and progresses to advanced implementations.
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-xs text-muted-foreground group-hover:text-foreground">
                  <span>Explore Track</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-blue-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
