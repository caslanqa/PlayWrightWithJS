import { test, expect } from '@playwright/test';
test('Soft Assertions', async ({ page }) => {
    
    await page.goto('https://www.demoblaze.com/');

    // Hard assertions. Eğer assertion fail olursa kod devam etmez
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    // Soft assertions. Eğer assertion fail olursa kod devam eder. Ancak Fail olanları gösterir
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/gfgehe');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
  });