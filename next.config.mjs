/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  experimental: {
    serverComponentsExternalPackages: ["msedge-tts", "nodemailer"],
    outputFileTracingIncludes: {
      "/api/**/*": ["./prisma/dev.db", "./prisma/schema.prisma"],
    },
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
