
/* ================================================================================
 * TRAM - UI - Pages - Signup
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'modules/graphqls';
import {signup} from 'api/user';

/* SIGNUP */

@graphqls ( signup )
class Signup extends React.Component<any, any> {

  refs: { username, password };

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
              .then ( () => this.props.router.push ( '/login' ) )
              .catch ( console.log.bind ( console ) );
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>
        <form className="signup" onSubmit={this.submit.bind ( this )}>
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
