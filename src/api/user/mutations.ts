
/* ================================================================================
 * TRAM - API - User - Mutations
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Builder from 'mongease-graphql-builder';
import './mongease';

/* MUTATIONS */

const signup = {
  gql: Builder.mutation ( 'userSignup' ),
  props: ({ mutate }) => ({
    signup: user => mutate ({
      variables: user
    })
  })
};

const login = {
  gql: Builder.mutation ( 'userLogin' ),
  props: ({ mutate }) => ({
    login: user => mutate ({
      variables: user
    })
  })
};

const logout = {
  gql: Builder.mutation ( 'userLogout' ),
  name: 'logout',
}

/* EXPORT */

export {signup, login, logout};
