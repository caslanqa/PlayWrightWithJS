import { test, expect } from '@playwright/test';

test('ThirdPartyReporters-Allure Reporter In Playwright', async ({ page }) => {
    /*
        * Installation : paste command 'npm i -D @playwright/test allure-playwright' to terminal and press enter. You should see '"allure-playwright": "^2.8.1"' inside the 'package.json' file
            * Then install allure command line : 'npm install -g allure-commandline --save-dev'

        * Usage : you should add inside the playwright.config.js file following;
                    ['allure-playwright', { outputFile: 'my-allure-results' }]
                    or use the cli command 'npx playwright test --reporter=allure-playwright'
    */
    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle("Google");
    
});