
/* ================================================================================
 * TRAM - UI - Components - Signup
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {withRouter} from 'react-router-dom';
import {signup} from 'api/user';
import {StickyRedirect, Autobind} from 'ui/components';
import {Signup as SignupForm} from 'ui/components/forms';

/* SIGNUP */

@withRouter
@graphqls ( signup )
class Signup extends Autobind<any, any> {

  state = { user: null };

  submit ( event, user ) {
    event.preventDefault ();
    this.props.signup ( user )
              .then ( ({ data: { user } }) => this.setState ({ user }) )
              .catch ( console.log.bind ( console ) );
  }

  render () {

    if ( this.state.user ) return <StickyRedirect to={`/@${this.state.user.username}`} />;

    return (
      <div>
        <h3>Sign Up</h3>
        <SignupForm onSubmit={this.submit} />
      </div>
    );

  }

}

/* EXPORT */

export {Signup};
