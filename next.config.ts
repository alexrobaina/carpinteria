// next.config.js
const withSitemap = require('next-sitemap');
/** @type {import('next').NextConfig} */
const nextConfig = {
  darkMode: 'class',
  reactStrictMode: true,
  ...withSitemap
}

export default nextConfig
