
/* =================================================================================
 * ARRRT - UI - Pages - Login
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as React from 'react';

/* LOGIN */

class Login extends React.Component<any, any> {

  submit ( event ) {
    event.preventDefault ();
    console.log('submitting...');
  }

  render () {
    return (
      <div>
        <h3>Log In</h3>
        <form className="login" onSubmit={this.submit.bind ( this )}>
          <label>Email:</label>
          <input ref="email" name="email" type="email" />
          <label>Password:</label>
          <input ref="password" name="password" type="password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }

}

/* EXPORT */

export {Login};
