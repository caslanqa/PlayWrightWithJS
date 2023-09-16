import { test, expect } from '@playwright/test';
test('Radio Buttons', async ({ page }) => {
    
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    // female radio button
    // locator -> '#female'

    const femaleGender = page.locator('#female');

    await expect(femaleGender).not.toBeChecked();
    await expect(femaleGender.isChecked()).toBeFalsy();

    femaleGender.check();
    // await page.check('#female');

    await expect(femaleGender).toBeChecked();
    await expect(femaleGender.isChecked()).toBeTruthy();

  });