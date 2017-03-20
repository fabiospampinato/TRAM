
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

/* PROFILE */

const Profile = ({ match }) => {
  return <ProfileActual username={match.params.username} />;
};

const ProfileActual = graphqls ( getByUsername )( ({ data }) => {
  const { loading, error, user } = data;
  if ( loading ) return null;
  if ( error ) return <div>Error!</div>;
  if ( !user ) return <Redirect to="/" />;
  return <div>This is <em>{user.username}</em>'s profile!</div>;
});

/* EXPORT */

export {Profile};
