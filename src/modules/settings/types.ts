
/* ================================================================================
 * TRAM - Modules - Settings - Types
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* TYPES */

type options = {
  [index: string]: any
};

type settings = {
  extend?: string | string[],
  environment: string,
  apollo: {
    client: options,
    network: options
  },
  graphql: {
    local: boolean,
    url: string
  },
  graphiql: {
    enabled: boolean,
    url: string
  },
  helmet: options,
  mongodb: {
    protocol: string,
    host: string,
    port: number,
    options: options,
    database: string,
    url: string
  },
  morgan: {
    enabled: boolean
  },
  passport: {
    local: options
  },
  session: options,
  server: {
    protocol: string,
    host: string,
    port: number,
    url: string
  },
  hotServer: {
    enabled: boolean,
    protocol?: string,
    host?: string,
    port?: number,
    url?: string
  }
};

/* EXPORT */

export {options, settings};
