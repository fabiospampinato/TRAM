
/* =========================================================================
 * REPONAME - API - Components
 * =========================================================================
 * Copyright (c) 2016-2017 Fabio Spampinato
 * Licensed under MIT (REPOLICENSE)
 * ========================================================================= */

/* IMPORT */

import * as _ from 'lodash';
import * as Scalars from './scalars';
import * as Counter from './counter';

/* COMPONENTS */

const Components = [
  _.values ( Scalars ),
  Counter
];

/* EXPORT */

export default Components;
