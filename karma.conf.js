
/* IMPORT */

let path = require ( 'path' ),
    webpack = require ( 'webpack' );

/* CONFIGURATOR */

let configurator = function ( karma ) {
  let config = {
    frameworks: ['mocha', 'chai', 'es6-shim'],
    browsers: ['PhantomJS'],
    files: ['./webpack/test.js'],
    preprocessors: {
      './src/**/*.ts': ['coverage'],
      './src/**/*.tsx': ['coverage'],
      './webpack/test.js': ['webpack']
    },
    plugins: ['karma-*'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: []
    },
    hostname: 'localhost',
    port: 9876,
    colors: true,
    logLevel: karma.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
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

  let isCI = process.env.NODE_ENV === 'ci';

  if ( isCI ) {

    config.autoWatch = false;
    config.singleRun = true;
    config.browsers.push ( 'Firefox' );
    config.coverageReporter.reporters.push ({ type: 'lcov', subdir: '.' });

  } else {

    config.browsers.push ( 'Chrome' );
    config.coverageReporter.reporters.push ({ type: 'html', subdir: 'html' });

  }

  karma.set ( config );

};

/* EXPORT */

module.exports = configurator;
