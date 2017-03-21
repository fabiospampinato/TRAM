
/* ================================================================================
 * TRAM - UI - Components - Counter
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {increment, decrement} from 'api/counter';
import graphqls from 'modules/graphqls';

/* COUNTER */

const Counter = graphqls ( increment, decrement )(
  ({ counter, increment, decrement }) => (
    <div className="counter">
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
