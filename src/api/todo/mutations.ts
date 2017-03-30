
/* ================================================================================
 * TRAM - API - Todo - Mutations
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import {Todo} from './fragments';

/* MUTATIONS */

const clear = {
  gql: gql`
    mutation todoClear {
      todo: todoClear {
        ...Todo
      }
    }
    ${Todo}
  `,
  name: 'clear'
};

const add = {
  gql: gql`
    mutation todoAdd ( $text: String ) {
      todo: todoAdd ( text: $text ) {
        ...Todo
      }
    }
    ${Todo}
  `,
  props: ({ mutate }) => ({
    add: text => mutate ({
      variables: {text}
    })
  })
};

const toggleCheck = {
  gql: gql`
    mutation todoToggleCheck ( $id: Int ) {
      todo: todoToggleCheck ( id: $id ) {
        ...Todo
      }
    }
    ${Todo}
  `,
  props: ({ mutate }) => ({
    toggleCheck: id => mutate ({
      variables: {id}
    })
  })
};

const setVisibility = {
  gql: gql`
    mutation todoSetVisibility ( $visibility: String ) {
      todo: todoSetVisibility ( visibility: $visibility ) {
        ...Todo
      }
    }
    ${Todo}
  `,
  props: ({ mutate }) => ({
    setVisibility: visibility => mutate ({
      variables: {visibility}
    })
  })
};

/* EXPORT */

export {clear, add, toggleCheck, setVisibility};
