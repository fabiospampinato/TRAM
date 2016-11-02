
/* IMPORT */

require ( 'isomorphic-fetch' );

/* TESTS */

const context = require.context ( '../src', true, /(.*\.)?(app-)?(test|spec)s?\.tsx?$/ );
context.keys ().forEach ( context );
