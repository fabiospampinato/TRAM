
/* ================================================================================
 * TRAM - UI - Pages - Todo
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';
import * as Helmet from 'react-helmet';
import graphqls from 'modules/graphqls';
import {model, get, clear, add, toggleCheck, setVisibility} from 'api/todo';

/* COUNTER */

@graphqls ( get, clear, add, toggleCheck, setVisibility )
class Todo extends React.Component<any, any> {

  refs: { input };

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

    const {clear, toggleCheck, setVisibility, data: {loading, error, todo}} = this.props;

    if ( loading ) return <div>Loading...</div>;
    if ( error ) return <div>Error!</div>;

    const {visibilities, filter} = model,
          {list, visibility} = todo,
          filtered = filter ( list, visibility );

    return (
      <div className="todo">
        <Helmet title="Todo" />
        <h3>Todo ({list.length})</h3>
        <button onClick={clear.bind ( this )}>CLEAR</button>
        <input ref="input" placeholder="New todo..." onKeyDown={this.keydown.bind ( this )} />
        <button onClick={this.add.bind ( this )}>ADD</button>
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
