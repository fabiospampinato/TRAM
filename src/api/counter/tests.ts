
/* ================================================================================
 * TRAM - API - Counter - Tests
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {describe} from 'ava-spec';
import {model as Counter} from './mongease';

/* TESTS */

describe ( 'Counter', it => {

  it.beforeEach ( t => {

    t.context.C = new Counter ();

  });

  describe ( 'get', it => {

    it ( 'Returns a counter', async t => {

      const counter = await Counter.get ();

      t.true ( counter instanceof Counter );

    });

  });

  describe ( '#increment', it => {

    it ( 'Increments the counter', t => {

      for ( let i = 1; i < 5; i++ ) {

        t.context.C.increment ();

        t.is ( t.context.C.value, i );

      }

    });

  });

  describe ( '#decrement', it => {

    it ( 'Decrements the counter', t => {

      t.context.C.value = 5;

      for ( let i = 5; i >= 1; i-- ) {

        t.context.C.decrement ();

        t.is ( t.context.C.value, i - 1 );

      }

    });

    it ( 'Stops at 0', t => {

      t.context.C.decrement ();

      t.is ( t.context.C.value, 0 );

    });

  });

});
