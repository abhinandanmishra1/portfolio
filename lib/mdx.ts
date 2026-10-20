import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/articles');

function getResearchDirectories(): string[] {
  const dirs = [
    path.join(process.cwd(), 'content/researches'),
    path.join(process.cwd(), 'content/research'),
  ];
  return dirs.filter((d) => fs.existsSync(d));
}

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
  category?: string;
  tags: ArticleTag[];
  series?: ArticleSeries;
  coverImage?: {
    url: string;
  };
  author: ArticleAuthor;
  content: string;
}

export interface ResearchPaper {
  slug: string;
  title: string;
  authors: string;
  tag: string;
  note: string;
  paperUrl?: string;
  publishedAt: string;
  date: string;
  readTimeInMinutes: number;
  takeaways: string[];
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
      category: data.category || '',
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

export function getAllCategories(): { name: string; count: number }[] {
  const articles = getAllArticles();
  const map = new Map<string, number>();

  for (const article of articles) {
    if (article.category) {
      map.set(article.category, (map.get(article.category) || 0) + 1);
    }
  }

  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
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

// ==========================================
// RESEARCH & PAPERSHELF DYNAMIC ENGINE
// ==========================================

export function getAllResearchSlugs(): string[] {
  const dirs = getResearchDirectories();
  const slugs = new Set<string>();

  for (const dir of dirs) {
    try {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (file.endsWith('.mdx') || file.endsWith('.md')) {
          slugs.add(file.replace(/\.(mdx|md)$/, ''));
        }
      }
    } catch {
      // directory read failure or not found
    }
  }

  return Array.from(slugs);
}

export function getResearchBySlug(slug: string): ResearchPaper | null {
  try {
    const dirs = getResearchDirectories();
    let fullPath: string | null = null;

    for (const dir of dirs) {
      const pMdx = path.join(dir, `${slug}.mdx`);
      const pMd = path.join(dir, `${slug}.md`);
      if (fs.existsSync(pMdx)) {
        fullPath = pMdx;
        break;
      }
      if (fs.existsSync(pMd)) {
        fullPath = pMd;
        break;
      }
    }

    if (!fullPath || !fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const publishedAt = data.publishedAt || data.date || new Date().toISOString();
    const dateFormatted = data.date ? data.date : formatDate(publishedAt);

    return {
      slug,
      title: data.title || slug,
      authors: data.authors || 'Seminal Research',
      tag: data.tag || 'Distributed Systems',
      note: data.note || data.brief || data.description || '',
      paperUrl: data.paperUrl || data.href,
      publishedAt,
      date: dateFormatted,
      readTimeInMinutes: data.readTimeInMinutes || Math.max(1, Math.round(content.split(/\s+/).length / 200)),
      takeaways: Array.isArray(data.takeaways) ? data.takeaways : [],
      content,
    };
  } catch (error) {
    console.error(`Error reading research paper [${slug}]:`, error);
    return null;
  }
}

export function getAllResearch(): ResearchPaper[] {
  const slugs = getAllResearchSlugs();
  const papersList: ResearchPaper[] = [];

  for (const slug of slugs) {
    const paper = getResearchBySlug(slug);
    if (paper) {
      papersList.push(paper);
    }
  }

  return papersList.sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));
}
