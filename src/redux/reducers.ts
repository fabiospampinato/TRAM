
/* ================================================================================
 * TRAM - Redux - Reducers
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Apollo from 'api/apollo';

/* REDUCERS */

const reducers = combineReducers ({
  routing: routerReducer,
  apollo: Apollo.reducer ()
});

/* EXPORT */

export default reducers;
