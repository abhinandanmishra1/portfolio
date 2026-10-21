import * as React from 'react';
import { codeToHtml } from 'shiki';
import { CopyButton } from './copy-button';

interface CodeSnippetProps {
  code: string;
  lang?: string;
  filename?: string;
}

function normalizeLang(lang?: string): string {
  if (!lang) return 'text';
  const clean = lang.trim().toLowerCase();
  const aliasMap: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    tsx: 'tsx',
    jsx: 'jsx',
    py: 'python',
    sh: 'bash',
    shell: 'bash',
    zsh: 'bash',
    cpp: 'cpp',
    'c++': 'cpp',
    cs: 'csharp',
    'c#': 'csharp',
    yml: 'yaml',
    md: 'markdown',
  };
  return aliasMap[clean] || clean;
}

function getDisplayLanguage(lang?: string): string {
  if (!lang) return '';
  const clean = lang.trim().toLowerCase();
  if (clean === 'text' || clean === 'plaintext') return '';
  const displayMap: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    tsx: 'tsx',
    jsx: 'jsx',
    py: 'python',
    sh: 'bash',
    shell: 'bash',
    zsh: 'bash',
    cpp: 'c++',
    'c++': 'c++',
    cs: 'c#',
    'c#': 'c#',
    yml: 'yaml',
    yaml: 'yaml',
    md: 'markdown',
    mdx: 'mdx',
    sql: 'sql',
    html: 'html',
    css: 'css',
    json: 'json',
    java: 'java',
    lua: 'lua',
    xml: 'xml',
  };
  return displayMap[clean] || clean;
}

export async function CodeSnippet({
  code,
  lang = 'text',
  filename,
}: CodeSnippetProps) {
  const normalizedLang = normalizeLang(lang);
  const displayLang = getDisplayLanguage(lang);
  const cleanCode = code.replace(/\n$/, '');

  let html = '';
  try {
    html = await codeToHtml(cleanCode, {
      lang: normalizedLang,
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      defaultColor: false,
    });
  } catch {
    try {
      html = await codeToHtml(cleanCode, {
        lang: 'text',
        themes: {
          light: 'github-light',
          dark: 'github-dark-default',
        },
        defaultColor: false,
      });
    } catch {
      html = `<pre class="shiki"><code>${cleanCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
    }
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl border border-border bg-card/60 text-sm">
      {/* Code block header bar */}
      <div className="flex h-10 items-center justify-between gap-2 border-b border-border/70 bg-muted/30 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-muted-foreground">
          {filename ? (
            <span className="truncate font-medium text-foreground" title={filename}>
              {filename}
            </span>
          ) : (
            <div className="flex shrink-0 items-center gap-1.5 opacity-60">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
          )}
        </div>

        {/* Right side: language label immediately left of the copy button */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {displayLang && (
            <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">
              {displayLang}
            </span>
          )}
          <CopyButton text={cleanCode} />
        </div>
      </div>

      {/* Code body */}
      <div
        className="overflow-x-auto p-3 sm:p-4 font-mono text-[12px] sm:text-[13.5px] leading-relaxed [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
