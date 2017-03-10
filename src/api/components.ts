
/* ================================================================================
 * TRAM - API - Components
 * ================================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as _ from 'lodash';
import * as Counter from './counter';

/* COMPONENTS */

const Components = [
  _.values ( Scalars ),
  Counter
];

/* EXPORT */

export default Components;
