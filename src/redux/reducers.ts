
/* ================================================================================
 * TRAM - Redux - Reducers
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {todoReducer} from './modules/todo';
import Apollo from 'api/apollo';

/* REDUCERS */

const reducers = combineReducers ({
  routing: routerReducer,
  todo: todoReducer,
  apollo: Apollo.reducer ()
});

/* EXPORT */

export default reducers;
