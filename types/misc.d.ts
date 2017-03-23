
/******************************
 * Put your custom types here *
 ******************************/

/* REDUX */

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  __REDUX_STATE__: any;
}

/* HOT */

interface NodeModule {
  hot: {
    accept ( module: string, callback: Function );
  }
}

/* WEBPACK */

declare module 'webpack-dev-middleware';
declare module 'webpack-hot-middleware';

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: any;
  export default content;
}

/* ENVIRONMENT */

declare const ENVIRONMENT: string;
declare const DEVELOPMENT: boolean;
declare const PRODUCTION: boolean;
declare const CLIENT: boolean;
declare const SERVER: boolean;
