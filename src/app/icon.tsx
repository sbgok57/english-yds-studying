import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0284c7 100%)',
          borderRadius: '112px',
          border: '12px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            fontSize: 210,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-8px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          DM
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: '#38bdf8',
            letterSpacing: '6px',
            marginTop: '-10px',
          }}
        >
          YDS·YDT
        </div>
      </div>
    ),
    { ...size }
  );
}
