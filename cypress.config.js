const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '14gif9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: "reporters/custom.js",

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
