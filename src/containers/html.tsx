
/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';

/* HTML */

class Html extends React.Component<any, undefined> {

  render () {

    let {markup, store} = this.props;

    if ( !markup ) throw new Error ( 'Missing markup' );
    if ( !store ) throw new Error ( 'Missing store' );

    let head = Helmet.rewind (),
        styles = [],
        scripts = ['/public/js/client.js'];

    return (
      <html>
        <head>
          {head.base.toComponent ()}
          {head.title.toComponent ()}
          {head.meta.toComponent ()}
          {head.link.toComponent ()}
          {head.script.toComponent ()}
          {styles.map ( ( src, i ) => <link rel="stylesheet" type="text/css" href={src} key={i} /> )}
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body>
          <main id="app" dangerouslySetInnerHTML={{ __html: markup }}></main>
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify ( store.getState () )};`}} charSet="UTF-8" />
          {scripts.map ( ( src, i ) => <script src={src} key={i}></script> )}
        </body>
      </html>
    );

  }

}

/* EXPORT */

export {Html};
