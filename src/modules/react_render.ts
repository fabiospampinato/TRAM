
/* ================================================================================
 * TRAM - Modules - React Render
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

//TODO: Find it a better name
//TODO: Publish as a module, maybe, maybe there's already a published plugin with this functionality

/* IMPORT */

import * as _ from 'lodash';

/* REACT RENDER */

function ReactRender ( component ) {
  return _.isFunction ( component )
           ? component.prototype.isReactComponent
             ? new component ()
             : component ()
           : component;
}

/* EXPORT */

export default ReactRender;
