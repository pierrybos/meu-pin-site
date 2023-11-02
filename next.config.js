/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['fakeimg.pl'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
