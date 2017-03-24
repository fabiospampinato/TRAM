
/* ================================================================================
 * TRAM - UI - Components - HTML
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Helmet} from 'react-helmet';
import Settings from 'modules/settings';
import 'ui/template';

/* HTML */

class HTML extends React.Component<any, undefined> {

  private resolveFile ( file, hot = true ) {

    const baseurl  = hot && Settings.hotServer.enabled ? Settings.hotServer.url : Settings.server.url,
          manifest = this.props.manifests.find ( manifest => file in manifest ),
          filepath = manifest ? manifest[file] : '';

    return `${baseurl}${filepath}`;

  }

  render () {

    const {content, state} = this.props,
          helmet = Helmet.renderStatic (),
          stylesheets = DEVELOPMENT ? [] : [this.resolveFile ( 'client.css' )],
          scripts = [this.resolveFile ( 'client.vendor.js', false ), this.resolveFile ( 'client.js' )];

    let stylesheet: JSX.Element | null = null;

    if ( DEVELOPMENT ) {

      const styles = require ( 'ui/styles' ).default;

      if ( CLIENT ) {

        styles.forEach ( style => style._insertCss () );

      } else {

        const css = styles.map ( style => style._getCss () ).join ( '' );

        stylesheet = <style>{css}</style>;

      }

    }

    return (
      <html {...helmet.htmlAttributes.toComponent ()}>
        <head>
          {helmet.base.toComponent ()}
          {helmet.title.toComponent ()}
          {helmet.meta.toComponent ()}
          {helmet.link.toComponent ()}
          {helmet.style.toComponent ()}
          {helmet.script.toComponent ()}
          {helmet.noscript.toComponent ()}
          {stylesheet}
          {stylesheets.map ( ( src, i ) => <link rel="stylesheet" type="text/css" href={src} key={i} /> )}
        </head>
        <body {...helmet.bodyAttributes.toComponent ()}>
          <main id="app-root" dangerouslySetInnerHTML={{ __html: content }}></main>
          <script dangerouslySetInnerHTML={{ __html: `window.__REDUX_STATE__ = ${JSON.stringify ( state )}`}} />
          {scripts.map ( ( src, i ) => <script src={src} key={i}></script> )}
        </body>
      </html>
    );

  }

}

/* EXPORT */

export {HTML};
