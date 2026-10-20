/** @type {import('next').NextConfig} */
const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL || 'https://blog.abhinandanmishra.in';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    if (!blogUrl) return [];
    return [
      {
        source: '/blog',
        destination: blogUrl,
      },
      {
        source: '/blog/:path*',
        destination: `${blogUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
