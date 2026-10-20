import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Abhinandan Mishra — SDE-II · Distributed Systems · Developer Tools';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Subtle grid accent background */}
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

        {/* Top status indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span
            style={{
              fontSize: '18px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              fontFamily: 'monospace',
            }}
          >
            Systems · Research · Always Building
          </span>
        </div>

        {/* Center content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Hey, I am Abhinandan
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#60a5fa',
              fontStyle: 'italic',
              lineHeight: 1.3,
            }}
          >
            systems, distributed platforms, and developer tools. always building.
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#94a3b8',
              lineHeight: 1.5,
              marginTop: '8px',
            }}
          >
            SDE-II @ Project44 · Co-Founder @ SDE Forge · Creator @ CodePad
          </div>
        </div>

        {/* Bottom badges & domain */}
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
              gap: '16px',
            }}
          >
            {['Distributed Systems', 'Low-Level Design', 'Interactive Simulators', 'LeetCode Knight'].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    fontSize: '15px',
                    color: '#cbd5e1',
                    fontFamily: 'monospace',
                  }}
                >
                  {tag}
                </div>
              ),
            )}
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontWeight: 600,
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
