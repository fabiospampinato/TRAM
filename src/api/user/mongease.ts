
/* ================================================================================
 * TRAM - API - User - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as pify from 'pify';
import Mongease from 'api/mongease';
import Environment from 'modules/environment';
import Settings from 'modules/settings';

/* MONGEASE */

let plugins: any[] = [];

if ( Environment.isServer ) {

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
      async userGetMe ( obj, args, {user} ) {
        return user;
      }
    },
    Mutation: {
      userSignup: {
        args: { username: 'String', password: 'String' },
        resolve ( obj, user ) {
          return model.signup ( user );
        }
      },
      userLogin: {
        args: { username: 'String', password: 'String' },
        resolve ( obj, user, req ) {
          return model.login ( user, req );
        }
      }
    }
  }
});

/* EXPORT */

export {schema, model};
