
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' ),
    BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer').BundleAnalyzerPlugin;

/* CONFIG */

let config = {
  entry: {
    vendor: ['./src/server/vendor.ts']
  },
  // target: 'node',
  output: {
    path: path.resolve ( './build' ),
    // publicPath: '/public/',
    filename: 'server.vendor.js',
    library: 'vendor',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: './build/server.vendor.json',
      name: 'vendor',
      context: __dirname
    }),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false
    // })
  ]
};

/* EXPORT */

module.exports = config;
