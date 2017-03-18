
/* ================================================================================
 * TRAM - UI - Pages - Not Found
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Status} from 'ui/components';

/* NOT FOUND */

const NotFound = ({ location }) => (
  <Status code={404}>
    <div>Error 404 - <em>{location.pathname}</em> not found</div>
  </Status>
);

/* EXPORT */

export {NotFound};
