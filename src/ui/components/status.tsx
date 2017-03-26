
/* ================================================================================
 * TRAM - UI - Components - Status
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* STATUS */

const Status = ({ code, children }: { code: number, children: any }, { router }) => {
  if ( router ) router.staticContext.status = code;
  return children || null;
};

/* EXPORT */

export {Status};
