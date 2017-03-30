
/* ================================================================================
 * TRAM - API - Counter - Mutations
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import {Counter} from './fragments';

/* MUTATIONS */

const increment = {
  gql: gql`
    mutation counterIncrement {
      counter: counterIncrement {
        ...Counter
      }
    }
    ${Counter}
  `,
  name: 'increment'
};

const decrement = {
  gql: gql`
    mutation counterDecrement {
      counter: counterDecrement {
        ...Counter
      }
    }
    ${Counter}
  `,
  name: 'decrement'
};

/* EXPORT */

export {increment, decrement};
