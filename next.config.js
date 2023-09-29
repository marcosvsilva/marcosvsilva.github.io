/** @type {import('next').NextConfig} */

const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
  experimental: {
    output: 'export',
  },
};

module.exports = nextConfig;
