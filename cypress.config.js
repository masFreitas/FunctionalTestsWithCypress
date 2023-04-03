const { defineConfig } = require("cypress");

module.exports = defineConfig({

  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://barrigarest.wcaquino.me',
    setupNodeEvents(on, config) {
    },
  },
});
