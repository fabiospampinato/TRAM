
/* IMPORT */

import * as React from 'react';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect';
import {getStars} from '../redux/modules/stars';

/* STARS */

@asyncConnect ([{
  promise: ({ store: { dispatch } }) => {
    return dispatch ( getStars () );
  }
}])
@connect (
  state => ({ stars: state.stars })
)
class Stars extends React.Component<any, any> {

  render () {
    let { stars } = this.props;
    return(
      <div>
        { stars.isFetching ? 'Fetching Stars...' : stars.count }
      </div>
    );
  }
}

/* EXPORT */

export {Stars};
