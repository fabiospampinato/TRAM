
/* ================================================================================
 * TRAM - API - User - Mutations
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import {User} from './fragments';

/* MUTATIONS */

const signup = {
  gql: gql`
    mutation userSignup ( $username: String, $password: String ) {
      user: userSignup ( username: $username, password: $password ) {
        ...User
      }
    }
    ${User}
  `,
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
  gql: gql`
    mutation userLogin ( $username: String, $password: String ) {
      user: userLogin ( username: $username, password: $password ) {
        ...User
      }
    }
    ${User}
  `,
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
  gql: gql`
    mutation userLogout {
      user: userLogout {
        ...User
      }
    }
    ${User}
  `,
  name: 'logout',
  options: {
    refetchQueries: ['userGetMe']
  }
};

/* EXPORT */

export {signup, login, logout};
