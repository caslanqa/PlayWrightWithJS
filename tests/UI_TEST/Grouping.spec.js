import { test, expect } from '@playwright/test';

/*
Eğer sadece bi bloğu çalıştırmak istersek methodlarda olduğu gibi sonuna 'only' ekliyoruz
test.describe.only() 
*/

test.beforeAll(async()=>{
    console.log('This is beforeAll hook.....');
})

test.afterAll(async()=>{
    console.log('This is afterAll hook.....');
})

test.beforeEach(async()=>{
    console.log('This is beforeEach hook.....');
})

test.afterEach(async()=>{
    console.log('This is afterEach hook.....');
})
test.describe('Group 1', ()=>{

    test('TC_1', async () => {
        console.log('Test Case 1');
    });
    
    test('TC_2', async () => {
        console.log('Test Case 2');
    });
})


test.describe('Group 2', ()=>{

    test('TC_3', async () => {
        console.log('Test Case 3');
    });

    test('TC_4', async () => {
        console.log('Test Case 4');
    });
})