
/* ================================================================================
 * TRAM - Server - Types
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* TYPES */

type context = {
  error?: Error,
  url?: string,
  status?: number
};

/* EXPORT */

export {context};
