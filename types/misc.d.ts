
/******************************
 * Put your custom types here *
 ******************************/

//TODO: Improve it

/* Redux DevTools Chrome extension */

interface Window {
  devToolsExtension?: () => any;
  __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  __REDUX_STATE__: any;
}

/* Hot Module Replacement */

interface NodeModule {
  hot: {
    accept ( module: string, callback: Function );
  }
}

/* Webpack middlewares */

declare module 'webpack-dev-middleware';
declare module 'webpack-hot-middleware';

/* ENVIRONMENT */

declare const ENVIRONMENT: string;
declare const DEVELOPMENT: boolean;
declare const PRODUCTION: boolean;
declare const CLIENT: boolean;
declare const SERVER: boolean;
