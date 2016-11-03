
/* ENVIRONMENT */

let environment = process.env.NODE_ENV || 'development';

/* EXPORT */

//TODO: Maybe explicitly write requires in a static manner, maybe it changes something

module.exports = require ( './' + environment );
