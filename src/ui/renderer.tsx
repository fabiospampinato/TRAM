
/* =========================================================================
 * REPONAME - UI - Renderer
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Router} from 'react-router';
import routes from './routes';

/* RENDERER */

const renderer = function ( store, client, history ) {

  const root = document.getElementById ( 'app' );

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

};

/* EXPORT */

export default renderer;
