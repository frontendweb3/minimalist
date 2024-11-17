/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')
const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true
};

module.exports = withVercelToolbar(withContentlayer(nextConfig))
