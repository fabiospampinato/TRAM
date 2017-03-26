
/* ================================================================================
 * TRAM - Server - Render
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as express from 'express';
import createHistory from 'history/createMemoryHistory';
import * as React from 'react';
import {ApolloProvider, renderToStringWithData} from 'react-apollo';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {configureApollo} from 'api';
import Settings from 'modules/settings';
import {App, HTML} from 'ui/components';
import {configureStore} from '../redux/store';
import * as manifestClient from '../../dist/meta/manifest.client.json';
import * as manifestClientVendor from '../../dist/meta/manifest.client.vendor.json';
import {context} from './types';

/* RENDER */

async function render ( req: express.Request, context: context ): Promise<string> {

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

  const content = Settings.apollo.client.ssrMode ? await renderToStringWithData ( app ) : renderToString ( app );

  if ( context.url ) return '';

  const state = { apollo: Apollo.getInitialState () },
        html = <HTML manifests={[manifestClient, manifestClientVendor]} content={content} state={state} />;

  return `<!doctype html>${renderToString ( html )}`;

}

/* EXPORT */

export default render;
