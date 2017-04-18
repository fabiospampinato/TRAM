
/* ================================================================================
 * TRAM - API - Todo - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import merge from 'conf-merge';
import Mongease from 'api/mongease';

/* MONGEASE */

//TODO: Add validation support

const config = {
  schema: {
    list: [{
      id: Number,
      text: String,
      done: Boolean
    }],
    visibility: { type: String, default: 'ALL' }
  },
  statics: {
    visibilities: ['ALL', 'LEFT', 'DONE'],
    checkVisibility ( visibility ) {
      if ( !model.visibilities.includes ( visibility ) ) throw new Error ( 'Invalid visibility' );
    },
    filter ( list, visibility ) {
      model.checkVisibility ( visibility );
      switch ( visibility ) {
        case 'ALL':
          return list;
        case 'LEFT':
          return list.filter ( todo => !todo.done );
        case 'DONE':
          return list.filter ( todo => todo.done );
      }
    }
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
      getTodo ( id: number ) {
        return _.find ( this.list, {id} );
      },
      makeItem ( text: string ) {
        return {
          id: ( _.max ( _.map ( this.list, 'id' ) ) || 0 ) as number + 1,
          text,
          done: false
        };
      },
      clear () {
        this.list = [];
        return this.save ();
      },
      add ( text: string ) {
        if ( !text ) throw new Error ( 'The text cannot be empty' );
        const item = this.makeItem ( text );
        this.list.unshift ( item );
        return this.save ();
      },
      toggleCheck ( id: number ) {
        const todo = this.getTodo ( id );
        todo.done = !todo.done;
        return this.save ();
      },
      setVisibility ( visibility: string ) {
        model.checkVisibility ( visibility );
        this.visibility = visibility;
        return this.save ();
      }
    },
    resolvers: {
      Query: {
        todoGet () {
          return model.get ();
        }
      },
      Mutation: {
        async todoClear () {
          return ( await model.get () ).clear ();
        },
        todoAdd: {
          args: { text: 'String' },
          async resolve ( root, {text} ) {
            return ( await model.get () ).add ( text );
          }
        },
        todoToggleCheck: {
          args: { id: 'Int' },
          async resolve ( root, {id} ) {
            return ( await model.get () ).toggleCheck ( id );
          }
        },
        todoSetVisibility: {
          args: { visibility: 'String' },
          async resolve ( root, {visibility} ) {
            return ( await model.get () ).setVisibility ( visibility );
          }
        }
      }
    }
  });

}

const {schema, model} = Mongease.make ( 'Todo', config );

/* EXPORT */

export {schema, model};
