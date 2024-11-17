const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.VERSION || 4;
      const params = {
        4:{
          'username': 'jaimea111@gmail.com',
          'password': 'Warframe1993.',
          'url': 'http://localhost:3003/',
        },
        5:{
          'username': 'test@test.com', 
          'password': 'Semeolvido123',
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