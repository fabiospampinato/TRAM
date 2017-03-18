
/* ================================================================================
 * TRAM - UI - Components - App
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Switch, Route} from 'react-router-dom';
import Settings from 'modules/settings';
import {Counter, Error, Login, Home, NotFound, Signup, Todo} from '../pages';
import {Header} from './header';

/* APP */

const App = () => (
  <div className="app">
    <Helmet {...Settings.helmet.head} />
    <Header />
    <div className="app-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/error" component={Error} />
        <Route path="/counter" component={Counter} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/todo" component={Todo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

/* EXPORT */

export {App};
