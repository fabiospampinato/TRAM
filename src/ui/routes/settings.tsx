
/* ================================================================================
 * TRAM - UI - Routes - Settings
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import graphqls from 'react-apollo-graphqls';
import * as Helmet from 'react-helmet';
import {Redirect} from 'react-router-dom';
import {getMe} from 'api/user';
import {DataWaiter, Settings as SettingsComponent} from 'ui/components';

/* SETTINGS */

const Settings = graphqls ( getMe )(
  ({ data }) => (
    <div>
      <Helmet title="Settings" />
      <DataWaiter data={data}>
        { data.user ? <SettingsComponent user={data.user} /> : <Redirect to="/" /> }
      </DataWaiter>
    </div>
  )
);

/* EXPORT */

export {Settings};
