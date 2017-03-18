
/* ================================================================================
 * TRAM - Webpack - Server - Development
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* CONFIG */

const config = {
  entry: {
    server: ['./src/server/index.tsx'],
    'server.hot': ['./src/server/hot.ts']
  }
};

/* EXPORT */

export default config;
