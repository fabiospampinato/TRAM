
/* ================================================================================
 * TRAM - Client
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import Settings from 'modules/settings';
import render from './render';

/* APP */

render ();

/* HOT */

if ( Settings.hotServer.enabled && module.hot ) {

  module.hot.accept ();

}
