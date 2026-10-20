import * as React from 'react';
import { codeToHtml } from 'shiki';
import { CopyButton } from './copy-button';

interface CodeSnippetProps {
  code: string;
  lang?: string;
  filename?: string;
}

export async function CodeSnippet({
  code,
  lang = 'text',
  filename,
}: CodeSnippetProps) {
  let html = '';
  try {
    html = await codeToHtml(code.trim(), {
      lang: lang || 'text',
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      defaultColor: false,
    });
  } catch {
    html = `<pre><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  }

  return (
    <div className="relative my-6 overflow-hidden rounded-xl border border-border bg-card/60 text-sm">
      {filename && (
        <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          <span>{filename}</span>
          {lang && <span className="text-[10px] uppercase tracking-wider">{lang}</span>}
        </div>
      )}
      <CopyButton text={code} />
      <div
        className="overflow-x-auto p-4 font-mono text-[13.5px] leading-relaxed [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
