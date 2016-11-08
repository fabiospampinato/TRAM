
/* =========================================================================
 * ARRRT - UI - Components - Header
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */
import * as React from 'react';
import {Link} from 'react-router';

/* HEADER */

class Header extends React.Component<any, any> {
  render () {
    return (
      <div className="header">
        <Link to="/">Home</Link>
        <span>•</span>
        <Link to="/counter">Counter</Link>
        <span>•</span>
        <Link to="/todo">Todo</Link>
        <div className="spacer"></div>
        <Link to="/signup">Sign Up</Link>
        <span>•</span>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
}

/* EXPORT */

export {Header};
