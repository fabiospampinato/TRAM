
/* =========================================================================
 * ARRRT - UI - Pages - Signup
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';
import {Link} from 'react-router';

/* SIGNUP */

class Signup extends React.Component<any, any> {

  submit ( event ) {
    event.preventDefault ();
    console.log('submitting...');
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>
        <form className="signup" onSubmit={this.submit.bind ( this )}>
          <label>Username:</label>
          <input ref="username" name="username" />
          <label>Email:</label>
          <input ref="email" name="email" type="email" />
          <label>Password:</label>
          <input ref="password" name="password" type="password" />
          <label>Repeat password:</label>
          <input ref="password_repeat" name="password_repeat" type="password" />
          <Link to="/login" title="Log in">Already have an account?</Link>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }

}

/* EXPORT */

export {Signup};
