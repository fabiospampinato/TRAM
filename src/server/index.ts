
/* ================================================================================
 * TRAM - Server
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import 'isomorphic-fetch';
import * as _ from 'lodash';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as Chalk from 'chalk';
import * as compression from 'compression';
import * as ConnectMongo from 'connect-mongo';
import * as express from 'express';
import sendStatus from 'express-send-status';
import * as session from 'express-session';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import * as morgan from 'morgan';
import * as favicon from 'serve-favicon';
import * as path from 'path';
import {Mongoose, Schema} from 'api';
import passport from 'api/auth/passport';
import Settings from 'modules/settings';
import render from './render';
import {context} from './types';

/* APP */

const app = express ();

app.use ( compression () );

app.use ( favicon ( path.join ( __dirname, 'assets/favicon.ico' ) ) );

app.use ( '/assets', express.static ( path.join ( __dirname, 'assets' ) ), sendStatus ( 404 ) );

app.use ( '/public', express.static ( path.join ( __dirname, 'public' ) ), sendStatus ( 404 ) );

app.use ( bodyParser.json () );

app.use ( bodyParser.urlencoded ({
  extended: false //FIXME: What does it do? Is it necessary?
}));

app.use ( cookieParser () );

const MongoStore = ConnectMongo ( session );

app.use ( session ( _.extend ( {}, Settings.session, {
  store: new MongoStore ( _.extend ( {}, Settings.session.store, {
    mongooseConnection: Mongoose.connection
  }))
})));

app.use ( passport.initialize () );

app.use ( passport.session () );

if ( Settings.morgan.enabled ) {

  app.use ( morgan ( 'dev' ) );

}

if ( Settings.graphql.local ) {

  app.use ( Settings.graphql.url, graphqlExpress ( req => ({
    schema: Schema,
    context: {req}
  })));

  if ( Settings.graphiql.enabled ) {

    app.use ( Settings.graphiql.url, graphiqlExpress ({
      endpointURL: Settings.graphql.url
    }));

  }

}

app.get ( '*', async ( req: express.Request, res: express.Response ) => {

  let context: context = {},
      html;

  try {

    html = await render ( req, context );

  } catch ( error ) {

    try {

      req.url = '/error';
      context.error = error;

      html = await render ( req, context );

    } catch ( error ) {

      return sendStatus ( 500, DEVELOPMENT && error.stack )( req, res );

    }

  }

  if ( context.url ) return res.redirect ( context.status || 301, context.url );

  res.status ( context.status || 200 ).send ( html );

});

/* LISTEN */

const {host, port, url} = Settings.server;

app.listen ( port, host, err => {

  if ( err ) return console.error ( Chalk.bgRed ( err ) );

  if ( Settings.graphiql.enabled ) {

    console.info ( Chalk.black.bgGreen ( `[GRAPHIQL] Available at ${url}${Settings.graphiql.url}` ) );

  }

  console.info ( Chalk.black.bgGreen ( `[APP] Listening at ${url}` ) );

});
