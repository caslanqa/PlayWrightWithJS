
import {test,expect} from '@playwright/test';

test('Alert Handling', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Alert handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })

    await page.click('//button[text()="Alert"]');
    await page.waitForTimeout(5000);
})

test('Confirmation alert with cancel and ok', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Alert handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("Press a button!");
        //await dialog.accept(); // close with OK(Tamam) button
        await dialog.dismiss(); // close with Cancel(İptal) button
    })

    await page.click('//button[text()="Confirm Box"]');
    await page.waitForTimeout(2000);
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
})

test('Prompt Dialog', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const text = 'John';
    // Enabling Alert handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain('Harry Potter');
        
        await dialog.accept(text); // type to prompt John and click OK button
        //await dialog.dismiss(); // close with Cancel(İptal) button
    })

    await page.click('//button[text()="Prompt"]');
    await page.waitForTimeout(2000);
    await expect(page.locator('#demo')).toHaveText("Hello "+text+"! How are you today?");
})