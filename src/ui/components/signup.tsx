
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
import {StickyRedirect} from 'ui/components';
import {Autobind} from 'ui/components/autobind';

/* SIGNUP */

@withRouter
@graphqls ( signup )
class Signup extends Autobind<any, any> {

  refs: { username, password };

  state = { user: null };

  getUser () {
    return {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
  }

  submit ( event ) {
    event.preventDefault ();
    const user = this.getUser ();
    this.props.signup ( user )
              .then ( ({ data: { user } }) => this.setState ({ user }) )
              .catch ( console.log.bind ( console ) );
  }

  render () {

    if ( this.state.user ) return <StickyRedirect to={`/@${this.state.user.username}`} />;

    return (
      <div>
        <h3>Sign Up</h3>
        <form className="signup" onSubmit={this.submit}>
          <label>Username:</label>
          <input ref="username" name="username" />
          <label>Password:</label>
          <input ref="password" name="password" type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );

  }

}

/* EXPORT */

export {Signup};
