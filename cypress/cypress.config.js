const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const version = 5;
      const params = {
        5:{
          'username': 'generic_admin@gmail.com',
          'password': 'GenericAdmin123.',
          'url': 'http://localhost:3001/',
        }
      };
      config.API_KEY = '';
      config.url = params[version].url;
      config.username = params[version].username;
      config.password = params[version].password;

      return config;
    },
    excludeSpecPattern: '**/LoginSetup.cy.js'
  },
};
