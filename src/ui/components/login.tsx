
/* ================================================================================
 * TRAM - UI - Components - Login
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {withRouter} from 'react-router-dom';
import {login} from 'api/user';
import {StickyRedirect} from 'ui/components';
import {Login as LoginForm} from 'ui/components/forms';

/* LOGIN */

@withRouter
@graphqls ( login )
class Login extends React.Component<any, any> {

  state = { user: null };

  submit = ( event, user ) => {
    event.preventDefault ();
    this.props.login ( user )
              .then ( ({ data: { user } }) => this.setState ({ user }) )
              .catch ( console.log.bind ( console ) );
  }

  render () {

    if ( this.state.user ) return <StickyRedirect to={`/@${this.state.user.username}`} />;

    return (
      <div>
        <h3>Log In</h3>
        <LoginForm onSubmit={this.submit} />
      </div>
    );

  }

}

/* EXPORT */

export {Login};
