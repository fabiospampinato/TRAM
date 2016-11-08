
/* =========================================================================
 * REPONAME - UI - Components - App
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
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
      <main>
        <Helmet {...Settings.helmet.head} />
        <Header />
        {this.props.children}
      </main>
    );
  }
}

/* EXPORT */

export {App};
