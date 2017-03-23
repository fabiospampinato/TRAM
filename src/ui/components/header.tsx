
/* ================================================================================
 * TRAM - UI - Components - Header
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import {NavLink} from 'react-router-dom';
import {getMe} from 'api/user';
import {DataWaiter} from './data_waiter';

/* HEADER */

const HeaderLink = props => <NavLink activeClassName="active" {...props} />;

const HeaderUserLogged = ({ user }) => (
  <div>
    <HeaderLink to={`/@${user.username}`}><em>{user.username}</em></HeaderLink>
    <span>•</span>
    <HeaderLink to="/logout">Log Out</HeaderLink>
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

export {HeaderLink, HeaderUser, HeaderUserUnlogged, HeaderUserLogged, Header};
