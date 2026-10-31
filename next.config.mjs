/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Derleme sırasında gerçek tip ve lint doğrulamasını zorunlu kıl (hata gizleme kapalı)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_URL ||
      process.env.englishydsstudying_NEXT_PUBLIC_SUPABASE_URL ||
      "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.englishydsstudying_SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_PUBLISHABLE_KEY ||
      process.env.englishydsstudying_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      "",
  },
  serverExternalPackages: ["msedge-tts", "nodemailer"],
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'english-yds-studying.vercel.app' }],
        destination: 'https://dil-master.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/taktikler',
        destination: '/tactics',
        permanent: false,
      },
      {
        source: '/taktik',
        destination: '/tactics',
        permanent: false,
      },
      {
        source: '/soru-bankasi',
        destination: '/exams',
        permanent: false,
      },
      {
        source: '/sorular',
        destination: '/exams',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/kelime', destination: '/vocabulary' },
      { source: '/gramer', destination: '/grammar' },
      { source: '/denemeler', destination: '/exams' },
      { source: '/planlar', destination: '/study-plans' },
    ];
  },
};

export default nextConfig;
