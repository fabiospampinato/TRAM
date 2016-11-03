
/* IMPORT */

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Router} from 'react-router';
import routes from './routes';

/* RENDERER */

let renderer = function ( store, client, history ) {

  let root = document.getElementById ( 'app' );

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
