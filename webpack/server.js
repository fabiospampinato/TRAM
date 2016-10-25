
/* IMPORT */

let path = require ( 'path' ),
    fs = require ( 'fs' );

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
  externals: externals,
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: './src/server',
  output: {
    path: path.resolve ( './build/public' ),
    filename: '../server.js',
    publicPath: '/public/',
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
  plugins: [],
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
