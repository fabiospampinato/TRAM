
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' ),
    BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer').BundleAnalyzerPlugin;

/* CONFIG */

let config = {
  entry: {
    vendor: ['./src/client/vendor.ts']
  },
  resolve: {
    alias: {
      'lodash.assign': 'lodash/assign',
      'lodash.clonedeep': 'lodash/clonedeep',
      'lodash.countby': 'lodash/countby',
      'lodash.flatten': 'lodash/flatten',
      'lodash.forown': 'lodash/forown',
      'lodash.has': 'lodash/has',
      'lodash.identity': 'lodash/identity',
      'lodash.isequal': 'lodash/isequal',
      'lodash.isnull': 'lodash/isnull',
      'lodash.isnumber': 'lodash/isnumber',
      // 'lodash.isobject': 'lodash/isobject',
      'lodash.isstring': 'lodash/isstring',
      'lodash.isundefined': 'lodash/isundefined',
      'lodash.mapvalues': 'lodash/mapvalues',
      'lodash.merge': 'lodash/merge',
      'lodash.pick': 'lodash/pick'
    }
  },
  output: {
    path: path.resolve ( './build/public' ),
    publicPath: '/public/',
    filename: 'js/client.[name].js',
    library: '[name]',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DllPlugin ({
      path: './build/client.vendor.json',
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
