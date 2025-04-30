// next.config.js
const withSitemap = require('next-sitemap');

/** @type {import('next').NextConfig} */
const nextConfig = {
  darkMode: 'class',
  reactStrictMode: true,
  images: {
    domains: ['arcarpinteria.vercel.app'],
  },
  ...withSitemap,
}

export default nextConfig
