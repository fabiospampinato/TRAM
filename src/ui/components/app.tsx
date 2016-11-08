
/* =========================================================================
 * ARRRT - UI - Components - App
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import Settings from 'modules/settings';
import {Header} from './header';

/* APP */

class App extends React.Component<any, any> {
  render () {
    return (
      <div className="app">
        <Helmet {...Settings.helmet.head} />
        <Header />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

/* EXPORT */

export {App};
