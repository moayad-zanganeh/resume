/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  eslint: {
    // خطاهای ESLint را در هنگام build نادیده بگیر
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
