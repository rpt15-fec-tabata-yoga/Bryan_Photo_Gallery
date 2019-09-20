var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const CompressionPlugin = require('compression-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },

  // plugins: [
  //   new CompressionPlugin({
  //     test: /\.(js|css)$/,
  //     asset: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     deleteOriginalAssets: true
  //   })
  // ]
};
