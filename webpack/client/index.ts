
/* ================================================================================
 * TRAM - Webpack - Client
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* CONFIG */

const ENVIRONMENT = process.env.NODE_ENV || 'development',
      config = require ( `./${ENVIRONMENT}` );

/* EXPORT */

export default config;
