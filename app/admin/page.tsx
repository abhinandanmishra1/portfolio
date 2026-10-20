import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Tags,
  BookOpen,
  PenLine,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { getAllArticles, getAllTags } from '@/lib/mdx';
import { papers } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Admin Studio',
  description: 'Manage articles, papers, and site content without database dependencies.',
};

export default function AdminPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  const totalWords = articles.reduce((acc, a) => {
    return acc + a.content.split(/\s+/).length;
  }, 0);

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl italic font-normal tracking-tight text-foreground">
            Content Studio & Overview
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Dynamic authoring studio powered by local Markdown/MDX and Git submodule sync.
          </p>
        </div>

        <Link
          href="/admin/new"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-mono text-xs font-medium text-white shadow-sm transition hover:bg-blue-500 self-start sm:self-auto"
        >
          <PenLine className="h-3.5 w-3.5" />
          <span>Draft New Article</span>
        </Link>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card/40 p-5 space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-xs uppercase">Articles</span>
            <FileText className="h-4 w-4 text-blue-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {articles.length}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">Live MDX essays</p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 p-5 space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-xs uppercase">Tags</span>
            <Tags className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {tags.length}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">Categories tracked</p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 p-5 space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-xs uppercase">Papers</span>
            <BookOpen className="h-4 w-4 text-purple-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {papers.length}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">Research breakdowns</p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 p-5 space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-xs uppercase">Total Words</span>
            <Layers className="h-4 w-4 text-amber-500" />
          </div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {totalWords.toLocaleString()}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">Published prose</p>
        </div>
      </div>

      {/* Article Inventory */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl italic font-medium text-foreground">
            Article Inventory
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            {articles.length} total
          </span>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card/30">
          <table className="min-w-full divide-y divide-border text-left">
            <thead className="bg-muted/40 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Title & Slug</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">Date</th>
                <th className="px-4 py-3 font-medium hidden md:table-cell">Reading Time</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {articles.map((article) => (
                <tr key={article.slug} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="font-medium text-foreground">{article.title}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      /articles/{article.slug}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground hidden sm:table-cell">
                    {article.date}
                  </td>
                  <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground hidden md:table-cell">
                    {article.readTimeInMinutes} min
                  </td>
                  <td className="px-4 py-3.5">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <span>View</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
