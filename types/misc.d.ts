
// Redux DevTools Chrome extension
interface Window {
  devToolsExtension?: () => any;
}

// Hot Module Replacement
interface NodeModule {
  hot: {
    accept ( module: string, callback: Function )
  }
}
