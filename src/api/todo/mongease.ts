
/* ================================================================================
 * TRAM - API - Todo - Mongease
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import Mongease from 'api/mongease';

/* MONGEASE */

//TODO: Add validation support

const {schema, model} = Mongease.make ( 'Todo', {
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
    get () {
      return this.findAnyoneOrCreate ();
    },
    filter ( list, visibility ) {
      switch ( visibility ) {
        case 'ALL':
          return list;
        case 'LEFT':
          return list.filter ( todo => !todo.done );
        case 'DONE':
          return list.filter ( todo => todo.done );
      }
    }
  },
  methods: {
    getTodo ( id ) {
      return _.find ( this.list, {id} );
    },
    makeTodo ( text ) {
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
    add ( text ) {
      const todo = this.makeTodo ( text );
      this.list.unshift ( todo );
      return this.save ();
    },
    toggleCheck ( id ) {
      const todo = this.getTodo ( id );
      todo.done = !todo.done;
      return this.save ();
    },
    setVisibility ( visibility ) {
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
        async resolve ( obj, {text} ) {
          return ( await model.get () ).add ( text );
        }
      },
      todoToggleCheck: {
        args: { id: 'Int' },
        async resolve ( obj, {id} ) {
          return ( await model.get () ).toggleCheck ( id );
        },
      },
      todoSetVisibility: {
        args: { visibility: 'String' },
        async resolve ( obj, {visibility} ) {
          return ( await model.get () ).setVisibility ( visibility );
        }
      }
    }
  }
});

/* EXPORT */

export {schema, model};
