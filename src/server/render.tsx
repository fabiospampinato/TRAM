
/* ================================================================================
 * TRAM - Server - Render
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import createHistory from 'history/createMemoryHistory';
import {ApolloProvider, renderToStringWithData} from 'react-apollo';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {configureApollo} from 'api';
import {App, HTML} from 'ui/components';
import {configureStore} from '../redux/store';

const manifestClient = require ( '../../dist/meta/manifest.client.json' ), //TODO: Maybe import?
      manifestClientVendor = require ( '../../dist/meta/manifest.client.vendor.json' ); //TODO: Maybe import?

/* RENDER */

async function render ( req, context ) {

  const history = createHistory (),
        Apollo = configureApollo ( req ),
        store = configureStore ( history, Apollo );

  let app = (
    <ApolloProvider store={store} client={Apollo}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  if ( DEVELOPMENT ) {

    const {AppContainer} = require ( 'react-hot-loader' );

    app = <AppContainer>{app}</AppContainer>;

  }

  const content = await renderToStringWithData ( app );

  if ( context.url ) return;

  const state = { apollo: Apollo.getInitialState () },
        html = <HTML manifests={[manifestClient, manifestClientVendor]} content={content} state={state} />;

  return `<!doctype html>${renderToString ( html )}`;

}

/* EXPORT */

export default render;
