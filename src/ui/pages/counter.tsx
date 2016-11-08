
/* =========================================================================
 * ARRRT - UI - Pages - Counter
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {graphql} from 'react-apollo';
import {get} from 'api/counter/queries';
import {increment, decrement} from 'api/counter/mutations';

/* COUNTER */

@graphql ( get.query, get )
@graphql ( increment.mutation, increment )
@graphql ( decrement.mutation, decrement )
class Counter extends React.Component<any, any> {
  render () {
    const {increment, decrement, data: {loading, error, counter}} = this.props;
    if ( loading ) return <div>Loading...</div>;
    if ( error ) return <div>Error!</div>;
    return (
      <div className="counter">
        <Helmet title="Counter" />
        <h3>Counter</h3>
        <div className="value-wrp">
          <div className="value">
            {counter.value}
          </div>
        </div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement} disabled={!counter.value}>DECREMENT</button>
      </div>
    );
  }
}

/* EXPORT */

export {Counter};
