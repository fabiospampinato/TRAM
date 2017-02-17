
/* ================================================================================
 * TRAM - API - Counter - Model
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import ORM, {type} from 'api/orm';

/* COUNTER */

const Counter = ORM.createModel ( 'counter', {
  value: type.number ().integer ().default ( 0 )
});

/* INCREMENT */

Counter.define ( 'increment', function () {
  this.value += 1;
  return this;
});

/* DECREMENT */

Counter.define ( 'decrement', function () {
  this.value = Math.max ( 0, this.value - 1 );
  return this;
})

/* REPLACE */

Counter.define ( 'replace', function () { //TODO: Generalize
  this.setSaved ();
  return this.save ();
});

/* EXPORT */

export default Counter;
