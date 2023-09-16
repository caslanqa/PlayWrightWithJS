import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

test('Login Test Without POM', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    await page.getByRole('link',{name:'Log in'}).click();
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('button[onclick="logIn()"]');
});


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
    await page.waitForTimeout(1000);

    const expectedHeader = await productPage.getProductName();
    await expect(expectedHeader).toBe(product);

    await productPage.addToCart();

    await homePage.goToPage('Cart');

    expect(cartPage.validateCart(product)).toBeTruthy();
    

});