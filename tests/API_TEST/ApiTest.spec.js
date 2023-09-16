import {test,expect} from '@playwright/test';

//const requestUrl = 'https://reqres.in/api/users?page=2';
//const expectedCode = 200;
var userId;
test('Get Users', async ({request})=>{

    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toEqual(200);
})

test('Create User', async ({request})=>{
    
    const response = await request.post('https://reqres.in/api/users',
                        {
                            data:{"name":"cihan","job":"trainer"},
                            headers:{"Accept":"application/json"}
                        });

    console.log(await response.json());
    expect(response.status()).toBe(201);

    // we should get generated id from response
    var res = await response.json();
    userId = res.id
    console.log(userId);
})

test('Update User', async ({request})=>{
    const response = await request.put('https://reqres.in/api/users/'+userId,
                        {
                            data:{"name":"cihan","job":"engineer"},
                            headers:{"Accept":"application/json"}
                        });
    expect(response.status()).toBe(200);
})

test('Delete User', async ({request})=>{
    const response = await request.delete('https://reqres.in/api/users/'+userId,
                        {
                            data:{"name":"cihan","job":"engineer"},
                            headers:{"Accept":"application/json"}
                        });
    expect(response.status()).toBe(204);
})