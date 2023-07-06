/* test yazabilmek için gereken iki etmen var
    test -> test bloğu oluşturmak için gerekli
    expect -> validation yapabilmek için gerekli
    bu dosyaları node_modules içinde ki @playwright/test modulünden import ediyoruz
    2 yöntem var
     1 -> require
     2 -> import
*/
//const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test';
test('Home Page',async ({page})=>{
    /* {page} arg kullanımı zorunludur
        bu sayede metodlara ulaşılır(bir nevi driver dır)
        page objesi ilgili web application için bir nevi nesne oluşturur
        bir diğer önemli nokta async await kullanımı. async sonraki adım için promise oluşturur. await ise  bir önceki adımda promise oluşmasını bekler
     */

    await page.goto('https://www.demoblaze.com/');

    await expect(page).toHaveTitle('STORE');

    await expect (page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

    /**
     * 'npx playwright test' komutu ile tests klasörü altındaki tüm testler headless olarak tüm browserlarda koşar
     * 'npx playwright show-report' ile test raporunu html olarak görebiliriz
     * 'npx playwright test HomePageTest.spec.js' sadece bu test koşacaktır
     * 'npx playwright test HomePageTest.spec.js --project=chromium' komutu testin sadece chromium tabanlı browserda koşmasını sağlayacaktır 
     * chromium -> chromium
     * webKit -> safari
     * firefox -> firefox
     * 'npx playwright test HomePageTest.spec.js --project=chromium --headed' komutu testin headed modda çalışmasını sağlar
     * 'npx playwright test HomePageTest.spec.js --project=chromium --headed --debug' komutu testi chromium browserda debug modda açar. Test browserına ilave olarak playwright inspector penceresi açılır adım adım testi ilerletmeye ve debug yapmaya olanak sağlar
     */
})