
/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Header} from '../components';
import Settings from '../modules/settings';

/* APP */

class App extends React.Component<any, any> {
  render () {
    return (
      <section>
        <Helmet {...Settings.helmet} {...Settings.helmet.head}/>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

/* EXPORT */

export {App};
