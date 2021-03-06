const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
});

module.exports = {
  webpack(config) {
    config.resolve.alias = {
       ...config.resolve.alias,
      '@': path.resolve(__dirname, './')
    }
    return config
  }
}
