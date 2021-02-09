/**
 * @jest-environment node
 */
const axios = require('axios')
const randomUserApi = require("../api/RandomUser.js")
const loginApi = require("../api/LoginApi");
const API = require('../api/BaseApi.js');

test('should get a random user', async () => {
  // Get the random user
  const randomUser = await randomUserApi.getRandomUser();

  // Expect the title to match any of the 6 titles below
  expect(randomUser.results[0].name.title).toMatch(/^Mr|Ms|Mrs|Miss|Monsieur|Mademoiselle$/);

  // Expect first and last name to match any character repeated atleast once
  expect(randomUser.results[0].name.first).toMatch(/^.+$/);
  expect(randomUser.results[0].name.last).toMatch(/^.+$/);
})

test('passwords should match', async () => {
  const userInfo = {
    firstName: "Tyler",
    middleName: "Jeremy",
    lastName: "Metzger",
    email: "email@domain.com",
    password: "pass123",
    reentered: "pass123"
  }

  // note: This register() function is actually being called, if you don't want to actually call your functions
  // as to not actually populate your database for example, look into jest mock functions.
  regRes = await loginApi.register(userInfo);

  // Instances in which you would want to mock the API calls is if you want to check some meta information like:
  // How many times was the function called?
  // What parameters was the function called with?
  // In the frontend, usually you call functions by clicking buttons, entering form fields, etc. and you want to check
  // if the values are coming in properly and from the right places.

  expect(regRes.data.firstName).toBe("Tyler");
  expect(regRes.data.middleName).toBe("Jeremy");
  expect(regRes.data.lastName).toBe("Metzger");
  expect(regRes.data.email).toBe("email@domain.com");
  expect(regRes.data.password).toBe("pass123");
  expect(regRes.data.reentered).toBe("pass123");
})

test('passwords should match', async () => {
  const userInfo = {
    firstName: "Tyler",
    middleName: "Jeremy",
    lastName: "Metzger",
    email: "email@domain.com",
    password: "pass123",
    reentered: "pass124"
  }
  expect(() => {loginApi.register(userInfo)}).toThrow();
})

test('Correct URL', async () => {
  await axios.get("http://localhost:3000/")
  .then(res => {
    expect(res.data).toBeDefined();
    expect(res.status).toBeGreaterThanOrEqual(200);
    expect(res.status).toBeLessThan(300);
  })
  .catch(e => {
    fail("Expected GET request to succeed")
  })
})

test('Incorrect URL', async () => {
  await API.default.get("/wrongPathName")
  .then(res => {
    fail("Expected GET request to fail")
  })
  .catch(e => {
    if(e.response) {
      expect(e.response.status).toBeGreaterThanOrEqual(400);
      expect(e.response.status).toBeLessThan(500);
    }
    else{
      throw e;
    }
  })
})