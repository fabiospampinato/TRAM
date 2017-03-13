
/* ================================================================================
 * TRAM - API - Auth - Passport
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import * as passport from 'passport';
import {model as User} from 'api/user';

/* PASSPORT */

passport.use ( User.createStrategy () );

passport.serializeUser ( User.serializeUser () );
passport.deserializeUser ( User.deserializeUser () );

/* EXPORT */

export default passport;
