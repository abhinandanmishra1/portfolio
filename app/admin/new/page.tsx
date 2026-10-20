'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Copy,
  Check,
  Download,
  FileText,
  Eye,
  Code2,
  Sparkles,
} from 'lucide-react';

export default function NewArticlePage() {
  const [title, setTitle] = React.useState(
    'Microservice Event Choreography with Apache Kafka',
  );
  const [slug, setSlug] = React.useState(
    'microservice-event-choreography-kafka',
  );
  const [brief, setBrief] = React.useState(
    'How to design resilient event-driven architectures with Kafka topic partitions, consumer groups, and outbox patterns.',
  );
  const [tags, setTags] = React.useState('Kafka, System Design, Microservices');
  const [series, setSeries] = React.useState('System Design');
  const [readTime, setReadTime] = React.useState(10);
  const [content, setContent] = React.useState(`When orchestrating microservices in distributed applications, synchronous REST calls introduce tight coupling and cascading latency.

In this article, we explore how event choreography using Apache Kafka eliminates point-to-point dependencies while guaranteeing at-least-once message delivery.

---

## The Outbox Pattern

To prevent dual-write anomalies between relational database updates and Kafka publishing, use the Transactional Outbox Pattern:

\`\`\`sql
-- In the same ACID transaction:
INSERT INTO orders (id, user_id, amount) VALUES (1, 'user-101', 250);
INSERT INTO outbox_events (aggregate_id, event_type, payload)
VALUES (1, 'OrderCreated', '{"amount": 250}');
\`\`\`

A Debezium CDC connector reads the outbox table via Postgres Write-Ahead Log (WAL) and publishes directly to Kafka.

---

## Consumer Group Partitioning

Kafka assigns each topic partition to exactly one consumer within a group, ensuring strict ordering per partition key:

\`\`\`typescript
const consumer = kafka.consumer({ groupId: 'order-processing-group' });
await consumer.subscribe({ topic: 'orders', fromBeginning: false });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log(\`Received event on partition \${partition}: \${message.value?.toString()}\`);
  },
});
\`\`\`
`);

  const [activeTab, setActiveTab] = React.useState<'edit' | 'raw' | 'preview'>('edit');
  const [copied, setCopied] = React.useState(false);

  // Auto-slugify
  const handleTitleChange = (val: string) => {
    setTitle(val);
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(generatedSlug);
  };

  const tagList = tags
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);

  const fullMdx = `---
title: "${title}"
brief: "${brief}"
publishedAt: "${new Date().toISOString()}"
readTimeInMinutes: ${readTime}
tags:
${tagList.map((t) => `  - name: "${t}"\n    slug: "${t.toLowerCase().replace(/\s+/g, '-')}"`).join('\n')}
series:
  name: "${series}"
  slug: "${series.toLowerCase().replace(/\s+/g, '-')}"
author:
  name: "Abhinandan Mishra"
  profilePicture: "https://github.com/abhinandanmishra1.png"
---

${content}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullMdx);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadFile = () => {
    const blob = new Blob([fullMdx], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${slug || 'article'}.mdx`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = content.split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-5">
        <div>
          <Link
            href="/admin"
            className="group mb-2 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
            <span>back to admin overview</span>
          </Link>
          <h1 className="font-serif text-3xl italic font-normal tracking-tight text-foreground">
            Author MDX Article
          </h1>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {wordCount} words · ~{Math.ceil(wordCount / 200)} min read
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={copyToClipboard}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-medium text-foreground transition hover:border-foreground/40"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span>Copied MDX</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy MDX</span>
              </>
            )}
          </button>

          <button
            onClick={downloadFile}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-1.5 font-mono text-xs font-medium text-white shadow-sm transition hover:bg-blue-500"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download .mdx</span>
          </button>
        </div>
      </div>

      {/* Metadata Form */}
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card/40 p-6 sm:grid-cols-2">
        <div className="space-y-1 sm:col-span-2">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Article Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 font-serif text-lg text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="e.g. Distributed Consensus in Raft"
          />
        </div>

        <div className="space-y-1">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Slug (File Name)
          </label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 font-mono text-xs text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="distributed-consensus-raft"
          />
        </div>

        <div className="space-y-1">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Series
          </label>
          <input
            type="text"
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 font-mono text-xs text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="System Design"
          />
        </div>

        <div className="space-y-1">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 font-mono text-xs text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="Kafka, System Design, Microservices"
          />
        </div>

        <div className="space-y-1">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Estimated Read Time (Minutes)
          </label>
          <input
            type="number"
            value={readTime}
            onChange={(e) => setReadTime(Number(e.target.value))}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 font-mono text-xs text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="10"
          />
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Brief Summary (SEO & Card description)
          </label>
          <textarea
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            rows={2}
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="A short punchy summary for the essay..."
          />
        </div>
      </div>

      {/* Editor & Preview Tabs */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-border/70 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('edit')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition ${
              activeTab === 'edit'
                ? 'bg-muted text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Write Markdown</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('raw')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition ${
              activeTab === 'raw'
                ? 'bg-muted text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Full MDX File</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition ${
              activeTab === 'preview'
                ? 'bg-muted text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Preview</span>
          </button>
        </div>

        {activeTab === 'edit' && (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            className="w-full rounded-2xl border border-border bg-card/40 p-4 font-mono text-sm leading-relaxed text-foreground focus:border-blue-500 focus:outline-none"
            placeholder="Write your article body in Markdown / MDX..."
          />
        )}

        {activeTab === 'raw' && (
          <pre className="overflow-x-auto rounded-2xl border border-border bg-[#0d1117] p-5 font-mono text-xs leading-relaxed text-zinc-300">
            {fullMdx}
          </pre>
        )}

        {activeTab === 'preview' && (
          <div className="rounded-2xl border border-border bg-card/30 p-6 sm:p-8 space-y-4">
            <h1 className="font-serif text-3xl italic font-normal text-foreground">
              {title}
            </h1>
            <p className="font-mono text-xs text-muted-foreground">
              {readTime} min read · {series}
            </p>
            <div className="whitespace-pre-wrap text-[15px] leading-relaxed text-foreground/85">
              {content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
