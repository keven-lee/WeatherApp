var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/www'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!postcss!stylus?paths=node_modules'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-2', 'react'],
        },
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },    
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

