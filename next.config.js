/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  basePath: "/callmewendytest",
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
