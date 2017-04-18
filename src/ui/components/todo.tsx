
/* ================================================================================
 * TRAM - UI - Components - Todo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import reformed from 'react-reformed';
import {model as TodoModel, clear, add, toggleCheck, setVisibility} from 'api/todo';

/* TODO */

@reformed ()
@graphqls ( clear, add, toggleCheck, setVisibility )
class Todo extends React.Component<any, undefined> {

  keydown = ( event ) => {

    if ( event.keyCode !== 13 ) return; // Enter key

    event.preventDefault ();

    this.add ();

    this.props.setProperty ( 'todo', '' );

  }

  add = () => {

    this.props.add ( this.props.model.todo );

  }

  render () {

    const {todo, clear, toggleCheck, setVisibility, bindInput} = this.props,
          {visibilities, filter} = TodoModel,
          {list, visibility} = todo,
          filtered = filter ( list, visibility );

    return (
      <div className="todo">
        <h3>Todo ({list.length})</h3>
        <button onClick={clear}>CLEAR</button>
        <input placeholder="New todo..." {...bindInput ( 'todo' )} onKeyDown={this.keydown} />
        <button onClick={this.add}>ADD</button>
        <div className="list">
          {filtered.map ( todo => {
            const className = todo.done ? 'item done' : 'item';
            return <div key={todo.id} className={className} onClick={() => toggleCheck ( todo.id )}>{todo.text}</div>
          })}
        </div>
        <div className="visibilities">
          {visibilities.map ( v => {
            const isActive = ( visibility === v ),
                  className = isActive ? 'active' : '',
                  name = _.upperFirst ( v.toLowerCase () );
            return <span key={v} className={className} onClick={() => setVisibility ( v )}>{name}</span>
          })}
        </div>
      </div>
    );

  }

}

/* EXPORT */

export {Todo};
