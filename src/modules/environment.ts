
/* IMPORT */

let {NODE_ENV} = process.env;

/* ENVIRONMENT */

let Environment = {
  get () {
    return NODE_ENV || 'development';
  },
  isProduction: NODE_ENV === 'production',
  isDevelopment: NODE_ENV !== 'production'
};

/* EXPORT */

export default Environment;
