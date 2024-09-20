const withLess = require('next-with-less');
const withTM = require('next-transpile-modules');

// Modules that will be transpiled
const modulesToTranspile = ['rc-picker', 'rc-pagination', 'rc-util', '@ant-design/icons'];

/** @type {import('next').NextConfig} */
const nextConfig = withTM(modulesToTranspile)(
  withLess({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          '@primary-color': '#1890ff',
        },
        javascriptEnabled: true,
      },
    },
  })
);

module.exports = nextConfig;
