/*
beforeEach: This hook is executed before each individual test.
afterEach: This hook is executed after each individual test.
beforeAll: This hook is executed once before any of the tests start running.
afterAll: This hook is executed once after all the tests have been run.
*/
import { test, expect } from '@playwright/test';

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //login

    await page.click('#login2');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('//button[text()="Log in"]');

    // home page

    const products = await page.$$('.hrefch');

    expect(products.length).toBe(9);

    // log out

    await page.click('#logout2');
});


test('Add to Cart Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    //login

    await page.click('#login2');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('//button[text()="Log in"]');

    // add to cart

    await page.click('//a[text()="Samsung galaxy s6"]');
    await page.click('//a[text()="Add to cart"]');

    await page.on('dialog',async(dialog)=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    // log out

    await page.click('#logout2');
});