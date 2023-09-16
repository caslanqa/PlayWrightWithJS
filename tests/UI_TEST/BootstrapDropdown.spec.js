import { test, expect } from '@playwright/test';
test('Handle Bootstrap drop down options', async ({ page }) => {
    
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click(); // click on the dropdown

    // assert lenght solution 1
    const options = await page.locator('ul>li label input');
    await expect(options).toHaveCount(11);

    // assert lenght solution 2
    const options2 = await page.$$('ul>li label input');
    await expect(options2.length).toBe(11);

    // select options from dropdown
    for (const option of options2) {
        const value = await option.textContent();
        
        if(value.includes('Angular') || value.includes('Java')){
            await option.selectOption();
        }
    }

    // unselect/deselect options from dropdown
    for (const option of options2) {
        const value = await option.textContent();
        
        if(value.includes('HTML') || value.includes('CSS')){
            await option.uncheck();
        }
    }
});