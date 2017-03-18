
/* ================================================================================
 * TRAM - Webpack - Client - Production
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* CONFIG */

const config = {
  entry: {
    client: ['./src/client/index.ts']
  },
  output: {
    publicPath: '/public/',
    filename: '[name].[chunkhash].js'
  }
};

/* EXPORT */

export default config;
