
/* SETTINGS */

let Settings = {
  auth: {
    token: 'auto_token_name',
    secret: 'd35d1690-7f39-4676-830d-7dc8720b1475'
  },
  database: {
    host: 'localhost',
    port: 28015,
    db: 'uibuffs'
  },
  graphql: {
    endpoint: '/api/database'
  },
  server: {
    protocol: 'http',
    host: 'localhost',
    port: 8889,
    url: 'http://localhost:8889'
  },
  helmet: {
    head: {
      title: 'barbar-vortigern',
      titleTemplate: 'barbar-vortigern: %s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'React Redux Typescript' },
      ]
    }
  }
};

/* EXPORT */

export default Settings;
