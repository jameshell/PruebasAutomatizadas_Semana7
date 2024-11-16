const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.VERSION || 4;
      const params = {
        4:{
          'username': 'camis.069@gmail.com', 
          'password': 'OSO12345678',
          'url': 'http://localhost:3002/', 
        },
        5:{
          'username': 'camis.069@gmail.com', 
          'password': 'OSO*994290',
          'url': 'http://localhost:3001/', 
        },
      };

      config.url = params[version].url;
      config.username = params[version].username;
      config.password = params[version].password;
     
      return config;
    },
  },
};