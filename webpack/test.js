
/* IMPORT */

require ( 'isomorphic-fetch' );

/* TESTS */

const context = require.context ( '../src', true, /(.*\.)?(app-)?tests?\.tsx?$/ );
context.keys ().forEach ( context );
