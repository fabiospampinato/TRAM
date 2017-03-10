
/* ================================================================================
 * TRAM - API - Schema
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import MongeaseGraphQL from 'mongease-graphql';
import './components';

/* SCHEMA */

const Schema = MongeaseGraphQL.getSchema ();

/* EXPORT */

export default Schema;
