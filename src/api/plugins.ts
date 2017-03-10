
/* ================================================================================
 * TRAM - API - Plugins
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';

/* PLUGINS */

function findAnyoneOrCreatePlugin ( schema, options ) {

  //TODO: Export as a plugin
  //TODO: Write it cleaner
  //TODO: Add some tests

  schema.statics.findAnyoneOrCreate = function findAnyoneOrCreate ( create, callback ) {
    const model = this;
    if ( !create ) {
      callback = _.noop;
    } else if ( _.isFunction ( create ) ) {
      callback = create;
      create = {};
    } else if ( !callback ) {
      callback = _.noop;
    }
    return new Promise ( ( resolve, reject ) => {
      model.find ().limit ( 1 ).exec ( ( err, result ) => {
        if ( err ) {
          reject ( err );
          callback ( err, result );
        } else if ( result && result.length ) {
          resolve ( result[0] );
          callback ( err, result[0] );
        } else {
          model.create ( create, ( err, result ) => {
            if ( err ) {
              reject ( err );
            } else {
              resolve ( result );
            }
            callback ( err, result );
          });
        }
      });
    });
  }

}

function findOneOrCreatePlugin ( schema, options ) {

  //TODO: Export as a plugin
  //TODO: Write it cleaner
  //TODO: Add some tests

  schema.statics.findOneOrCreate = function findOneOrCreate ( find, create, callback ) {
    const model = this;
    if ( !create ) {
      callback = _.noop;
    } else if ( _.isFunction ( create ) ) {
      callback = create;
      create = {};
    } else if ( !callback ) {
      callback = _.noop;
    }
    return new Promise ( ( resolve, reject ) => {
      model.findOne ( find, ( err, result ) => {
        if ( err ) {
          reject ( err );
          callback ( err, result );
        } else if ( result ) {
          resolve ( result );
          callback ( err, result );
        } else {
          model.create ( create, ( err, result ) => {
            if ( err ) {
              reject ( err );
            } else {
              resolve ( result );
            }
            callback ( err, result );
          });
        }
      });
    });
  }

}

/* EXPORT */

export {findAnyoneOrCreatePlugin, findOneOrCreatePlugin};
