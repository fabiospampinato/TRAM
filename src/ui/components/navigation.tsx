
/* ================================================================================
 * TRAM - UI - Components - Navigation
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Link, IndexLink} from 'react-router';

/* NAVIGATION */

const NavLink = props => <Link activeClassName="active" {...props} />,
      NavIndexLink = props => <IndexLink activeClassName="active" {...props} />;

/* EXPORT */

export {NavLink, NavIndexLink};
