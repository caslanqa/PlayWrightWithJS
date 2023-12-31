import { test, expect } from '@playwright/test';

test('CodeGen Test Generator', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('pavanol');
  
  await page.locator('#loginpassword').fill('test@123');

  await page.getByRole('button', { name: 'Log in' }).click();

  const userName = await page.locator('#nameofuser');

    await expect(userName).toBeVisible();
    await expect(userName).toContainText('pavanol');
    await page.close();
});