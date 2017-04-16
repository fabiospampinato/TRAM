
/* ================================================================================
 * TRAM - API - Counter - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import merge from 'conf-merge';
import Mongease from 'api/mongease';

/* MONGEASE */

//TODO: Add validation support

const config = {
  schema: {
    value: { type: Number, default: 0 }
  }
};

if ( SERVER ) {

  merge ( config, {
    statics: {
      get () {
        return this.findAnyoneOrCreate ();
      }
    },
    methods: {
      increment () {
        this.value += 1;
        return this.save ();
      },
      decrement () {
        this.value = Math.max ( 0, this.value - 1 );
        return this.save ();
      }
    },
    resolvers: {
      Query: {
        counterGet () {
          return model.get ();
        }
      },
      Mutation: {
        async counterIncrement () {
          return ( await model.get () ).increment ();
        },
        async counterDecrement () {
          return ( await model.get () ).decrement ();
        }
      }
    }
  });

}

const {schema, model} = Mongease.make ( 'Counter', config );

/* EXPORT */

export {schema, model};
