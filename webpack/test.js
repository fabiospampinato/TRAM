
/* =========================================================================
 * ARRRT - Webpack - Test
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* TESTS */

const context = require.context ( '../src', true, /(.*\.)?(app-)?(test|spec)s?\.tsx?$/ );
context.keys ().forEach ( context );
