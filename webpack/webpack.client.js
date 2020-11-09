const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.common.js');

const config = {
  ...baseConfig,
  name: 'client',
  target: 'web',
  entry: {
    client: [
      '@babel/polyfill',
      path.resolve(__dirname, '../', 'src', 'client', 'client.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../', 'public'),
    filename: 'js/[name].js',
  },
  devServer: {
    port: 3001,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({build
  //     template: path.resolve(__dirname, 'src', 'index.html')
  //   })
  // ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: (module) => /node_modules/.test(module.resource),
          enforce: true,
        },
      },
    },
  },
  devtool: 'cheap-module-source-map',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

module.exports = config;
