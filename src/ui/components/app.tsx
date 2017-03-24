
/* ================================================================================
 * TRAM - UI - Components - App
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Switch, Route} from 'react-router-dom';
import Settings from 'modules/settings';
import {AuthRoute} from 'ui/components';
import {Counter, Error, Home, Login, Logout, NotFound, Profile, Settings as SettingsRoute, Signup, Todo} from 'ui/routes';
import {Header} from './header';

/* APP */

const App = () => (
  <div className="app">
    <Helmet {...Settings.helmet}>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Boilerplate for building reactive isomorphic applications. Built around TypeScript, React, Apollo, MongoDB." />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Helmet>
    <Header />
    <div className="app-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/@:username" component={Profile} />
        <Route path="/counter" component={Counter} />
        <Route path="/error" component={Error} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <AuthRoute path="/settings" component={SettingsRoute} />
        <Route path="/signup" component={Signup} />
        <Route path="/todo" component={Todo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

/* EXPORT */

export {App};
