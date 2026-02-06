const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/poggio-lab-website' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/poggio-lab-website/' : undefined,
};

module.exports = nextConfig;
