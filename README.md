
# TRAM

![Issues](https://img.shields.io/github/issues/fabiospampinato/tram.svg)
[![NPM version](https://img.shields.io/npm/v/@fabiospampinato/tram.svg)](https://www.npmjs.com/package/@fabiospampinato/tram)

Boilerplate for building reactive isomorphic applications. Built around [TypeScript](http://www.typescriptlang.org), [React](https://github.com/facebook/react), [Apollo](http://www.apollodata.com), [MongoDB](https://www.mongodb.com).

## Features

- Everything is written in [TypeScript](http://www.typescriptlang.org), including [Webpack](https://webpack.js.org) configurations and tests
- Hot Module Replacement on the client, and automatic rebuild and restart on the server
- [MongoDB](https://www.mongodb.com) database, queried using [GraphQL](http://graphql.org) via [Apollo](http://www.apollodata.com)
- [AVA](https://github.com/avajs/ava) and [NYC](https://github.com/istanbuljs/nyc) support for testing and coverage
- [React](https://github.com/facebook/react) and [React-Router](https://reacttraining.com/react-router), with Server Side Rendering support
- Basic authentication logic using [Passport](http://passportjs.org)

## Project Structure
```bash
TRAM
├── assets                # Place your static assets here
├── coverage              # NYC coverage output
├── dist                  # Built app, ready to serve
├── resources             # External resources, like Photoshop files
├─┬ src                   # Source files
│ ├─┬ api                 # Database-related files
│ │ ├── auth              # Authentication files
│ │ ├── counter           # Counter component
│ │ ├── todo              # Todo component
│ │ ├── user              # User component
│ │ ├── apollo.ts         # Exports configureApollo
│ │ ├── components.ts     # Imports all the components
│ │ ├── index.ts          # Exports configureApollo, Components, Mongoose, Mongease and Schema
│ │ ├── mongease.ts       # Mongease instance
│ │ ├── mongoose.ts       # Mongoose instance
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
│ └─┬ ui                  # UI-related files
│   ├── components        # React components
│   ├── pages             # App pages
│   └── template          # Extra front-end code/styles to load
├── types                 # Custom declarations
├── typings               # Typings declarations
├─┬ webpack               # Webpack configurations
│ ├── client              # Client-related configurations
│ ├── server              # Server-related configurations
│ └── test.js             # Tests configuration
├── .babelrc              # Babel configuration (may be enabled in Awesome Typescript Loader)
├── .gitignore            # Tells git which files to ignore
├── .todo                 # List of things to do
├── LICENSE               # Contains the license
├── package.json          # NPM package.json
├── README.md             # This file
├── tsconfig.json         # TypeScript compiler configuration
├── tslint.json           # tslint configuration
└── typings.json          # Typings configuration
```

## Scripts

To get a list of all the available scripts, as well as a brief description for each, run:

```bash
npm run help
```

## Installation

```bash
$ git clone https://github.com/fabiospampinato/TRAM.git
$ cd TRAM
$ npm install
$ typings install
```

## Start

```bash
npm run build:vendor # Required only before the first start
npm run start
```

//TODO: Production build

## Related

- TRAM is a fork of [vortigern](https://github.com/barbar/vortigern), check it out as well.

## License

MIT © Fabio Spampinato
