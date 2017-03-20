
/* ================================================================================
 * TRAM - UI - Components - Data Waiter
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import ReactRender from 'modules/react_render';
import {Loading} from './loading';
import {Error} from './error';

/* DATA WAITER */

const DataWaiter = ({ data, children, loading = Loading, error = Error }) => {
  if ( data.loading ) return ReactRender ( loading );
  if ( data.error ) return ReactRender ( error );
  return children;
};

/* EXPORT */

export {DataWaiter};
