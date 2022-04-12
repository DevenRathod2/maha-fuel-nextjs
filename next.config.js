/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
      return [
        {
          source: '/',
          destination: 'https://fule-api-india.herokuapp.com/:path*',
        },
      ]
    },
};