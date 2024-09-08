/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  async rewrites() {
    return [
      {
        source:'/api/:path*' ,
        destination: 'https://sport-plataform.vercel.app/:path*',
      },
    ]
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['sport-plataform.vercel.app']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
