JSON Placeholder API Testing
Overview

This project demonstrates API test planning and automation for validating the behavior and data contracts of core REST endpoints using the JSONPlaceholder API. The focus is on ensuring critical endpoints return correct responses, structures, and data types.

API Under Test

JSONPlaceholder – a public REST API used for testing and prototyping.

Base URL:

https://jsonplaceholder.typicode.com

Scope of Testing

The project focuses on validating core endpoints:

GET /posts

GET /users

Validations performed:

Correct HTTP status codes

Response body type (array)

Expected data volume

Required fields in each response object

Out of scope:

Authentication & authorization

Database validation

Performance/load testing

Security testing

Test Design & Planning

Test cases were designed and managed in Qase

A risk-based approach was used to prioritize core endpoints

Test cases define expected API behavior and data contracts

Automated tests map directly to the documented test cases

Automation Approach

Tool: Playwright (APIRequestContext)

Assertions validate:

HTTP status codes

Response body structure

Array length

Required fields per object

One API call per test with multiple assertions

Reporting

Test execution results are provided via Playwright’s test runner output

Clear pass/fail feedback indicates whether core API behavior meets expectations

A test execution summary can be inferred from automated test results

How to Run the Tests

Install dependencies:

npm install


Run tests:

npx playwright test

