
/* ================================================================================
 * TRAM - UI - Components - Forms - Signup
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import reformed from 'react-reformed';

/* SIGNUP */

const Signup = reformed ()(
  ({ bindInput, model, onSubmit }) => (
    <form onSubmit={e => onSubmit ( e, model )}>
      <label>Username:</label>
      <input type="text" {...bindInput ( 'username' )} />
      <label>Password:</label>
      <input type="password" {...bindInput ( 'password' )} />
      <button type="submit">Submit</button>
    </form>
  )
);

/* EXPORT */

export {Signup};
