import {test,expect} from '@playwright/test';

test('Locating Multiple Web Elements', async ({page})=>{
    
    await page.goto('https://www.demoblaze.com/');

    // çoklu element locate etmet için '$$' metodu kullanılır 
    /*const links = await page.$$('//a'); // 33 tane link locate eder.

    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }*/

    /**
     * locate products and select the purposes product
     */
    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a');
    const products = await page.$$('//div[@id="tbodyid"]//div//h4/a');

    for (const product of products) {
        const productText = await product.textContent();
        console.log(productText);
    }
})