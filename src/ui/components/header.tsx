
/* ================================================================================
 * TRAM - UI - Components - Header
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'modules/graphqls';
import {getMe} from 'api/user';
import {NavLink, NavIndexLink} from './navigation';

/* HEADER */

const HeaderUser = graphqls ( getMe )( ({ data }) => {
  const { loading, error, user } = data;
  if ( loading ) return null;
  if ( error ) return <div>Error!</div>;
  if ( !user ) return <HeaderUserUnlogged />;
  return <HeaderUserLogged user={user} />;
});

const HeaderUserUnlogged = () => (
  <div>
    <NavLink to="/signup">Sign Up</NavLink>
    <span>•</span>
    <NavLink to="/login">Log In</NavLink>
  </div>
);

const HeaderUserLogged = ({ user }) => (
  <div>
    <em>{user.username}</em>
    <span>•</span>
    <LogoutLink />
  </div>
);

class LogoutLink extends React.Component<any, any> {
  reset () {
    this.props.client.resetStore ();
  }
  render () {
    return <NavLink to="/logout" onClick={this.reset.bind ( this )}>Log Out</NavLink>
  }
}

const Header = () => (
  <div className="header">
    <NavIndexLink to="/">Home</NavIndexLink>
    <span>•</span>
    <NavLink to="/counter">Counter</NavLink>
    <span>•</span>
    <NavLink to="/todo">Todo</NavLink>
    <div className="spacer"></div>
    <HeaderUser />
  </div>
);

/* EXPORT */

export {LogoutLink, HeaderUser, HeaderUserUnlogged, HeaderUserLogged, Header};
