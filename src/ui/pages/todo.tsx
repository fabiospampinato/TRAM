
/* =================================================================================
 * ARRRT - UI - Pages - Todo
 * =================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/ARRRT/blob/master/LICENSE)
 * ================================================================================= */

/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';
import * as Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {VISIBILITIES, add, toggle, set, filter} from '../../redux/modules/todo';

/* COUNTER */

@connect (
  state => state.todo,
  { add, toggle, set }
)
class Todo extends React.Component<any, any> {

  refs: {
    input;
  };

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

    const {todos, visibility, toggle, set} = this.props,
          filtered = filter ( todos, visibility );

    return (
      <div className="todo">
        <Helmet title="Todo" />
        <h3>Todo ({todos.length})</h3>
        <input ref="input" placeholder="New todo..." onKeyDown={this.keydown.bind ( this )} />
        <button onClick={this.add.bind ( this )}>ADD</button>
        <div className="list">
          {filtered.map ( todo => {
            return <div key={todo.id} className={todo.done ? 'item done' : 'item'} onClick={() => toggle ( todo.id )}>{todo.text}</div>
          })}
        </div>
        <div className="visibilities">
          {VISIBILITIES.map ( VISIBILITY => {
            const isActive = visibility === VISIBILITY;
            return <span key={VISIBILITY} className={isActive ? 'active' : ''} onClick={() => set ( VISIBILITY )}>{_.upperFirst ( VISIBILITY.toLowerCase () )}</span>
          })}
        </div>
      </div>
    );

  }

}

/* EXPORT */

export {Todo};
