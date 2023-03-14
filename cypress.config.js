const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '54168x',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
