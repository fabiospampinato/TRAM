
/* ================================================================================
 * TRAM - API - User - Fragments
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import './mongease';

/* FRAGMENTS */

const User = gql`
  fragment User on User {
    _id
    username
  }
`;

/* EXPORT */

export {User};
