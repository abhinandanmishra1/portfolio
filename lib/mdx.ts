import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleTag {
  name: string;
  slug: string;
}

export interface ArticleAuthor {
  name: string;
  profilePicture?: string;
}

export interface ArticleSeries {
  name: string;
  slug: string;
}

export interface Article {
  slug: string;
  title: string;
  brief: string;
  publishedAt: string;
  date: string; // Formatted date e.g. "Oct 2025"
  readTimeInMinutes: number;
  tags: ArticleTag[];
  series?: ArticleSeries;
  coverImage?: {
    url: string;
  };
  author: ArticleAuthor;
  content: string;
}

function formatDate(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return isoString;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.(mdx|md)$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    let fullPath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(contentDirectory, `${slug}.md`);
    }
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const publishedAt = data.publishedAt || data.date || new Date().toISOString();
    const dateFormatted = data.date ? data.date : formatDate(publishedAt);

    // Normalize tags to ArticleTag[]
    const tags: ArticleTag[] = Array.isArray(data.tags)
      ? data.tags.map((t: string | ArticleTag) =>
          typeof t === 'string'
            ? { name: t, slug: t.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
            : t,
        )
      : [];

    return {
      slug,
      title: data.title || slug,
      brief: data.brief || data.excerpt || data.description || '',
      publishedAt,
      date: dateFormatted,
      readTimeInMinutes: data.readTimeInMinutes || Math.max(1, Math.round(content.split(/\s+/).length / 200)),
      tags,
      series: data.series,
      coverImage: data.coverImage,
      author: data.author || {
        name: 'Abhinandan Mishra',
        profilePicture: 'https://github.com/abhinandanmishra1.png',
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading article [${slug}]:`, error);
    return null;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getAllSlugs();
  const articles: Article[] = [];

  for (const slug of slugs) {
    const article = getArticleBySlug(slug);
    if (article) {
      articles.push(article);
    }
  }

  return articles.sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));
}

export function getAllTags(): { name: string; slug: string; count: number }[] {
  const articles = getAllArticles();
  const map = new Map<string, { name: string; slug: string; count: number }>();

  for (const article of articles) {
    for (const tag of article.tags) {
      const existing = map.get(tag.slug);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(tag.slug, { name: tag.name, slug: tag.slug, count: 1 });
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

export function getArticlesByTag(tagSlug: string): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.tags.some((t) => t.slug === tagSlug));
}
