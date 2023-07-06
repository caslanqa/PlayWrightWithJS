import {test,expect} from '@playwright/test';

test('Locators', async ({page})=>{
    
    await page.goto('https://www.demoblaze.com/');

    /**
     * for element locating there is 3 way
     * 1-> property
     * 2-> css
     * 3-> xpath
     */

    // click on Log in button with property
    // locator metodu web elementi locate için kullanılır
    // click için 2 farklı kullanım vardır ve ikisi de kullanılabilir
    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // type the username with css locator
    // aşağıdaki 3 yöntem de yazmak için kullanılabilir
    //await page.locator('#loginusername').fill('pavanol');
    //await page.fill('#loginusername','pavanol');
    await page.fill('#loginusername','pavanol');

    // type the username with css locator

    await page.fill('//input[@id="loginpassword"]','test@123');

    await page.click("//button[text()='Log in']");

    //verify login
    const userName = await page.locator('#nameofuser');

    await expect(userName).toBeVisible();
    await expect(userName).toContainText('pavanol');
    await page.close();
})