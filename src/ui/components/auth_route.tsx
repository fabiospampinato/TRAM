
/* ================================================================================
 * TRAM - UI - Components - Auth Route
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {Route} from 'react-router-dom';
import {getMeFresh} from 'api/user';
import {DataWaiter, StickyRedirect} from 'ui/components';

/* AUTH ROUTE */

const AuthRoute = graphqls ( getMeFresh )(
  ({ component, data, ...rest }) => (
    <DataWaiter data={data} loading={null}>
      <Route {...rest} render={ props => data.user
        ? React.createElement ( component, props )
        : <StickyRedirect target to="/login" />
      } />
    </DataWaiter>
  )
);

/* EXPORT */

export {AuthRoute};
