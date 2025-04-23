// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';

// Pass the path to your i18n configuration file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
};

export default withNextIntl(nextConfig);
