
/* ================================================================================
 * TRAM - Webpack - Client
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Environment from '../../src/modules/environment';

/* CONFIG */

const config = require ( `./${Environment.current}` );

/* EXPORT */

export default config;
