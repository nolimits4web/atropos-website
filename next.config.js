const withTM = require('next-transpile-modules')(['mariko', 'strip-indent']);
const marikoPkg = require('mariko/package.json');

module.exports = withTM({
  reactStrictMode: true,
  env: {
    marikoVersion: marikoPkg.version,
    marikoReleaseDate: marikoPkg.releaseDate,
  },
});
