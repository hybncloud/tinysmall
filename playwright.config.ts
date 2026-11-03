import { devices, defineConfig } from '@playwright/test'

const origin = 'http://localhost:3101/tiny-vue'

const baseURL = `${origin}/zh-CN/os-theme/components/`

export default defineConfig({
  testDir: './site/demos/pc',
  timeout: 30 * 1000,
  expect: {
    timeout: 8 * 1000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02
    }
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: baseURL,
    storageState: {
      cookies: [],
      origins: [
        {
          origin,
          localStorage: [
            { name: 'tiny-vue-api-mode', value: 'Composition' },
            { name: 'tiny-vue-demo-mode', value: 'single' },
            { name: 'tiny-e2e-test', value: 'true' }
          ]
        }
      ]
    },
    trace: 'on-first-retry',

    headless: !!process.env.CI,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    permissions: ['clipboard-read'],

    timezoneId: 'Asia/Shanghai'
  },
  webServer: !process.env.CI
    ? undefined
    : {
        command: 'pnpm site:dev',
        url: baseURL,
        reuseExistingServer: !!process.env.CI,
        stdout: 'pipe'
      },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1080, height: 720 }
      }
    }
  ]
})
