
/* ================================================================================
 * TRAM - UI - Routes - Error
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Status} from 'ui/components';

/* ERROR */

const Error = ({ staticContext }) => (
  <div>
    <Status code={staticContext && staticContext.status ? staticContext.status : 500} />
    <Helmet>
      <title>Error</title>
    </Helmet>
    {DEVELOPMENT && staticContext && staticContext.error ? <pre>{staticContext.error.stack}</pre> : <div>Internal Server Error</div>}
  </div>
);

/* EXPORT */

export {Error};
