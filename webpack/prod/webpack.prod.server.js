const path = require('path');
const webpack  = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.prod.common.js');


module.exports  = {
  ...baseConfig,
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: [
      "@babel/polyfill",
      path.resolve(__dirname, '../', '../', 'src', 'server.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../', '../', 'build'),
    filename: 'server.js',
  },
  devServer: {
    port: 3002
  },
  node: {
    console: true,
    global: false,
    process: false,
    Buffer: false,
    __filename: false
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
