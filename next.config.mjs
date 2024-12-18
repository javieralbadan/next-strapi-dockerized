/** @type {import('next').NextConfig} */

// TODO: Add pattern to PROD from env process 
// const PROD_IMAGES = {
//   protocol: 'https',
//   hostname: 'api.example.com',
//   pathname: '/uploads/**',
// };

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'host.docker.internal',
        port: '1337',
        pathname: '/uploads/**',
      }
    ]
  },
}

export default nextConfig;
