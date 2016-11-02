
/* ENVIRONMENT */

let environment = process.env.NODE_ENV || 'development';

/* EXPORT */

module.exports = require ( './' + environment );
