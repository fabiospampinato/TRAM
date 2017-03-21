
/* ================================================================================
 * TRAM - UI - Routes - Error
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Status} from 'ui/components';

/* ERROR */

const Error = ({ staticContext: { error, code } }) => (
  <div>
    <Status code={code || 500} />
    <Helmet title="Error" />
    {DEVELOPMENT && error ? <pre>{error.stack}</pre> : <div>Internal Server Error</div>}
  </div>
);

/* EXPORT */

export {Error};
