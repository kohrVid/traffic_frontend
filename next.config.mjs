/** @type {import('next').NextConfig} */
const env = process.env.ENV;
const apiDomain = process.env.API_DOMAIN;

const rewriteEndpoints = [
  {
    source: '/api/:path*',
    destination: `${apiDomain}/:path*`,
  },
];

const nextConfig = {
  pageExtensions: ['js', 'jsx'],
  reactStrictMode: true,
  transpilePackages: ['react-simple-maps'],
  async rewrites() {
    return (env.toLowerCase() !== 'production') ? (
      rewriteEndpoints
    ) : (
       []
    );
  },
};

export default nextConfig;
