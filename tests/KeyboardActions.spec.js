import {test,expect} from '@playwright/test';

test('Keyboard Actions', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    // send the text to first area
    await page.type('[name="text1"]','welcome to automation');

    // Ctrl+A. If we will use combination of keys we should use press
    await page.keyboard.press('Meta+A');

    // Ctrl+C
    await page.keyboard.press('Meta+C');

    // Tab. If we will use single key we should use down and up methods
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl+V
    await page.keyboard.press('Meta+V');

    const targetElement = await page.locator('[name="text2"]');
    await expect(targetElement).toHaveValue('welcome to automation');

    await page.waitForTimeout(2000);
})