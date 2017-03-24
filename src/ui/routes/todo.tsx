
/* ================================================================================
 * TRAM - UI - Routes - Todo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {Helmet} from 'react-helmet';
import {get} from 'api/todo';
import {DataWaiter, Todo as TodoComponent} from 'ui/components';

/* COUNTER */

const Todo = graphqls ( get )(
  ({ data }) => (
    <div>
      <Helmet>
        <title>Todo</title>
      </Helmet>
      <DataWaiter data={data}>
        <TodoComponent todo={data.todo} />
      </DataWaiter>
    </div>
  )
);

/* EXPORT */

export {Todo};
