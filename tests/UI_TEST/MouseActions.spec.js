import {test,expect} from '@playwright/test';

test('Mouse Hover', async ({page})=>{

    await page.goto('https://demo.opencart.com/');

    const desktopCategory = await page.locator('//a[text()="Desktops"]');
    const macbook = await page.locator("//a[normalize-space()='Mac (1)']");

    // mouse hover
    await desktopCategory.hover();
    await macbook.hover();

    await page.waitForTimeout(2000);
})


test('Mouse Right Click/Context Click', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const targetBtn = await page.locator("//span[text()='right click me']");

    // right click to button
    await targetBtn.click({button:'right'});
    
    await page.waitForTimeout(2000);
})


test('Mouse Double Click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const copyBtn = await page.locator('//button[text()="Copy Text"]');
    const field1 = await page.locator('#field1');
    const field2 = await page.locator('#field2');
    // double click to element
    await copyBtn.dblclick();

    const expectedValue = await field1.inputValue();
    await expect(field2).toHaveValue(expectedValue);

    await page.waitForTimeout(3000);
})


test.only('Mouse Drag&Drop', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const draggable = await page.locator('div#draggable');
    const targetElement = await page.locator('div#droppable');

    // Approach 1
    await draggable.hover();
    await page.mouse.down();

    await targetElement.hover();
    await page.mouse.up();

    const targetText = await page.locator('div#droppable>p');

    await expect(targetText).toHaveText('Dropped!');

    await page.reload();

    // Approach 2
    await draggable.dragTo(targetElement);
    await expect(targetText).toHaveText('Dropped!');
    
    await page.waitForTimeout(3000);
})