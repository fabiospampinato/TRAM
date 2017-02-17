
/* ================================================================================
 * TRAM - Webpack - Client
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* ENVIRONMENT */

const environment = process.env.NODE_ENV || 'development';

/* EXPORT */

//TODO: Maybe explicitly write requires in a static manner, maybe it changes something

module.exports = require ( './' + environment );
