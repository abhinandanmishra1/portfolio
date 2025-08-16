/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abhicdn.netlify.app',
      },
    ],
  },
};

module.exports = nextConfig;
