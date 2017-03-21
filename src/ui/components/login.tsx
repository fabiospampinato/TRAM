
/* ================================================================================
 * TRAM - UI - Components - Login
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';

/* LOGIN */

const Login = () => (
  <div>
    <h3>Log In</h3>
    <form className="login" method="post">
      <label>Username:</label>
      <input name="username" />
      <label>Password:</label>
      <input name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

/* EXPORT */

export {Login};
