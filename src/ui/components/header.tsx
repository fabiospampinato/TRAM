
/* ================================================================================
 * TRAM - UI - Components - Header
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {NavLink, NavIndexLink} from './navigation';

/* HEADER */

const Header = () => (
  <div className="header">
    <NavIndexLink to="/">Home</NavIndexLink>
    <span>•</span>
    <NavLink to="/counter">Counter</NavLink>
    <span>•</span>
    <NavLink to="/todo">Todo</NavLink>
    <div className="spacer"></div>
    <NavLink to="/signup">Sign Up</NavLink>
    <span>•</span>
    <NavLink to="/login">Log In</NavLink>
  </div>
);

/* EXPORT */

export {Header};
