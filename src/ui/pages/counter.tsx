
/* ================================================================================
 * TRAM - UI - Pages - Counter
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import graphqls from 'modules/graphqls';
import {get, increment, decrement} from 'api/counter';

/* COUNTER */

@graphqls ( get, increment, decrement )
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
