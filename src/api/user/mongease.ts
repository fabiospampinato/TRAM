
/* ================================================================================
 * TRAM - API - User - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import merge from 'conf-merge';
import Mongease from 'api/mongease';
import Settings from 'modules/settings';

/* MONGEASE */

const config = {
  schema: {
    username: String //FIXME: Shouldn't need to manually add properties added by plugins
  }
};

if ( SERVER ) {

  const passportLocalMongoose = require ( 'passport-local-mongoose' ),
        pify = require ( 'pify' );

  merge ( config, {
    plugins: [
      [passportLocalMongoose, Settings.passport.local]
    ],
    statics: {
      async signup ( user, req ) {
        const account = await pify ( model.register ).bind ( model )( user, user.password );
        if ( req ) {
          await pify ( req.login ).bind ( req )( account );
        }
        return account;
      },
      async login ( user, req ) {
        const passport = require ( 'api/auth/passport' ).default; // Avoiding a cyclic dependency
        _.merge ( req, { query: user } ); //FIXME: We should have a cleaner, and safer, way of doing it
        return await new Promise ( ( resolve, reject ) => {
          passport.authenticate ( 'local', async ( err, user, info ) => {
            if ( err ) return reject ( err );
            if ( !user ) return reject ( info.message );
            await pify ( req.login ).bind ( req )( user );
            return resolve ( user );
          })( req );
        });
      },
      logout ( req ) {
        req.logout ();
      }
    },
    resolvers: {
      Query: {
        userGetMe ( root, args, {req} ) {
          return req.user;
        },
        userGetByUsername: {
          args: { username: 'String' },
          resolve ( root, {username} ) {
            return model.findByUsername ( username );
          }
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
        },
        userLogout ( root, args, {req} ) {
          return model.logout ( req );
        }
      }
    }
  });

}

const {schema, model} = Mongease.make ( 'User', config );

/* EXPORT */

export {schema, model};
