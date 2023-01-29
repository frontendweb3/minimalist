/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  reactStrictMode: true,
}
 
module.exports = withContentlayer(nextConfig)
