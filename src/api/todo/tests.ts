
/* ================================================================================
 * TRAM - API - Todo - Tests
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import {describe} from 'ava-spec';
import {model as Todo} from './mongease';
import {todo} from './mocks';

/* TESTS */

describe ( 'Todo', it => {

  it.beforeEach ( t => {

    t.context.T = new Todo ( todo );

  });

  describe ( '.checkVisibility', it => {

    it ( 'Does nothing if it gets a valid visibility', t => {

      for ( let visibility of Todo.visibilities ) {

        t.true ( _.isUndefined ( Todo.checkVisibility ( visibility ) ) );

      }

    });

    it ( 'Throws an error for invalid visibilities', t => {

      t.throws ( () => Todo.checkVisibility ( '__test__' ), /Invalid visibility/ );

    });

  });

  describe ( '.get', it => {

    it ( 'Returns a todo', async t => {

      const todo = await Todo.get ();

      t.true ( todo instanceof Todo );

    });

  });

  describe ( '.filter', it => {

    it ( 'Throws an error for invalid visibility', t => {

      t.throws ( () => Todo.filter ( t.context.T.list, 'TEST' ), /Invalid visibility/ );

    });

    it ( 'Returns a filtered list', t => {

      const {list} = t.context.T;

      t.deepEqual ( Todo.filter ( list, 'ALL' ), list );

      t.true ( Todo.filter ( list, 'LEFT' ).every ( item => !item.done ) );

      t.true ( Todo.filter ( list, 'DONE' ).every ( item => item.done ) );

    });

  });

  describe ( '#getTodo', it => {

    it.todo ( 'Returns a todo by id' );

  });

  describe ( '#makeItem', it => {

    it ( 'Returns an item object', t => {

      const text = 'test',
            item = t.context.T.makeItem ( text );

      t.true ( _.isNumber ( item.id ) );

      t.deepEqual ( _.pick ( item, ['text', 'done'] ), { text, done: false } );

    });

    it ( 'Adds an auto-incrementing id', t => {

      const item = t.context.T.makeItem ( 'test' ),
            prev = _.max ( t.context.T.list.filter ( i => i.id !== item.id ).map ( i => i.id ) ) as number;

      t.is ( item.id, prev + 1 );

    });

  });

  describe ( '#clear', it => {

    it ( 'Empties the list', t => {

      t.truthy ( t.context.T.list.length );

      t.context.T.clear ();

      t.falsy ( t.context.T.list.length );

    });

  });

  describe ( '#add', it => {

    it ( 'Throws an error for empty texts', t => {

      t.throws ( () => t.context.T.add ( '' ), /The text cannot be empty/ );

    });

    it ( 'Adds an item at the beginning of the list', t => {

      const prevLength = t.context.T.list.length;

      t.context.T.add ( 'test' );

      t.is ( t.context.T.list.length, prevLength + 1 );
      t.is ( t.context.T.list[0].text, 'test' );

    });

  });

  describe ( '#toggleCheck', it => {

    it ( 'Flips the "done" property of an item', t => {

      const item = t.context.T.list[0],
            prevDone = item.done;

      t.context.T.toggleCheck ( item.id );

      t.is ( item.done, !prevDone );

    });

  });

  describe ( '#setVisibility', it => {

    it ( 'Throws an error for invalid visibility', t => {

      t.throws ( () => t.context.T.setVisibility ( 'TEST' ), /Invalid visibility/ );

    });

    it ( 'Sets the provided visibility', t => {

      t.not ( t.context.T.visibility, 'LEFT' );

      t.context.T.setVisibility ( 'LEFT' );

      t.is ( t.context.T.visibility, 'LEFT' );

    });

  });

});
