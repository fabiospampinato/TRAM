
/* IMPORT */

require ( 'es6-promise' ).polyfill ();
require ( 'isomorphic-fetch' );

/* TESTS */

let context = require.context ( '../src', true, /.test\.tsx?$/ );
context.keys ().forEach ( context );
