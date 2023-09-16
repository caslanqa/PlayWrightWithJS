import { test, expect } from '@playwright/test';
test('Handle Inputbox', async ({ page }) => {
    
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    // inputbox -> firstname
    // locator -> '#name'

    const nameInput = page.locator('#name');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toBeEnabled();
    await expect(nameInput).toBeEmpty();
    await expect(nameInput).toBeEditable();

    
    //await page.locator('#name').fill('John');
    //await page.fill('#name','John');
    await page.locator('#name').type('John');
    await page.type('#name','John');
  });