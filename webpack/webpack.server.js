const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.common.js');

const config = {
  ...baseConfig,
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: [
      '@babel/polyfill',
      path.resolve(__dirname, '../', 'src', 'server.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'js/server.js',
  },
  devServer: {
    port: 3002,
  },
  node: {
    console: true,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
  },
};

module.exports = config;
