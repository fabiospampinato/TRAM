
/* ================================================================================
 * TRAM - UI - Components - Sticky Redirect
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';
import {withRouter, Redirect} from 'react-router-dom';

/* REDIRECT */

const StickyRedirect = withRouter ( ({ location, target, to }) => {
  if ( target ) {
    if ( _.isString ( to ) ) to = { pathname: to };
    to = _.merge ( to, { state: { from: location } } );
    return <Redirect to={to} />;
  } else {
    const {state} = location;
    return <Redirect to={state && state.from ? state.from : to} />;
  }
});

/* EXPORT */

export {StickyRedirect};
