const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['urlencoded-body-parser']);

const processEnv = process.env;

const NEXT_CONFIG = {
  distDir: './.next',
  swcMinify: true,

  webpack: (config) => {
    config.resolve.modules = [...config.resolve.modules, '../src'];
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  env: {},
};

const PLUGINS = [[withTM]];

module.exports = withPlugins(PLUGINS, NEXT_CONFIG);