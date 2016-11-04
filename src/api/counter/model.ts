
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

Counter.define ( 'replace', function () {
  this.setSaved ();
  return this.save ();
});

/* EXPORT */

export default Counter;
