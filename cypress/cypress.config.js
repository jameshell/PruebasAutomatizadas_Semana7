const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const version = config.env.VERSION || 4;
      const params = {
        4:{
          'username': 'camis.069@gmail.com',
          'password': 'OSO*994290',
          'url': 'http://localhost:3001/',
        },
        5:{
          'username': 'camis.069@gmail.com',
          'password': 'OSO*994290',
          'url': 'http://localhost:3001/',
        },
      };
      config.API_KEY = ''
      config.url = params[version].url;
      config.username = params[version].username;
      config.password = params[version].password;

      return config;
    },
    excludeSpecPattern: '**/LoginSetup.cy.js'
  },
};