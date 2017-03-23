
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
  }),
  options: {
    refetchQueries: ['userGetMe']
  }
};

const login = {
  gql: Builder.mutation ( 'userLogin' ),
  props: ({ mutate }) => ({
    login: user => mutate ({
      variables: user
    })
  }),
  options: {
    refetchQueries: ['userGetMe']
  }
};

const logout = {
  gql: Builder.mutation ( 'userLogout' ),
  name: 'logout',
  options: {
    refetchQueries: ['userGetMe']
  }
}

/* EXPORT */

export {signup, login, logout};
