
/* ================================================================================
 * TRAM - Client - Render
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {render as renderToDOM} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {configureApollo} from 'api/apollo';
import {App} from 'ui/components';
import {configureStore} from '../redux/store';
import 'modules/settings';

/* RENDER */

function render () {

  const root = document.getElementById ( 'app-root' );

  if ( !root ) throw new Error ( 'Missing app root' );

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

    app = <AppContainer>{app}</AppContainer>;

  }

  renderToDOM ( app, root );

}

/* EXPORT */

export default render;
