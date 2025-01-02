/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = {
  // remove this
  // output: 'export',
  images: {
    domains: ['images.unsplash.com'], // Allow Unsplash domain
  },
};