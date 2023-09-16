import { test, expect } from '@playwright/test';
test('Handle DropDowns and Options', async ({ page }) => {
    
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');
    
    // Multiple waysto select option of dropdown
    // initially locate dropdown
    // then use select method
    // and there is 3 option to select th e target
    // value-label(visibleText)-index
    await page.locator('.custom-select').selectOption({value: '8'});
    await page.locator('.custom-select').selectOption({label: 'Turkey'});
    await page.locator('.custom-select').selectOption({index: 5});

    // we can Use selectOption method directly

    await page.selectOption('.custom-select',{value: '8'});
    await page.selectOption('.custom-select',{label: 'Turkey'});
    await page.selectOption('.custom-select',{index: 5});


    //ASSERTIONS

    // 1) check number of options -> Approach 1
    const options = await page.locator('.custom-select>option');
    await expect(options).toHaveCount(11);

    // 2) check number of options -> Approach 2
    const options2 = await page.$$('.custom-select>option');
    await expect(options2.length).toBe(11);

    // 3) check presence of value in dropdown Approach 1
    const content = await page.locator('.custom-select').textContent();
    await expect(content).toContain('Turkey')

    // 4) check presence of value in dropdown Approach 2
    const status = await page.locator('.custom-select')
                                .filter({hasText:'Turkey'})
                                .isEnabled();
    await expect(status).toBeTruthy();
});