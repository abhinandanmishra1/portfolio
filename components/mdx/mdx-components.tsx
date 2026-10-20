import * as React from 'react';
import Link from 'next/link';
import { Callout } from './callout';
import { Steps, Step } from './steps';
import { Badge } from './badge';
import {
  Tabs,
  TabItem,
  FileTree,
  FileTreeItem,
  YouTube,
  ImageComparison,
  CodeSandbox,
  Demo,
  AnimatedBox,
} from './interactive-elements';
import { CodeSnippet } from './code-snippet';

export const mdxComponents = {
  h1: ({ children, id, ...props }: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1
      id={id}
      className="mb-6 mt-10 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, id, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2
      id={id}
      className="mb-4 mt-8 font-serif text-2xl italic font-normal tracking-tight text-foreground sm:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, id, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3
      id={id}
      className="mb-3 mt-6 font-serif text-xl italic font-normal tracking-tight text-foreground sm:text-2xl"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, id, ...props }: React.ComponentPropsWithoutRef<'h4'>) => (
    <h4
      id={id}
      className="mb-2 mt-5 font-serif text-lg font-medium text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="my-4 text-[15.5px] leading-[1.75] text-foreground/85" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link
          href={href}
          className="font-medium text-blue-600 underline decoration-blue-500/40 underline-offset-4 transition-colors hover:decoration-blue-500 dark:text-blue-400"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600 underline decoration-blue-500/40 underline-offset-4 transition-colors hover:decoration-blue-500 dark:text-blue-400"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className="my-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-foreground/85" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className="my-4 list-decimal space-y-1.5 pl-6 text-[15px] leading-relaxed text-foreground/85" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-2 border-blue-500/50 bg-muted/20 py-2 pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props: React.ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-border" {...props} />
  ),
  table: ({ children, ...props }: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full divide-y divide-border text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-muted-foreground" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.ComponentPropsWithoutRef<'th'>) => (
    <th className="px-4 py-3 text-left font-medium" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.ComponentPropsWithoutRef<'td'>) => (
    <td className="px-4 py-3 text-foreground/80 border-t border-border/50" {...props}>
      {children}
    </td>
  ),
  code: ({ className, children, ...props }: React.ComponentPropsWithoutRef<'code'>) => {
    // If it's inline code without language className
    if (!className) {
      return (
        <code
          className="rounded border border-border/70 bg-muted/50 px-1.5 py-0.5 font-mono text-[13px] text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }: { children: any }) => {
    // Check if children is a code block
    if (children?.props) {
      const className = children.props.className || '';
      const langMatch = className.match(/language-([a-zA-Z0-9_+#-]+)/);
      const lang = langMatch ? langMatch[1] : (children.props['data-language'] || '');
      const rawCode = children.props.children;
      const code =
        typeof rawCode === 'string'
          ? rawCode
          : Array.isArray(rawCode)
            ? rawCode.join('')
            : String(rawCode || '');
      const filename = children.props.filename || children.props['data-filename'];
      return <CodeSnippet code={code} lang={lang || 'text'} filename={filename} />;
    }
    // Generic pre fallback
    return (
      <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-card/60 p-4 font-mono text-xs">
        {children}
      </pre>
    );
  },
  // Custom MDX Elements
  Callout,
  Steps,
  Step,
  Badge,
  Tabs,
  TabItem,
  FileTree,
  FileTreeItem,
  YouTube,
  ImageComparison,
  CodeSandbox,
  Demo,
  AnimatedBox,
};
