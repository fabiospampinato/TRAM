
/* ================================================================================
 * TRAM - API - User - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as pify from 'pify';
import Mongease from 'api/mongease';
import Settings from 'modules/settings';

/* MONGEASE */

let plugins: any[] = [];

if ( SERVER ) {

  const passportLocalMongoose = require ( 'passport-local-mongoose' );

  plugins.push ([ passportLocalMongoose, Settings.passport.local ]);

}

const {schema, model} = Mongease.make ( 'User', {
  schema: {
    username: String //FIXME: Shouldn't need to manually add properties added by plugins
  },
  plugins,
  statics: {
    async signup ( user, req ) {
      const account = await pify ( model.register ).bind ( model )( user, user.password );
      if ( req ) {
        await pify ( req.login ).bind ( req )( account );
      }
      return account;
    },
    login ( { username, password }, req ) {
      //FIXME: Doesn't work
    }
  },
  resolvers: {
    Query: {
      async userGetMe ( root, args, {req} ) {
        return req.user;
      }
    },
    Mutation: {
      userSignup: {
        args: { username: 'String', password: 'String' },
        resolve ( root, user, {req} ) {
          return model.signup ( user, req );
        }
      },
      userLogin: {
        args: { username: 'String', password: 'String' },
        resolve ( root, user, {req} ) {
          return model.login ( user, req );
        }
      }
    }
  }
});

/* EXPORT */

export {schema, model};
