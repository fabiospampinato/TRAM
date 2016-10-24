
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' );

/* CONFIGURATOR */

let configurator = function ( karma ) {

  let isCI = process.env.NODE_ENV === 'ci',
      isPhantom = !!process.env.PHANTOM;

  let config = {
    frameworks: ['mocha', 'chai', 'es6-shim'],
    browsers: ['PhantomJS'],
    files: ['./webpack/test.js'],
    preprocessors: {
      '**/*.ts': ['coverage'],
      '**/*.tsx': ['coverage'],
      './webpack/test.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: []
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: path.resolve ( __dirname ),
        modulesDirectories: [
          './src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx']
      },
      module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts'
          }, {
            test: /\.json$/,
            loader: 'json-loader'
          }, {
            test: /\.css$/,
            include: path.resolve ( './src' ),
            loaders: ['style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]']
          }, {
            test: /\.css$/,
            exclude: path.resolve ( './src' ),
            loader: 'style!css'
          }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url?limit=1000&name=images/[hash].[ext]'
          }],
        postLoaders: [{
            test: /\.tsx?$/,
            loader: 'istanbul-instrumenter-loader',
            include: path.resolve ( './src' )
          }]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
      plugins: [
        new webpack.IgnorePlugin ( /^fs$/ ),
        new webpack.IgnorePlugin ( /^react\/addons$/ ),
        new webpack.NoErrorsPlugin (),
        new webpack.DefinePlugin ({
          'process.env': {
            BROWSER: JSON.stringify ( true ),
            NODE_ENV: JSON.stringify ( 'development' )
          }
        })
      ]
    },
    webpackServer: {
      noInfo: true
    }
  };

  if ( isCI ) {

    config.autoWatch = false;
    config.singleRun = true;

    config.coverageReporter.reporters.push ({ type: 'lcov', subdir: '.' });

    if ( !isPhantom ) config.browsers.push ( 'Firefox' );

  } else {

    config.coverageReporter.reporters.push ({ type: 'html', subdir: 'html' });

    if ( !isPhantom ) config.browsers.push ( 'Chrome' );

  }

  karma.set ( config );

};

/* EXPORT */

module.exports = configurator;
