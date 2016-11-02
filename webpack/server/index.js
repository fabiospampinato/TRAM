
/* IMPORT */

let path = require ( 'path' ),
    fs = require ( 'fs' ),
    webpack = require ( 'webpack' ),
    BundleAnalyzerPlugin = require ( 'webpack-bundle-analyzer').BundleAnalyzerPlugin,
    ForkCheckerPlugin = require ( 'awesome-typescript-loader' ).ForkCheckerPlugin;

/* EXTERNALS */

let externals = {};
fs.readdirSync ( 'node_modules' )
  .filter ( function ( x ) {
    return ['.bin'].indexOf ( x ) === -1;
  })
  .forEach ( function ( mod ) {
    externals[mod] = 'commonjs ' + mod;
  });

/* CONFIG */

let config = {
  entry: './src/server',
  externals: externals,
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.resolve ( './build/public' ),
    publicPath: '/public/',
    filename: '../server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }, {
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        loaders: ['isomorphic-style-loader', 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]']
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }]
  },
  plugins: [
    new ForkCheckerPlugin (),
    new webpack.DllReferencePlugin ({
      name: path.resolve ( './build/server.vendor.js' ),
      context: __dirname,
      manifest: require ( '../../build/server.vendor.json' ),
      sourceType: 'commonjs2'
    }),
    // new BundleAnalyzerPlugin ({
    //   generateStatsFile: true,
    //   openAnalyzer: false
    // })
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
};

/* EXPORT */

module.exports = config;
