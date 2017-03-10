
/* ================================================================================
 * TRAM - Modules - GraphQLs
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

//TODO: Publish as a module, maybe

/* IMPORT */

import {graphql} from 'react-apollo';

/* GRAPHQLS */

function graphqls ( ...ops ) {
  return function ( target ) {
    return ops.reverse ().reduce ( ( target, op ) => graphql ( op.gql, op )( target ), target );
  }
}

/* EXPORT */

export default graphqls;
