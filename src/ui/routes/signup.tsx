
/* ================================================================================
 * TRAM - UI - Routes - Signup
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Signup as SignupComponent} from 'ui/components';

/* Signup */

const Signup = () => (
  <div>
    <Helmet title="Sign Up" />
    <SignupComponent />
  </div>
);

/* EXPORT */

export {Signup};
