
/* ================================================================================
 * TRAM - UI - Renderer
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Router} from 'react-router';
import routes from './routes';

/* RENDERER */

function renderer ( store, client, history ) {

  const root = document.getElementById ( 'app-root' );

  if ( !root ) throw new Error ( 'Missing app root' );

  render (
    <AppContainer>
      <ApolloProvider store={store} client={client} key="provider">
        <Router history={history}>
          {routes}
        </Router>
      </ApolloProvider>
    </AppContainer>,
    root
  );

}

/* EXPORT */

export default renderer;
