import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #0284c7 100%)',
          borderRadius: '40px',
        }}
      >
        <div style={{ fontSize: 78, fontWeight: 900, color: '#ffffff' }}>DM</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: '#38bdf8', letterSpacing: '2px' }}>
          MASTER
        </div>
      </div>
    ),
    { ...size }
  );
}
