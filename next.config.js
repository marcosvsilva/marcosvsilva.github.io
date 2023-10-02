/** @type {import('next').NextConfig} */

module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
  output: 'export', // This line enables static HTML export
};
