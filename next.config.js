const withTM = require('next-transpile-modules')(['atropos', 'strip-indent']);
const atroposPkg = require('atropos/package.json');

module.exports = withTM({
  reactStrictMode: true,
  env: {
    atroposVersion: atroposPkg.version,
    atroposReleaseDate: atroposPkg.releaseDate,
  },
});
