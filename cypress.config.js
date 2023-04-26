const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},

    baseUrl: 'https://www.amazon.com/',
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});
