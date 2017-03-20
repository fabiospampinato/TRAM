
/* ================================================================================
 * TRAM - UI - Pages - Profile
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {getByUsername} from 'api/user';
import graphqls from 'modules/graphqls'
import {DataWaiter} from 'ui/components';

/* PROFILE */

const Profile = ({ match }) => {
  return <ProfileActual username={match.params.username} />;
};

const ProfileActual = graphqls ( getByUsername )(
  ({ data }) => (
    <DataWaiter data={data}>
      { data.user ? <div>This is <em>{data.user.username}</em>'s profile!</div> : <Redirect to="/" /> }
    </DataWaiter>
  )
);

/* EXPORT */

export {Profile};
