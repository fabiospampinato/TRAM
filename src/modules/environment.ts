
/* IMPORT */

let {NODE_ENV} = process.env;

/* INVIRONMENT */

let Environment = {
  get () {
    return NODE_ENV || 'development';
  },
  isProduction: NODE_ENV === 'production',
  isDevelopment: NODE_ENV !== 'production'
};

/* EXPORT */

export default Environment;
