/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  async rewrites() {
    return [
      {
        source:'/api/:path*' ,
        destination: 'https://brasilarco.org.br/:path*',
      },
    ]
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['brasilarco.org.br']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
