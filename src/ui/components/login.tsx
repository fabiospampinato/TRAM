
/* ================================================================================
 * TRAM - UI - Components - Login
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {login} from 'api/user';
import graphqls from 'modules/graphqls';
import {Autobind} from 'ui/components/autobind';

/* LOGIN */

@withRouter
@graphqls ( login )
class Login extends Autobind<any, any> {

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
    this.props.login ( user )
              .then ( ({ data: { user } }) => this.props.history.push ( `/@${user.username}` ) )
              .catch ( console.log.bind ( console ) );
  }

  render () {
    return (
      <div>
        <h3>Log In</h3>
        <form className="login" onSubmit={this.submit}>
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

export {Login};
