
/* ================================================================================
 * TRAM - UI - Pages - Counter
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import graphqls from 'modules/graphqls';
import {get, increment, decrement} from 'api/counter';
import {DataWaiter} from 'ui/components';

/* COUNTER */

const Counter = graphqls ( get )(
  ({ data }) => (
    <DataWaiter data={data}>
      <CounterActual counter={data.counter} />
    </DataWaiter>
  )
);

const CounterActual = graphqls ( increment, decrement )(
  ({ counter, increment, decrement }) => (
    <div className="counter">
      <Helmet title="Counter" />
      <h3>Counter</h3>
      <div className="value-wrp">
        <div className="value">
          {counter.value}
        </div>
      </div>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement} disabled={!counter.value}>DECREMENT</button>
    </div>
  )
);

/* EXPORT */

export {Counter};
