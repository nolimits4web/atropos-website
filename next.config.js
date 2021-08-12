const atroposPkg = require('atropos/package.json');

module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  env: {
    atroposVersion: atroposPkg.version,
    atroposReleaseDate: atroposPkg.releaseDate,
  },
};
