/** @type {import("next").NextConfig} */
const nextConfig = {
    output: 'standalone',
    assetPrefix: process.env.CDN_URI,
    reactStrictMode: true,
};

module.exports = nextConfig;
