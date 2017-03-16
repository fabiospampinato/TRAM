
/* ================================================================================
 * TRAM - Client
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {render as renderToDOM} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Settings from 'modules/settings';

/* RENDER */

function render () {

  const root = document.getElementById ( 'app-root' );

  if ( !root ) throw new Error ( 'Missing app root' );

  require ( 'modules/settings' );

  const {configureApollo} = require ( 'api/apollo' ),
        {App} = require ( 'ui/components' ),
        {configureStore} = require ( '../redux/store' );

  const history = createHistory (),
        Apollo = configureApollo (),
        store = configureStore ( history, Apollo, window.__REDUX_STATE__ );

  let app = (
    <ApolloProvider store={store} client={Apollo}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );

  if ( DEVELOPMENT ) {

    const {AppContainer} = require ( 'react-hot-loader' );

    app = (
      <AppContainer>
        {app}
      </AppContainer>
    );

  }

  renderToDOM ( app, root );

}

render ();

/* HOT */

if ( Settings.hotServer.enabled && module.hot ) {

  module.hot.accept ( 'api/apollo', render );
  module.hot.accept ( 'modules/settings', render );
  module.hot.accept ( 'ui/components', render );
  module.hot.accept ( '../redux/store', render );

}
