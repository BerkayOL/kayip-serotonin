import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const alt = 'Kayıp Serotonin — Resmi Web Sitesi';
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
          background: '#0d0b0b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Ambient background glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '30%',
            width: '500px',
            height: '300px',
            background: 'rgba(163, 82, 82, 0.28)',
            filter: 'blur(120px)',
            borderRadius: '50%',
          }}
        />

        {/* Content Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              letterSpacing: '8px',
              textTransform: 'uppercase',
              color: 'rgba(232, 221, 208, 0.6)',
              marginBottom: '24px',
            }}
          >
            YAPAY ZEKA MÜZİK PROJESİ
          </span>

          <h1
            style={{
              fontSize: '76px',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: '#ede5db',
              margin: '0 0 16px 0',
              lineHeight: 1,
            }}
          >
            Kayıp Serotonin
          </h1>

          <p
            style={{
              fontSize: '26px',
              fontStyle: 'italic',
              color: 'rgba(232, 221, 208, 0.85)',
              margin: '0 0 40px 0',
              maxWidth: '800px',
            }}
          >
            &ldquo;Sen beni bir gecede darmadağın bıraktın!&rdquo;
          </p>

          {/* Badge & Founders */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '12px 32px',
              border: '1px solid rgba(232, 221, 208, 0.25)',
              background: 'rgba(28, 23, 23, 0.8)',
              borderRadius: '9999px',
            }}
          >
            <span style={{ fontSize: '18px', color: '#ede5db', fontWeight: 500 }}>
              Berkay Ay &amp; Halim Parlak
            </span>
            <span style={{ color: '#a35252' }}>•</span>
            <span style={{ fontSize: '16px', color: '#a35252', fontWeight: 600 }}>
              kayipserotonin.com.tr
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
