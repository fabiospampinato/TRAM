
/* ================================================================================
 * TRAM - API - Todo - Mutations
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Builder from 'mongease-graphql-builder';
import './mongease';

/* MUTATIONS */

const clear = {
  gql: Builder.mutation ( 'todoClear' ),
  name: 'clear'
};

const add = {
  gql: Builder.mutation ( 'todoAdd' ),
  props: ({ mutate }) => ({
    add: text => mutate ({
      variables: {text}
    })
  })
};

const toggleCheck = {
  gql: Builder.mutation ( 'todoToggleCheck' ),
  props: ({ mutate }) => ({
    toggleCheck: id => mutate ({
      variables: {id}
    })
  })
};

const setVisibility = {
  gql: Builder.mutation ( 'todoSetVisibility' ),
  props: ({ mutate }) => ({
    setVisibility: visibility => mutate ({
      variables: {visibility}
    })
  })
};

/* EXPORT */

export {clear, add, toggleCheck, setVisibility};
