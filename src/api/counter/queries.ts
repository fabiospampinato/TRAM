
/* ================================================================================
 * TRAM - API - Counter - Queries
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import {Counter} from './fragments';

/* QUERIES */

const get = {
  gql: gql`
    query counterGet {
      counter: counterGet {
        ...Counter
      }
    }
    ${Counter}
  `
};

/* EXPORT */

export {get};
