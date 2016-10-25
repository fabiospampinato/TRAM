
/* IMPORT */

import * as React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../redux/modules/counter';

/* COUNTER */

@connect (
  state => ({ counter: state.counter }),
  dispatch => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment())
  })
)
class Counter extends React.Component<any, any> {
  render () {
    let {increment, decrement, counter} = this.props;
    return (
      <div>
        <h4>Counter Example</h4>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement} disabled={counter.count <= 0}>DECREMENT</button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

/* EXPORT */

export {Counter};
