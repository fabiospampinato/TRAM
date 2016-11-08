
/* =================================================================================
 * ARRRT - UI - Components - Html
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import Environment from 'modules/environment';
import Settings from 'modules/settings';
import '../../../assets/custom.css'; //FIXME: Maybe move to a more appropriate place, perhaps split into indipendent chunks

/* HTML */

class Html extends React.Component<any, undefined> {

  private absoluteFile ( file ) {
    return Environment.isDevelopment ? `${Settings.hotServer.url}${file}` : `${Settings.server.url}${file}`; //FIXME: We should actually check if we are in a HOT environment, may can still do `start:server` (non :hot) manually
  }

  private resolveFile ( file ) {
    return this.props.manifest[file];
  }

  render () {

    const head = Helmet.rewind (),
          styles = [],
          scripts = [this.resolveFile ( 'client.vendor.js' ), this.absoluteFile ( '/public/js/client.js' )];

    return (
      <html>
        <head>
          {head.base.toComponent ()}
          {head.title.toComponent ()}
          {head.meta.toComponent ()}
          {head.link.toComponent ()}
          {head.script.toComponent ()}
          {styles.map ( ( src, i ) => <link rel="stylesheet" type="text/css" href={src} key={i} /> )}
          <link rel="shortcut icon" href="/assets/favicon.ico" />
        </head>
        <body>
          <main id="root">
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
