
let settings = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8889,
  karmaPort: 9876,

  isTest1 () {
    return true;
  },
  isTest2 () {
    return false;
  },

  // This part goes to React-Helmet for Head of our HTML
  app: {
    head: {
      title: 'barbar-vortigern',
      titleTemplate: 'barbar-vortigern: %s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'React Redux Typescript' },
      ]
    }
  }
};

export default settings;
