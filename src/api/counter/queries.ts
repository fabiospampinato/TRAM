
/* IMPORT */

import gql from 'graphql-tag';

/* QUERIES */

const get = {
  query: gql`
    query Counter ( $id: Int ) {
      counter: getCounter ( id: $id ) {
        id
        value
      }
    }
  `,
  options: ownProps => ({
    variables: {
      id: ownProps.route.counterId
    }
  })
};

/* EXPORT */

export {get};
