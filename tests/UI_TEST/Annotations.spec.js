import { test, expect } from '@playwright/test';
/**
 * test.only() -> runner will run only this test function
 * test.skip() -> runner will skip this function at the runtime. There is 2 usage
 *      1-> using on function signature 'test.skip(....)'
 *      2-> using with condition inside the function
 *          test(.....,async({page,browserName})=>{
 *              if(browserName==='firefox')
 *                  test.skip()
 *          })
 * test.fixMe() -> if there is known bugs on test or there is not developed test we use fixme(). Similar   with skip(). You use it on signature or inside the block
 * test.fail() -> we are giving the test function test result expectatiion as fail. If assertion returns pass it throws error
 * 
 * test.slow() -> will increase/multiply timeout value with '3x' at the runtime.
 * 
 */

test.only('Tag Usage Test 1', async ({ page }) => { 
  console.log('This is test 1........');
});

test.skip('Tag Usage Test 2', async ({ page }) => {
    console.log('This is test 2........');
  });

test('Tag Usage Test 3', async ({ page , browserName}) => {
    if (browserName==='firefox') {
        test.skip();
}
    console.log('This is test 3........');
});
  
test('Tag Usage Test 4', async ({ page }) => {
        test.fixme();
      console.log('This is test 4........');
});
  
test.fixme('Tag Usage Test 5', async ({ page }) => {
      console.log('This is test 5........');
});
  
test.fail('Tag Usage Test 6', async ({ page }) => {
    console.log('This is test 6........');
    expect(1).toEqual(1);
});
  
test('Tag Usage Test 6', async ({ page }) => {
    test.fail();
    console.log('This is test 6........');
    expect(1).toEqual(1);
});
  
test.slow('Tag Usage Test 7', async ({ page }) => {
    console.log('This is test 7........');
});
  
test('Tag Usage Test 8', async ({ page }) => {
    test.slow();
    console.log('This is test 8........');
});

    