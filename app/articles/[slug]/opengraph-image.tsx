import { ImageResponse } from 'next/og';
import { getArticleBySlug, getAllSlugs } from '@/lib/mdx';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  const title = article?.title || 'Technical Article';
  const category = article?.category || 'Engineering';
  const readTime = article?.readTimeInMinutes ? `${article.readTimeInMinutes} min read` : '5 min read';
  const date = article?.date || '2026';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0d14',
          padding: '64px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#f8fafc',
          position: 'relative',
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.04) 2%, transparent 0%)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top bar: Category + read time */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#60a5fa',
                fontFamily: 'monospace',
              }}
            >
              {category}
            </div>
            <span
              style={{
                fontSize: '16px',
                color: '#94a3b8',
                fontFamily: 'monospace',
              }}
            >
              · {date} · {readTime}
            </span>
          </div>

          <span
            style={{
              fontSize: '16px',
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            Technical Deep Dive
          </span>
        </div>

        {/* Center: Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1050px',
          }}
        >
          <div
            style={{
              fontSize: title.length > 55 ? '48px' : '60px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom bar: Author & Site info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            paddingTop: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 700,
                color: '#60a5fa',
              }}
            >
              AM
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                Abhinandan Mishra
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                  fontFamily: 'monospace',
                }}
              >
                SDE-II @ Project44 · Co-Founder @ SDE Forge
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: '18px',
              color: '#94a3b8',
              fontFamily: 'monospace',
            }}
          >
            abhinandanmishra.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
