
/* ================================================================================
 * TRAM - Modules - Send message
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* SEND MESSAGE */

function sendMessage ( code = 500, message = 'Error!' ) { //TODO: Publish it
  return ( req, res ) => res.status ( code ).send ( message );
}

/* EXPORT */

export default sendMessage;
