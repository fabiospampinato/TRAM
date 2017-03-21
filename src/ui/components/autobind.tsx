
/* ================================================================================
 * TRAM - UI - Components - Autobind
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';

/* AUTOBIND */

class Autobind<P, S> extends React.Component<P, S> {

  constructor () {

    super ();

    const prototype = Object.getPrototypeOf ( this ),
          allProperties = Object.getOwnPropertyNames ( prototype ),
          reactProperties = ['constructor', 'componentWillMount', 'render', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'],
          bindableProperties = _.difference ( allProperties, reactProperties );

    _.bindAll ( this, bindableProperties );

  }

}

/* EXPORT */

export {Autobind};
