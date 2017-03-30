
/* ================================================================================
 * TRAM - API - Todo - Fragments
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import gql from 'graphql-tag';
import './mongease';

/* FRAGMENTS */

const Todo = gql`
  fragment Todo on Todo {
    _id
    list {
      id
      text
      done
    }
    visibility
  }
`;

/* EXPORT */

export {Todo};
