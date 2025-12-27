import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',  // Location of your tests
  // trace: 'off',
  //reporter: [['list'], ['html', { open: 'never' }]],

  timeout: 30_000,  // Test timeout (30 seconds)

  use: {
    //baseURL: 'http://localhost:3000',  // Default base URL for your tests
    viewport: { width: 1280, height: 720 },  // Default viewport size
    headless: true,
  },

  projects: [
    {
      name: 'chromium',  // Only Chromium browser
      use: { browserName: 'chromium' },
    },
  ],
});

