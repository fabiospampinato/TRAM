
/* ================================================================================
 * TRAM - Webpack - Test
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* TESTS */

const context = require.context ( '../src', true, /(.*\.)?(app-)?(test|spec)s?\.tsx?$/ );
context.keys ().forEach ( context );
