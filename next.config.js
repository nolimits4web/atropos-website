const withTM = require('next-transpile-modules')(['mariko', 'ssr-window']);

module.exports = withTM({
  reactStrictMode: true,
});
