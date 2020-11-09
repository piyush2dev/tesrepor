const path = require('path');
const baseConfig = require('./webpack.prod.common.js');


module.exports = {
  ...baseConfig,
  target: 'web',
  entry: {
    client:[
      "@babel/polyfill",
      path.resolve(__dirname, '../', '../', 'src', 'client', 'client.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../', '../','public'),
    filename: '[name].js',
  },
  devServer: {
    port: 3001
  },
  // plugins: [
  //   new HtmlWebpackPlugin({build
  //     template: path.resolve(__dirname, 'src', 'index.html')
  //   })
  // ],
  
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
