
/* ================================================================================
 * TRAM - UI - Components - Data Waiter
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import renderComponent from 'react-render-component';
import {Loading} from './loading';
import {Error} from './error';

/* DATA WAITER */

const DataWaiter = ({ data, children, loading = Loading, error = Error }) => {
  if ( data.loading ) return renderComponent ( loading );
  if ( data.error ) return renderComponent ( error );
  return children || null;
};

/* EXPORT */

export {DataWaiter};
