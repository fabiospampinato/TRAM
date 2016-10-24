const appConfig = require('../modules/settings');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from '../components';

class App extends React.Component<any, any> {
  public render() {
    return (
      <section>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export { App }
