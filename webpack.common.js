const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['bootstrap', 'angular']
    },
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].bundle.js'
        //filename: '[name].[chunkhash].bundle.js'
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],
    /*optimization: {
        splitChunks: {
        chunks: "all",
          minSize: 800000
      }
    },*/
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
};
