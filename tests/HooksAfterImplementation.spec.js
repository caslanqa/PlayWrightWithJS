/*
beforeEach: This hook is executed before each individual test.
afterEach: This hook is executed after each individual test.
beforeAll: This hook is executed once before any of the tests start running.
afterAll: This hook is executed once after all the tests have been run.

cypress tan farklı olarak hook metodlarında isimlendirme yapılmıyor yapılırsa hata veriyor.
her seferinde page driverını yeniden oluşturduğundan method içine parametre olarak browser veriyoruz
en başta da let page objesi tanımlıyoruz ve before method da bunu initialize ediyoruz.
*/
import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{

    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/');

    //login

    await page.click('#login2');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('//button[text()="Log in"]');

})


test.afterEach(async ({browser})=>{
    // log out

    await page.click('#logout2');
    await page.close();

})

test('Home Page Test', async () => {

    
    // home page

    const products = await page.$$('.hrefch');

    expect(products.length).toBe(9);


});


test('Add to Cart Test', async () => {
    // add to cart

    await page.click('//a[text()="Samsung galaxy s6"]');
    await page.click('//a[text()="Add to cart"]');

    await page.on('dialog',async(dialog)=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
});