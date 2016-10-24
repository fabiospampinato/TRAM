
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' ),
    ManifestPlugin = require ( 'webpack-manifest-plugin' );

/* CONFIG */

let config = {
  devtool: 'eval',
  debug: true,
  resolve: {
    root: path.resolve ( __dirname ),
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './src/client',
      './src/vendor'
    ]
  },
  output: {
    path: path.resolve ( './build/public' ),
    publicPath: '/public/',
    filename: 'js/[name].js',
    pathinfo: true
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loader: 'react-hot-loader/webpack!ts'
      }, {
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        include: path.resolve ( './src' ),
        loaders: ['style-loader', 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]']
      }, {
        test: /\.css$/,
        exclude: path.resolve ( './src' ),
        loaders: ['style-loader', 'css-loader']
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
    new ManifestPlugin ({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin ({
      'process.env': {
        BROWSER: JSON.stringify ( true ),
        NODE_ENV: JSON.stringify ( 'development' )
      }
    }),
    new webpack.HotModuleReplacementPlugin (),
    new webpack.NoErrorsPlugin ()
  ]
};

/* EXPORT */

module.exports = config;
