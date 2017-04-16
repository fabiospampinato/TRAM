
/* ================================================================================
 * TRAM - API - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import './mongoose';
import Mongease from 'mongease';

/* PLUGINS */

if ( SERVER ) {

  const MongeaseGraphQL = require ( 'mongease-graphql' ).default;

  Mongease.plugin ( MongeaseGraphQL.make );

}

/* EXPORT */

export default Mongease;
