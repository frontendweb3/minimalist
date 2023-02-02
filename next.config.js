/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/minimalist',
  images: {
    unoptimized : true
  }
}

module.exports = withContentlayer(nextConfig)
