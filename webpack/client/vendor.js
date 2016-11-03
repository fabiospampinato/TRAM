
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
  entry: ['./src/client/vendor.ts'],
  resolve: { alias },
  output: {
    path: path.resolve ( 'dist/public/js' ),
    filename: 'client.vendor.js',
    library: 'vendor',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: path.resolve ( 'dist/meta/client.vendor.json' ),
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
