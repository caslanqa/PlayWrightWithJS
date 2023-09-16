import { test, expect, chromium } from '@playwright/test';

test('How to open new tab', async () => {
    
  // page objesini manual oluşturmak için aşağıdaki kodları yazmak gerekiyor.
    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = await context.pages();

    console.log("Number of all pages,",allPages.length);
   
    await page1.goto('https://www.google.com');

    await page2.goto('https://www.youtube.com'); //bu ikinci sayfayı tab olarak açıyor

  });


  test.only('Handling multiple tabs', async () => {
    //multiple tab handle etmek için test içinde page objesini manual oluşturuyoruz çünkü waitforevent metodu içinde kullandığımız page parametresi, page objesi ile çakışıyor
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    //const pagePromise = context.waitForEvent('page'); 

    await page1.click('//a[normalize-space()="OrangeHRM, Inc"]');

    const newPage = await context.waitForEvent('page'); //yeni açılan tabi handle eder

    await expect(newPage).toHaveTitle('OrangeHRM HR Software | OrangeHRM');
  
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
    });