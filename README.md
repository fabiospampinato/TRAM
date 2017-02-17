# TRAM _[Work in Progress]_

![Dependencies](https://img.shields.io/librariesio/github/fabiospampinato/TRAM.svg)
![Issues](https://img.shields.io/github/issues/fabiospampinato/TRAM.svg)
![Release](https://img.shields.io/github/release/fabiospampinato/TRAM.svg)
![License](https://img.shields.io/github/license/fabiospampinato/TRAM.svg)

Boilerplate for building reactive isomorphic applications. Built around Apollo, React, Redux, RethinkDB and TypeScript.

## Technologies

#### Core
- [TypeScript 2](https://www.typescriptlang.org)
- [React](https://github.com/facebook/react) & [React DOM](https://github.com/facebook/react) for the view layer.
- [React Router](https://github.com/reactjs/react-router) to handle routing.
- [Redux](https://github.com/reactjs/redux) for managing application state.
- [React-Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.
- [React-Router-Redux](https://github.com/reactjs/react-router-redux) to keep application state sync with route changes.
- [React-Apollo](https://github.com/apollostack/react-apollo) for providing the Apollo store to the React components.

#### Database
- [Apollo](http://www.apollodata.com)
- [GraphQL](http://graphql.org) for the query language.
- [Graph<i>i</i>QL](https://github.com/graphql/graphiql) to live-test queries.
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) for the database engine.
- [Thinky](https://github.com/neumino/thinky) for the ORM.

#### Build System
- [Webpack 2](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as TypeScript loader.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server.
  - [Isomorphic Style Loader](https://github.com/kriasoft/isomorphic-style-loader) for loading styles on server-side.
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [SASS Loader](https://github.com/jtangelder/sass-loader)
  - [JSON Loader](https://github.com/webpack/json-loader)
  - [File Loader](https://github.com/webpack/file-loader)
  - [URL Loader](https://github.com/webpack/url-loader)
  - [Sourcemap Loader](https://github.com/webpack/source-map-loader)
  - [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
  - [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) for exporting bundled CSS.
  - [Istanbul Instrumenter Loader](https://github.com/deepsweet/istanbul-instrumenter-loader) for using istanbul on postload process while generating code coverage reports.
  - [Copy Webpack Plugin](https://github.com/kevlened/copy-webpack-plugin) for copying the assets folder to the dist folder,
  - [Webpack Bundle Analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer) for graphical analysis of each bundle composition.

#### Server
- [Express](https://github.com/expressjs/express)
- [Compression](https://github.com/expressjs/compression) for gzip compression.
- [Serve Favicon](https://github.com/expressjs/serve-favicon) for serving the favicon.
- [GraphQL Server Express](https://github.com/apollostack/graphql-server/tree/master/packages/graphql-server-express) for providing GraphQL and Graph<i>i</i>}QL endpoints.
  ##### Development
  - [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
  - [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
  - [Nodemon](https://github.com/remy/nodemon) for reloading the server on changes.

#### Testing
- [Karma](https://github.com/karma-runner/karma) as test runner.
  - [Karma-Webpack](https://github.com/webpack/karma-webpack)
  - [Karma-Mocha](https://github.com/karma-runner/karma-mocha)
  - [Karma-Chai](https://github.com/xdissent/karma-chai)
  - [Karma-Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma-Chrome-Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma-Firefox-Launcher](https://github.com/karma-runner/karma-firefox-launcher)
  - [Karma-PhantomJS-Launcher](https://github.com/karma-runner/karma-phantomjs-launcher)
- [Mocha](https://github.com/mochajs/mocha) as testing framework.
- [Chai](https://github.com/chaijs/chai) as assertion library.

#### Developer Experience
- [Typings](https://github.com/typings/typings) for installing type definitions of external libraries.
- [tslint](https://github.com/palantir/tslint) for linting TypeScript files.
- [Chalk](https://github.com/chalk/chalk) for colored terminal logs.

#### Utilities
- [React Helmet](https://github.com/nfl/react-helmet) for managing title and meta tags etc.
- [classnames](https://github.com/JedWatson/classnames)
- [Validator](https://github.com/chriso/validator.js) for validating schemas, forms etc.

## Project Structure
```bash
TRAM
├── assets                # Place your static assets here
├── dist                  # Built app, ready to serve
├── resources             # External resources, like Photoshop documents
├─┬ src                   # Source files
│ ├─┬ api                 # Database-related files
│ │ ├── counter           # Counter component
│ │ ├── todo              # Todo component
│ │ ├── scalars           # Custom GraphQL scalars
│ │ ├── client.ts         # ApolloClient instance
│ │ ├── components.ts     # Array of components, they we'll make your schema and resolvers
│ │ ├── index.ts          # Exports Client, Components, ORM and Schema
│ │ ├── orm.ts            # Thinky instance
│ │ └── schema.ts         # Executable GraphQL schema
│ ├─┬ client              # Client-related files
│ │ ├── index.tsx         # Client entry point
│ │ └── vendor.ts         # Client's vendor entry point
│ ├── modules             # Where to place modules
│ ├── redux               # Redux-related files
│ ├─┬ server              # Server-related files
│ │ ├── hot.ts            # Hot Module Replacement server entry point
│ │ ├── index.tsx         # Server entry point
│ │ └── vendor.ts         # Server's vendor entry point
│ ├─┬ ui                  # UI-related files
│ │ ├── components        # React components
│ │ ├── pages             # App pages
│ │ ├── renderer.tsx      # Function that renders the app into the DOM
│ │ └── routes.tsx        # App routes
│ └── utilities           # Where to place utilities
├── types                 # Custom declarations
├── typings               # Typings declarations
├─┬ webpack               # Webpack configurations
│ ├── client              # Client-related configurations
│ ├── server              # Server-related configurations
│ └── test.js             # Karma entry point, used to load all the other tests
├── .babelrc              # Babel configuration (may be enabled in Awesome Typescript Loader)
├── .gitignore            # Tells git which files to ignore
├── .todo                 # List of things to do
├── karma.config.js       # Karma configuration
├── README.md             # This file
├── tsconfig.json         # TypeScript compiler configuration
├── tslint.json           # tslint configuration
└── typings.json          # Typings configuration
```

## Scripts

Scripts to execute with a `npm run SCRIPTNAME`, most of these are self-explanatory:

```bash
build:client:vendor          # Builds the client vendor
build:client                 # Builds the client
build:server:vendor          # Builds the server vendor
build:server                 # Builds the server
build:vendor                 # Builds both client and server vendors
build:all                    # Builds everything
build                        # Builds both client and server
start:db                     # Starts the database
start:client:hot             # Starts the client in Hot Module Replacement mode
start:server:hot:nodemon     # Starts the server using Nodemon
start:server:hot:webpack     # Starts the server and watches files for changes
start:server:hot             # Starts the server in watch-&-restart mode
start:server                 # Starts the server
start:hot                    # Starts both client and server in "HOT" mode
start                        # Builds and starts both client and server
clean:dist                   # Removes the 'dist' folder
clean:coverage               # Removes the 'coverage' folder
clean                        # Removes both 'dist' and 'coverage' folders
test:phantom                 # Runs Karma using only PhantomJS
test:chrome                  # Runs Karma using only Chrome
test:firefox                 # Runs Karma using only Firefox
test                         # Runs Karma
coverage                     # Opens the coverage report
lint                         # Lints TypeScript files
```

## Installation

```bash
$ git clone https://github.com/fabiospampinato/TRAM
$ cd TRAM
$ npm install
$ typings install
```

## Start

In another terminal session run `npm run start:db`, this will start the database that the server will connect to later.

If this is your first start, or you edited the vendor dependencies you need to run `npm run build:vendor`, from now on they won't be rebuilded unless you explicitly do it, in order to speed up the compilation time for the far more common case where they didn't change from the previous build.

If you want to start in development mode, with Hot Module Replacement enabled on the client and automatic server rebuild and restart run `npm run start`.

//TODO: Production mode

## Thanks

TRAM is a fork of [vortigern](https://github.com/barbar/vortigern), check it out as well.
