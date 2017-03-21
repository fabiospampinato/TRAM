
/* ================================================================================
 * TRAM - UI - Routes - Login
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Login as LoginComponent} from 'ui/components';

/* LOGIN */

const Login = () => (
  <div>
    <Helmet title="Log In" />
    <LoginComponent />
  </div>
);

/* EXPORT */

export {Login};
