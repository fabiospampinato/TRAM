
/* =========================================================================
 * ARRRT - UI - Pages - Home
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/arrrt/blob/master/LICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';

/* HOME */

class Home extends React.Component<any, any> {
  render () {
    return (
      <div className="home">
        <img src="assets/images/barbar.png" />
        <p>Hello!</p>
      </div>
    );
  }
}

/* EXPORT */

export {Home};
