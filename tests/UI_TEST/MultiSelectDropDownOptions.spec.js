import { test, expect } from '@playwright/test';
test('Handle Multiple DropDown Options', async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //await page.locator('#colors').selectOption(['Red','Blue','Yellow']);
    await page.selectOption('#colors',['Red','Blue','Yellow']);
});