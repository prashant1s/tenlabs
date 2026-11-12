import { ImageResponse } from 'next/og';
import { insightPosts } from '@/lib/data';

// Next.js config for the image size and type
export const runtime = 'edge';
export const alt = 'TenLabs Insight';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  const title = post?.title || 'Strategic Insights & Digital Growth';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1F3D2B', // Dark background
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          borderTop: '16px solid #8B5CF6', // Brand blue accent line
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              color: '#8B5CF6',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            TenLabs
          </span>
          <span style={{ color: '#C9BDA6', fontSize: 32, fontWeight: 500 }}>
            / Insights
          </span>
        </div>

        {/* Dynamic Post Title */}
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Bottom Website Tag */}
        <div style={{ display: 'flex', color: '#D8CDB8', fontSize: 28 }}>
          tenlabs.online
        </div>
      </div>
    ),
    { ...size }
  );
}
