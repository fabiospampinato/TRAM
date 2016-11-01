
/* IMPORT */

import gql from 'graphql-tag';

/* MUTATIONS */

const increment = {
  mutation: gql`
    mutation Counter ( $id: Int ) {
      incrementCounter ( id: $id ) {
        id
        value
      }
    }
  `,
  props: ({ownProps, mutate}) => ({
    increment: () => mutate ({ variables: {
      id: ownProps.route.counterId
    }})
  })
};

const decrement = {
  mutation: gql`
    mutation Counter ( $id: Int ) {
      decrementCounter ( id: $id ) {
        id
        value
      }
    }
  `,
  props: ({ownProps, mutate}) => ({
    decrement: () => mutate ({ variables: {
      id: ownProps.route.counterId
    }})
  })
};

/* EXPORT */

export {increment, decrement};
