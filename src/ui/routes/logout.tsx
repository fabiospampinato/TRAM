
/* ================================================================================
 * TRAM - UI - Routes - Logout
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {Redirect} from 'react-router-dom';
import {logout} from 'api/user';

/* LOGOUT */

@graphqls ( logout )
class Logout extends React.Component<any, any> {
  componentWillMount () {
    this.props.logout ();
  }
  render () {
    return <Redirect to="/" />;
  }
}

/* EXPORT */

export {Logout};
