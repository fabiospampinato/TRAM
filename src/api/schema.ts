
/* ================================================================================
 * TRAM - API - Schema
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import './components';

/* SCHEMA */

let Schema;

if ( SERVER ) {

  const MongeaseGraphQL = require ( 'mongease-graphql' ).default;

  Schema = MongeaseGraphQL.getSchema ();

}

/* EXPORT */

export default Schema;
