
/* ================================================================================
 * TRAM - UI - Components - HTML
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {renderToString} from 'react-dom/server';
import * as Helmet from 'react-helmet';
import Environment from 'modules/environment';
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

    const head = Helmet.rewind (),
          styles = Environment.isDevelopment ? [] : [this.resolveFile ( 'client.css' )],
          scripts = [this.resolveFile ( 'client.vendor.js', false ), this.resolveFile ( 'client.js' )],
          content = renderToString ( this.props.children );

    return (
      <html {...head.htmlAttributes.toComponent ()}>
        <head>
          {head.base.toComponent ()}
          {head.title.toComponent ()}
          {head.meta.toComponent ()}
          {head.link.toComponent ()}
          {head.script.toComponent ()}
          {head.noscript.toComponent ()}
          {styles.map ( ( src, i ) => <link rel="stylesheet" type="text/css" href={src} key={i} /> )}
        </head>
        <body>
          <main id="app-root" dangerouslySetInnerHTML={{ __html: content }}></main>
          {scripts.map ( ( src, i ) => <script src={src} key={i}></script> )}
        </body>
      </html>
    );

  }

}

/* EXPORT */

export {HTML};
