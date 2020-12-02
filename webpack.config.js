const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const CssMinimizerPlugin = require(`css-minimizer-webpack-plugin`);
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === `development`;
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: `./src/index.html`,
    minify: {
      collapseWhitespace: isProd
    }
  }),
  new MiniCssExtractPlugin({
    filename: `./css/${filename('css')}`
  }),
];

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, `dist`)
  },
  devtool: isDev ? `source-map` : false,
  devServer: {
    contentBase: path.resolve(__dirname, `dist`),
    open: true,
    hot: true,
    port: 8081
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [`babel-loader`]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, `css-loader`, `postcss-loader`]
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      }
    ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
}