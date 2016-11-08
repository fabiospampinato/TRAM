
/* =================================================================================
 * ARRRT - Redux - Reducers
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Client from 'api/client';
import {todoReducer} from './modules/todo';

/* REDUCERS */

const reducers = combineReducers ({
  routing: routerReducer,
  todo: todoReducer,
  apollo: Client.reducer ()
});

/* EXPORT */

export default reducers;
