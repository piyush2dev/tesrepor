const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode:'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, '../', 'src')
        ],
        query: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader:'file-loader',
            options: {
              name: '[name].html'
            },
          },
          'file-loader',
          "html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
  //   new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    // new CleanWebpackPlugin(['build', 'public'])
    // new HtmlWebpackPlugin({
    //   template: 'src/client/page/index.hbs'
    // })
  ],
  devtool: 'cheap-module-source-map',

}