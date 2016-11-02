
/* IMPORT */

let {NODE_ENV, CLIENT} = process.env;

/* ENVIRONMENT */

let Environment = {
  get () {
    return NODE_ENV || 'development';
  },
  isProduction: NODE_ENV === 'production',
  isDevelopment: NODE_ENV !== 'production',
  isClient: !!CLIENT,
  isServer: !CLIENT
};

/* EXPORT */

export default Environment;
