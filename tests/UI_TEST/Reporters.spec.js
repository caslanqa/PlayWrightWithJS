import { test, expect } from '@playwright/test';

test('Reporters', async ({ page }) => {
    
    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle("Google");

    /*
     * Built-in Reporters:
        * İlgili reporter'ı çağırmak için 'playwright.config.js' dosyasının içine aşağıdaki gibi attribute ekliyoruz.

        export default defineConfig({
            reporter: '<reporterTag>',
        });

        * Hazır reporterlar ve reporterTag'leri şu şekilde;
            * list ya da ['list', { printSteps: true }]
            * line
            * dot (her test için '.' gösterimi yapar. Başarısız ise 'F' yazar)
            * ['html', { outputFolder: 'my-report' }]
            * ['blob', { outputDir: 'my-report' }]
            * ['json', { outputFile: 'results.json' }]
            * ['junit', { outputFile: 'results.xml' }]
     
     * Custom Reports:
        Bu konu ve tüm detaylar için "https://playwright.dev/docs/test-reporters"
     */
});