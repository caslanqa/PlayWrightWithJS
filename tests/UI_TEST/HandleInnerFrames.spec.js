import {test,expect} from '@playwright/test';

test('Handling Inner/Nested iframes', async ({page})=>{

    const urlText = 'https://ui.vision/demo/webtest/frames';
    await page.goto(urlText);

    const frameUrl = urlText+'/frame_3.html';

    const frame3 = await page.frame({url:frameUrl});

    await frame3.locator('[name="mytext3"]').fill('frame 3 located');

    // nested frames
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator('(//*[@class="AB7Lab Id5V1"])[1]').click();

    await page.waitForTimeout(2000);
})