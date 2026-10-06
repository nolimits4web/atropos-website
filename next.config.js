const atroposPkg = require('atropos/package.json');

module.exports = {
  reactStrictMode: true,
  output: 'export',
  experimental: { esmExternals: true },
  env: {
    atroposVersion: atroposPkg.version,
    atroposReleaseDate: atroposPkg.releaseDate,
  },
};
