// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['line'],
  ["allure-playwright", {
    detail: true,
    suiteTitle: true,
    environmentInfo: {
      node_version: process.version,
    }
  }]],

  use: {
    baseURL: 'http://users.bugred.ru/',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});

