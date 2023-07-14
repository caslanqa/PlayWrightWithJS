import { test, expect } from '@playwright/test';

// You should use tag with '@' and before/after method name
// You should use cli commandas following:
    // npx playwright test <fileName> --project --grep <tag>
// If you run test cases except one tag you should following:
    // npx playwright test <fileName> --project --grep-invert <tag>
test('Tag Usage Test 1@smoke', async ({ page }) => { 
  console.log('This is test 1........');
});

test('Tag Usage Test 2@sanity', async ({ page }) => {
    console.log('This is test 2........');
  });

  test('Tag Usage Test 3@reg', async ({ page }) => {
    console.log('This is test 3........');
  });
  
  test('Tag Usage Test 4@smoke@reg', async ({ page }) => {
      console.log('This is test 4........');
    });