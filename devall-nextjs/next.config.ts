import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React Compiler */
  reactCompiler: true,
  
  /* Output configuration */
  output: 'standalone',
  
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  /* Compression */
  compress: true,
  
  /* PoweredBy header */
  poweredByHeader: false,
  
  /* Strict mode */
  reactStrictMode: true,
  
  /* TypeScript during builds */
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
