import { test, expect } from '@playwright/test';
test('Handle Auto suggested drop down options', async ({ page }) => {
    
    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('DELHI');

    const loc = '//li[contains(@class,"sc-iwsKbI")]/div/text[1]';
    await page.waitForSelector(loc);

    const fromCityOptions = await page.$$(loc);

    for (const option of fromCityOptions) {
        const value = await option.textContent();

        console.log(value);

        if(value.includes('Anand Vihar')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
});