
/* ================================================================================
 * TRAM - UI - Components - Status
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';

/* STATUS */

const Status = ({ code, children }, { router }) => {
  if ( router ) router.staticContext.status = code;
  return children;
);

/* EXPORT */

export {Status};
