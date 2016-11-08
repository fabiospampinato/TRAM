
/* =========================================================================
 * REPONAME - UI - Routes
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';
import {IndexRoute, Route} from 'react-router';
import {App} from './components';
import {Counter, Home, Todo} from './pages';

/* ROUTES */

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="counter" component={Counter} counterId={1} />
    <Route path="todo" component={Todo} />
  </Route>
);

/* EXPORT */

export default Routes;
