import { test, expect } from '@playwright/test';

/**
 * Manual olarak trace kaydı yapamıyoruz
 * Ancak screenshot ta olduğu gibi playwright.config.js de yapacağımız ayarlamayla otomatik kayıt yapabiliriz.
 * playwright.config.js dosyasında; use{} nesnesi içine trace attribute u ekleyerek bunu gerçekleştiriyoruz.
 * karşılık olarak seçilebilecek 5 seçenek var
        'off' - Do not record a trace.
        'on' - Record a trace for each test. (not recommended as it's performance heavy)
        'on-all-retries' - Record traces for all test retries.
        'on-first-retry' - Record a trace only when retrying a test for the first time.
        'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.
 * Trace kayıtları test-results klasörüne kaydedilir
 * Kayıtları görmek için 'npx playwright show-trace <path>/trace.zip' komutu cli da çalıştırılır.
 */

test('Trace Viewer Test', async ({ page }) => {
    await page.goto('http://www.demoblaze.com');

    await page.getByRole('link',{name:'Log in'}).click();
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('button[onclick="logIn()"]');
    await expect(page.url).toEqual('fgdgsfgd');

});