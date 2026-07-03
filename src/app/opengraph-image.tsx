import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
          color: '#fafafa',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: 22,
            letterSpacing: '0.25em',
            color: '#8e9196',
            marginBottom: 32,
          }}
        >
          <span>MATEO COCA</span>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#6366f1',
            }}
          />
          <span>PORTFOLIO_OPS.V3</span>
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>SYSTEMS ANALYST</span>
          <span style={{ color: '#8e9196' }}>&amp; DEVELOPER.</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginTop: 48,
            fontSize: 24,
            color: '#8e9196',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 6,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#10b981',
              }}
            />
            SALTA, ARGENTINA
          </span>
          <span
            style={{
              padding: '8px 20px',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 6,
            }}
          >
            APIs / INTERNAL OPS / SQL SYSTEMS
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
