
/* =========================================================================
 * ARRRT - Webpack - Client
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* ENVIRONMENT */

const environment = process.env.NODE_ENV || 'development';

/* EXPORT */

//TODO: Maybe explicitly write requires in a static manner, maybe it changes something

module.exports = require ( './' + environment );
