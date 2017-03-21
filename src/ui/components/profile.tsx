
/* ================================================================================
 * TRAM - UI - Components - Profile
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as React from 'react';
import {Link} from 'react-router-dom';

/* PROFILE */

const Profile = ({ user }) => (
  <div>
    <p>This is <em>{user.username}</em>'s profile!</p>
    <button>
      <Link to="/settings">SETTINGS</Link>
    </button>
  </div>
);

/* EXPORT */

export {Profile};
