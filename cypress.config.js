const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern=[
        "cypress/e2e/basic_tests/test_3.cy.js",
        "cypress/e2e/more_tests/test_5.cy.js",
        "cypress/e2e/basic_tests/test_2.cy.js",
        "cypress/e2e/more_tests/test_4.cy.js",
        "cypress/e2e/basic_tests/test_1.cy.js",
        "cypress/e2e/more_tests/test_6.cy.js",
      ]
      console.log("cypress spec pattern: ", config.specPattern)
      new_config=cloudPlugin(on, config);
      console.log("cypress spec pattern: ", new_config.specPattern)
      return new_config;
    },
  },
});
