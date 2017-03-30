
/* ================================================================================
 * TRAM - API - User - Queries
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import {User} from './fragments';

/* QUERIES */

const getMe = {
  gql: gql`
    query userGetMe {
      user: userGetMe {
        ...User
      }
    }
    ${User}
  `
};

const getMeFresh = {
  gql: getMe.gql,
  options: {
    fetchPolicy: 'network-only'
  }
};

const getByUsername = {
  gql: gql`
    query userGetByUsername ( $username: String ) {
      user: userGetByUsername ( username: $username ) {
        ...User
      }
    }
    ${User}
  `
};

/* EXPORT */

export {getMe, getMeFresh, getByUsername};
