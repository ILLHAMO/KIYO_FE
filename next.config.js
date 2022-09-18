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

  images: {
    domains: ['kiyoimage.s3.ap-northeast-2.amazonaws.com', 'k.kakaocdn.net'],
  },
  env: {
    KIYO_NODE_ENV: processEnv.KIYO_NODE_ENV,
    KIYO_CLIENT_API_URI: processEnv.KIYO_CLIENT_API_URI,
    KIYO_API_END_POINT: processEnv.KIYO_API_END_POINT,
  },
};

const PLUGINS = [[withTM]];

module.exports = withPlugins(PLUGINS, NEXT_CONFIG);
