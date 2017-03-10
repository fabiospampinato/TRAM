
/* ================================================================================
 * TRAM - UI - Components - App
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import Settings from 'modules/settings';
import {Header} from './header';

/* APP */

const App = ({ children }) => (
  <div className="app">
    <Helmet {...Settings.helmet.head} />
    <Header />
    <div className="content">
      {children}
    </div>
  </div>
);

/* EXPORT */

export {App};
