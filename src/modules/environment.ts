
/* ================================================================================
 * TRAM - Modules - Environment
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

const {NODE_ENV, CLIENT} = process.env;

/* ENVIRONMENT */

const Environment = {
  get (): string {
    return NODE_ENV || 'development';
  },
  isProduction: NODE_ENV === 'production',
  isDevelopment: NODE_ENV !== 'production',
  isClient: !!CLIENT,
  isServer: !CLIENT
};

/* EXPORT */

export default Environment;
