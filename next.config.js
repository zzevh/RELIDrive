/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/w-trakcie-budowy',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 