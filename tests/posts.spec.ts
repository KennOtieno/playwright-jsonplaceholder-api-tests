import { test, expect } from '@playwright/test';

test('Status code is 200', async ({ request }) => {
  // My thinking is to: 
  // 1.) Send a GET Request to the API /posts endpoint
  // 2.) If it comes up with a json that shows userId, title, body, etc, I'll have to print status code 200
  const response = await request.get('https://jsonplaceholder.typicode.com/posts')
  const responseObject = await response.json()
  console.log(responseObject)
});

