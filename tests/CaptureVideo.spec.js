import { test, expect } from '@playwright/test';
/**
 * Manual olarak video kaydı yapamıyoruz
 * Ancak screenshot ta olduğu gibi playwright.config.js de yapacağımız ayarlamayla otomatik kayıt yapabiliriz.
 * playwright.config.js dosyasında; use{} nesnesi içine video attribute u ekleyerek bunu gerçekleştiriyoruz.
 * karşılık olarak seçilebilecek 4 seçenek var
        * 'off' -> Do not record video
        * 'on' -> Record video for each test.
        * 'retain-on-failure' - Record video for each test, but remove all videos from successful test
        * 'on-first-retry' - Record video only when retrying a test for the first time
 * Videolar test-results klasörüne kaydedilir
 */
test('Page ScreenShot view port', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    await page.getByRole('link',{name:'Log in'}).click();
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('button[onclick="logIn()"]');
    await expect(page.url).toEqual('fgdgsfgd');
});
