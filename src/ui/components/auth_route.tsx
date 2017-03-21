
/* ================================================================================
 * TRAM - UI - Components - Auth Route
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {getMe} from 'api/user';
import graphqls from 'modules/graphqls';
import {DataWaiter} from 'ui/components';

/* AUTH ROUTE */

const AuthRoute = graphqls ( getMe )(
  ({ data, component, ...rest }) => (
    <DataWaiter data={data} loading={null}>
      <Route {...rest} render={ props => data.user
        ? React.createElement ( component, props )
        : <Redirect to="/login" />
      } />
    </DataWaiter>
  )
);

/* EXPORT */

export {AuthRoute};
