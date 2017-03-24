
/* ================================================================================
 * TRAM - UI - Routes - Counter
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {Helmet} from 'react-helmet';
import {get} from 'api/counter';
import {DataWaiter, Counter as CounterComponent} from 'ui/components';

/* COUNTER */

const Counter = graphqls ( get )(
  ({ data }) => (
    <div>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <DataWaiter data={data}>
        <CounterComponent counter={data.counter} />
      </DataWaiter>
    </div>
  )
);

/* EXPORT */

export {Counter};
