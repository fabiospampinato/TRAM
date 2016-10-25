
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' ),
    ManifestPlugin = require ( 'webpack-manifest-plugin' ),
    ExtractTextPlugin = require ( 'extract-text-webpack-plugin' );

/* CONFIG */

let config = {
  bail: true,
  resolve: {
    modules: [
      path.resolve ( __dirname ),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: {
    app: './src/client',
    vendor: [
      './src/vendor',
      'react',
      'react-dom',
      'react-router',
      'react-helmet',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-connect',
      'redux-thunk'
    ]
  },
  output: {
    path: path.resolve ( './build/public' ),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        include: path.resolve ( './src' ),
        loader: ExtractTextPlugin.extract ( 'style-loader', 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]' )
      }, {
        test: /\.css$/,
        exclude: path.resolve ( './src' ),
        loader: ExtractTextPlugin.extract ( 'style-loader', 'css-loader' )
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file?name=fonts/[hash].[ext]'
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin (),
    new webpack.optimize.DedupePlugin (),
    new webpack.optimize.CommonsChunkPlugin ({
      name: 'vendor',
      filename: 'js/[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin ({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin ( 'css/[name].[hash].css' ),
    new ManifestPlugin ({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin ({
      'process.env': {
        BROWSER: JSON.stringify ( true ),
        NODE_ENV: JSON.stringify ( 'production' )
      }
    })
  ]
};

/* EXPORT */

module.exports = config;
