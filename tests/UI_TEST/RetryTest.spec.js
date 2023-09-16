import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

/*
    playwright.config.js dosyasına 'retries: <tekrarSayısı>' attribute unu ekliyoruz.
    yada 'npx playwright test RetryTest.spec.js --project=chromium --headed --retries=1' komutunu çalıştırıyoruz.

    ***FLAKY TEST***
        ilk denemede bir sebepten dolayı fail olduktan sonra, retry test de pass olan testlerdir.
 */

test.only('Login Test With POM', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    const product = 'Nexus 6';

    await homePage.goToHomePage();
    await homePage.goToPage('Log in');

    await loginPage.login('pavanol','test@123');
    await page.waitForTimeout(1000);

    await homePage.goToProductPage(product);

    const expectedHeader = await productPage.getProductName();
    await expect(expectedHeader).toBe(product);

    await productPage.addToCart();

    await homePage.goToPage('Cart');

    expect(cartPage.validateCart(product)).toBeTruthy();
});