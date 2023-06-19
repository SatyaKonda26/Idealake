/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["192.168.1.252", "https://nodeprojects.idealake.com/"],
    unoptimized: true,
  },
  // output: "export",
  // basePath: "/idealake",
  // assetPrefix: "/idealake/",
  // publicRuntimeConfig: {
  //   //  Add your public asset prefix here
  //   assetPrefix: "/idealake/",
  // },
};

module.exports = nextConfig;
