import { test, expect } from '@playwright/test';
test('Handle Checkboxes', async ({ page }) => {
    
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    const mondayCb = page.locator('#monday');

    await expect(mondayCb).toBeEnabled();
    await expect(mondayCb).not.toBeChecked();

    mondayCb.check();
    await expect(mondayCb).toBeChecked();

    mondayCb.uncheck();
    await expect(mondayCb).not.toBeChecked();

    const cbLocator = '[type="checkbox"][class="form-check-input"]';
    await page.waitForSelector(cbLocator);
    
    for (const cb of await page.locator(cbLocator).all()) {
        await expect(cb).not.toBeChecked();
        cb.check();
        await expect(cb).toBeChecked();
        cb.uncheck();
        await expect(cb).not.toBeChecked();
    }
});