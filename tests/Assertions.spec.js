/*
Assertions
-----------
Playwright includes test assertions in the form of expect function.
Reference: https://playwright.dev/docs/test-asse...

1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/
import { test, expect } from '@playwright/test';
test('Assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    // 1) expect(page).toHaveURL()   Page has URL 
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    
    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3) expect(locator).toBeVisible()  Element is visible
    const logo = page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();

    // 4) expect(locator).toBeEnabled()  Control is enabled
    const nameInput = page.locator('#FirstName');
    await expect(nameInput).toBeEnabled();

    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    //  radiobutton
    const maleGender = page.locator('#gender-male');
    await maleGender.check();
    await expect(maleGender).toBeChecked();

    // checkboxes
    const newsletterBox = page.locator('#Newsletter');
    await expect(newsletterBox).toBeChecked();

    // 6) expect(locator).toHaveAttribute() Element has attribute
    await expect(maleGender).toHaveAttribute('value','M');

    // 7) expect(locator).toHaveText()  Element matches text
    const maleGenderGroup = page.locator('.male');
    await expect(maleGenderGroup).toHaveText('Male');


    // 8) expect(locator).toContainText()  Element contains text
    const companyDetailGroup = page.locator("//div[@class='fieldset'][2]");
    await expect(companyDetailGroup).toContainText('any Det');
    
    
    // 9) expect(locator).toHaveValue(value) Input has a value
    await expect(maleGender).toHaveValue('M');
    
    
    // 10) expect(locator).toHaveCount()  List of elements has given length
    const inputs = page.locator("//input[@type='text']");

    await expect(inputs).toHaveCount(4);

    // Nagative asserts will take '.not' prefix 'expect(locator).not.toContainText()'

  });