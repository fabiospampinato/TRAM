
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
    signup ({ username, password }) {
      const user = new model ({ username });
      return pify ( model.register ).bind ( model )( user, password );
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
