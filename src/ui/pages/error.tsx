
/* ================================================================================
 * TRAM - UI - Pages - Error
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Status} from 'ui/components';

/* ERROR */

const Error = ({ staticContext: { error } }) => (
  <Status code={500}>
    {DEVELOPMENT && error ? <pre>{error.stack}</pre> : <div>Internal Server Error</div>}
  </Status>
);

/* EXPORT */

export {Error};
