
import {test,expect} from '@playwright/test';

test('Locating Hidden Drop Down Options', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('[name="username"]','Admin');
    await page.fill('[name="password"]','admin123');
    await page.click('[type="submit"]');

    await page.click('//span[text()="PIM"]/ancestor::li');

    const ddButtonLoc = "//label[text()='Job Title']/ancestor::div[contains(@class,'oxd-input-group')]/descendant::i";

    await page.click(ddButtonLoc);

    await page.waitForSelector('//div[@role="listbox"]');
    await page.waitForTimeout(5000)
    /* hidden option dan kasıt locate edilemeyen optionlardır. 
    Bunları locate edebilmek için SelectorsHub isimli extention kullanılır. 
    Önce devtools ta selectorshub açılır. 
    Sonra debug mod aktif edilir. 
    Drop down açıldıktan 5 sn sonra browser freeze olur. 
    Bu sayede locate yapılabilir.
    */

    const hiddenOptions = await page.$$('[role="option"]>span')

    for (let option of hiddenOptions) {
        const value = await option.textContent();

        console.log(value);

        if(value.includes('Account Assistant')){
            option.click();
            break;
        }

    }

    await page.waitForTimeout(5000)
})