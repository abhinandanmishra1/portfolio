import * as React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from './mdx-components';

interface MdxRendererProps {
  source: string;
}

/**
 * Preprocess MDX content to convert Hashnode widget embeds (%[URL])
 * into native interactive JSX components (<YouTube />, <CodeSandbox />, <Replit />).
 */
export function preprocessMdx(source: string): string {
  if (!source) return '';

  return source.replace(/%\[\s*(https?:\/\/[^\s\]]+)\s*\]/g, (match, url) => {
    const trimmedUrl = url.trim();
    if (trimmedUrl.includes('youtube.com') || trimmedUrl.includes('youtu.be')) {
      return `\n\n<YouTube url="${trimmedUrl}" />\n\n`;
    }
    if (trimmedUrl.includes('codesandbox.io')) {
      return `\n\n<CodeSandbox url="${trimmedUrl}" />\n\n`;
    }
    if (trimmedUrl.includes('replit.com')) {
      return `\n\n<Replit url="${trimmedUrl}" />\n\n`;
    }
    return `\n\n<iframe src="${trimmedUrl}" className="my-6 h-[500px] w-full rounded-xl border border-border" />\n\n`;
  });
}

export function MdxRenderer({ source }: MdxRendererProps) {
  const processedSource = preprocessMdx(source);

  return (
    <div className="mdx-content max-w-none">
      <MDXRemote
        source={processedSource}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </div>
  );
}
