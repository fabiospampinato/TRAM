
/* ================================================================================
 * TRAM - UI - Components - Header
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {NavLink} from 'react-router-dom';
import graphqls from 'modules/graphqls';
import {getMe} from 'api/user';
import {DataWaiter} from 'ui/components';

/* HEADER */

const HeaderLink = props => <NavLink activeClassName="active" {...props} />;

class LogoutLink extends React.Component<any, any> {
  reset () {
    this.props.client.resetStore ();
  }
  render () {
    return <HeaderLink to="/logout" onClick={this.reset.bind ( this )}>Log Out</HeaderLink>
  }
}

const HeaderUserLogged = ({ user }) => (
  <div>
    <HeaderLink to={`/@${user.username}`}><em>{user.username}</em></HeaderLink>
    <span>•</span>
    <LogoutLink />
  </div>
);

const HeaderUserUnlogged = () => (
  <div>
    <HeaderLink to="/signup">Sign Up</HeaderLink>
    <span>•</span>
    <HeaderLink to="/login">Log In</HeaderLink>
  </div>
);

const HeaderUser = graphqls ( getMe )(
  ({ data }) => (
    <DataWaiter data={data} loading={null}>
      { data.user ? <HeaderUserLogged user={data.user} /> : <HeaderUserUnlogged /> }
    </DataWaiter>
  )
);

const Header = () => (
  <div className="header">
    <HeaderLink exact to="/">Home</HeaderLink>
    <span>•</span>
    <HeaderLink to="/counter">Counter</HeaderLink>
    <span>•</span>
    <HeaderLink to="/todo">Todo</HeaderLink>
    <div className="spacer"></div>
    <HeaderUser />
  </div>
);

/* EXPORT */

export {HeaderLink, LogoutLink, HeaderUser, HeaderUserUnlogged, HeaderUserLogged, Header};
