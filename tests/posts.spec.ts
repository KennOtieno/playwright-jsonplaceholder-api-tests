import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test('Status code is 200', async ({ request }) => {
  // GET a request from posts endpoint and check if it's status code is 200
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  await expect (response.status()).toBe(200);
});

// The next test entails figuring out if the response is an array and if the array length is 100

test('Response is an array with a length of 100', async ({ request}) => {


  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  const responseBody = await response.json();
  expect (Array.isArray(responseBody)).toBe(true);
  expect (responseBody).toHaveLength(100);


});
