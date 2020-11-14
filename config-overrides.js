const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const wasmFile = resolve(
  __dirname,
  'node_modules',
  'mediainfo.js',
  'dist'
);
const dist = resolve('build', 'static', 'js');

// template from https://www.npmjs.com/package/react-app-rewired
module.exports = {
  webpack: function(config, env) {
    config.plugins.push(new CopyPlugin({
      patterns: [
        { from: wasmFile, to: dist },
      ],
    }),)
    return config;
  },
}