
/* ================================================================================
 * TRAM - Modules - Settings - Tests
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {describe} from 'ava-spec';
import Settings, {getSettings} from 'modules/settings';

/* TESTS */

describe ( 'Settings', it => {

  it ( 'Loads the appropriate settings', t => {

    t.is ( Settings.environment, ENVIRONMENT );

  });

});

describe ( 'getSettings', it => {

  it ( 'Throws an error if it doesn\'t find the settings', t => {

    t.throws ( () => getSettings ( '__test__' ), /Cannot find module/ );

  });

  it ( 'Loads the requested settings', t => {

    const envs = ['development', 'production'];

    for ( let env of envs ) {

      t.is ( getSettings ( env ).environment, env );

    }

  });

});
