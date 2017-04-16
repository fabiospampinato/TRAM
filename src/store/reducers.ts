
/* ================================================================================
 * TRAM - Store - Reducers
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import ApolloClient from 'apollo-client';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

/* REDUCERS */

function configureReducers ( Apollo: ApolloClient ) {

  return combineReducers ({
    router: routerReducer,
    apollo: Apollo.reducer ()
  });

}

/* EXPORT */

export {configureReducers};
