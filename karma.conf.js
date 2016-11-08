
/* =================================================================================
 * ARRRT - Karma
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

const path = require ( 'path' ),
      webpack = require ( 'webpack' ),
      ForkCheckerPlugin = require ( 'awesome-typescript-loader' ).ForkCheckerPlugin;

/* CONFIGURATOR */

const configurator = function ( karma ) {

  const isCI = process.env.NODE_ENV === 'ci',
        BROWSER = process.env.BROWSER;

  const config = {
    frameworks: ['mocha', 'chai'],
    browsers: BROWSER ? [BROWSER] : ['PhantomJS'],
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
        modules: [
          './src',
          'node_modules'
        ],
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
      },
      module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'istanbul-instrumenter-loader',
            include: path.resolve ( './src' ),
            enforce: 'post'
          }, {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
          }, {
            test: /\.json$/,
            loader: 'json-loader'
          }, {
            test: /\.css$/,
            exclude: path.resolve ( './src' ),
            loaders: ['style', 'css']
          }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url?limit=1000&name=images/[hash].[ext]'
          }]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
      plugins: [
        new ForkCheckerPlugin (),
        new webpack.IgnorePlugin ( /^fs$/ ),
        new webpack.IgnorePlugin ( /^react\/addons$/ ),
        new webpack.NoErrorsPlugin (),
        new webpack.DefinePlugin ({
          'process.env': {
            CLIENT: JSON.stringify ( true ),
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

    if ( !BROWSER ) config.browsers.push ( 'Firefox' );

  } else {

    config.coverageReporter.reporters.push ({ type: 'html', subdir: 'html' });

    if ( !BROWSER ) config.browsers.push ( 'Chrome' );

  }

  karma.set ( config );

};

/* EXPORT */

module.exports = configurator;
