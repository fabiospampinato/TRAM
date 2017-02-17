
/* ================================================================================
 * TRAM - Modules - Settings
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* SETTINGS */

const Settings = {
  auth: {
    token: 'auto_token_name',
    secret: 'd35d1690-7f39-4676-830d-7dc8720b1475'
  },
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'TRAM',
    http: {
      protocol: 'http',
      host: 'localhost',
      port: 8887,
      url: 'http://localhost:8887'
    }
  },
  graphql: {
    endpoint: '/api/graphql',
    interface: '/api/graphiql',
    batchInverval: 10
  },
  server: {
    protocol: 'http',
    host: 'localhost',
    port: 8889,
    url: 'http://localhost:8889'
  },
  hotServer: {
    protocol: 'http',
    host: 'localhost',
    port: 8890,
    url: 'http://localhost:8890'
  },
  helmet: {
    head: {
      defaultTitle: 'TRAM',
      titleTemplate: '%s | TRAM',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Boilerplate for building reactive isomorphic applications. Built around Apollo, React, Redux, RethinkDB and TypeScript.' },
      ]
    }
  }
};

/* EXPORT */

export default Settings;
