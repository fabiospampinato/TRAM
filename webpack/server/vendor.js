
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' ),
    BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

/* ALIAS */

let alias = {},
    lodashMethods = ['assign', 'clonedeep', 'countby', 'flatten', 'forown', 'has', 'identity', 'isequal', 'isnull', 'isnumber', 'isundefined', 'mapvalues', 'merge', 'pick'];

lodashMethods.forEach ( method => alias[`lodash.${method}`] = `lodash/${method}` );

/* CONFIG */

let config = {
  entry: ['./src/server/vendor.ts'],
  resolve: { alias },
  output: {
    path: path.resolve ( 'dist' ),
    filename: 'server.vendor.js',
    library: 'vendor',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: path.resolve ( 'dist/meta/server.vendor.json' ),
      name: 'vendor',
      context: __dirname
    }),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    //   statsFilename: '../../meta/stats.json'
    // })
  ]
};

/* EXPORT */

module.exports = config;
