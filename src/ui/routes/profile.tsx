
/* ================================================================================
 * TRAM - UI - Routes - Profile
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import * as Helmet from 'react-helmet';
import {Redirect} from 'react-router-dom';
import {getByUsername} from 'api/user';
import graphqls from 'modules/graphqls';
import {DataWaiter, Profile as ProfileComponent} from 'ui/components';

/* PROFILE */

const Profile = ({ match }) => <ProfileWRP username={match.params.username} />;

const ProfileWRP = graphqls ( getByUsername )(
  ({ data, username }) => (
    <div>
      <Helmet title={`${username}'s profile`} />
      <DataWaiter data={data}>
        { data.user ? <ProfileComponent user={data.user} /> : <Redirect to="/" /> }
      </DataWaiter>
    </div>
  )
);

/* EXPORT */

export {Profile};
