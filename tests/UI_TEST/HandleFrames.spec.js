
import {test,expect} from '@playwright/test';

test('Handling Iframes', async ({page})=>{

    const urlText = 'https://ui.vision/demo/webtest/frames';
    await page.goto(urlText);

    // total frames
    const allFrames = await page.frames();

    console.log('Quantity of frames: ',allFrames.length);

    // approach 1 -> name or URL of frame
    const frameUrl = urlText+'/frame_1.html';
    const frame1 = await page.frame({url:frameUrl})
    await frame1.fill("[name='mytext1']",'Hello world');

    await page.waitForTimeout(2000);

    // approach 2 -> using frameLocater method
    
    await page.frameLocator('frame[src="frame_2.html"]')
                .locator("[name='mytext2']")
                .fill('Frame 2 Located');

    await page.waitForTimeout(2000);
})