
/* =========================================================================
 * REPONAME - UI - Components - Html
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';

/* HTML */

class Html extends React.Component<any, undefined> {

  private resolveFile ( file ) {
    return this.props.manifest[file];
  }

  render () {

    let head = Helmet.rewind (),
        styles = [],
        scripts = [this.resolveFile ( 'client.vendor.js' ), '/public/js/client.js'];

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
          <main id="app">
            {this.props.children}
          </main>
          {scripts.map ( ( src, i ) => <script src={src} key={i}></script> )}
        </body>
      </html>
    );

  }

}

/* EXPORT */

export {Html};
