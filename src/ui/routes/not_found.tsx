
/* ================================================================================
 * TRAM - UI - Routes - Not Found
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Status} from 'ui/components';

/* NOT FOUND */

const NotFound = ({ location }) => (
  <div>
    <Status code={404} />
    <Helmet title="Error 404" />
    <div>Error 404 - <em>{location.pathname}</em> not found</div>
  </div>
);

/* EXPORT */

export {NotFound};
