
/* ================================================================================
 * TRAM - API - Counter - Fragments
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import './mongease';

/* FRAGMENTS */

const Counter = gql`
  fragment Counter on Counter {
    _id
    value
  }
`;

/* EXPORT */

export {Counter};
