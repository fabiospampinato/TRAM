
/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';
import {connect} from 'react-redux';
import {VISIBILITIES, add, toggle, set, filter} from '../redux/modules/todo';

/* COUNTER */

@connect (
  state => state.todo,
  { add, toggle, set }
)
class Todo extends React.Component<any, any> {

  keydown ( event ) {

    if ( event.keyCode !== 13 ) return; // Enter key

    event.preventDefault ();

    this.add ();

    this.refs.input.value = '';

  }

  add () {
    this.props.add ( this.refs.input.value );
  }

  render () {

    console.log(this.props)

    let {todos, visibility, toggle, set} = this.props,
        filtered = filter ( todos, visibility );

    return (
      <div>
        <h4>Todo ({todos.length})</h4>
        <input ref="input" placeholder="New todo..." onKeyDown={this.keydown.bind ( this )} />
        <button onClick={this.add.bind ( this )}>ADD</button>
        <ul>
          {filtered.map ( todo => {
            let style = {
              textDecoration: todo.done ? 'line-through' : 'none'
            };
            return <li key={todo.id} style={style} onClick={() => toggle ( todo.id )}>{todo.text}</li>
          })}
        </ul>
        <div>
          {VISIBILITIES.map ( VISIBILITY => {
            let isActive = visibility === VISIBILITY;
            let style = {
              cursor: isActive ? 'normal' : 'pointer',
              fontWeight: isActive ? 'bold' : 'normal'
            };
            return <div key={VISIBILITY} style={style} onClick={() => set ( VISIBILITY )}>{_.upperFirst ( VISIBILITY.toLowerCase () )}</div>
          })}
        </div>
      </div>
    );

  }

}

/* EXPORT */

export {Todo};
