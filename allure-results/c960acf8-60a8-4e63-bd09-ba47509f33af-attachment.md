# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Verify the Invalid login test cases with user empty name as mia935 and  empty password as7qeQrh
- Location: tests\Login.spec.js:13:2

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import Login from '../Pages/Login'
  3  | import LoginCredentials from '../Test-Data/LoginCredentials.json' with {type: 'json'}
  4  | import { EXPECTED_URL } from '../Utils/Constants.js'
  5  | 
  6  | 
  7  | test.beforeEach(async ({ page }) => {
> 8  | 	await page.goto('/')
     |             ^ Error: page.goto: Target page, context or browser has been closed
  9  | }
  10 | )
  11 | for (const data of LoginCredentials) {
  12 | 
  13 | 	test(`Verify the Invalid login test cases with user empty name as ${data.usernameVal} and  empty password as${data.passwordVal}`, async ({ page }) => {
  14 | 
  15 | 		//await page.goto('https://demoblaze.com/')
  16 | 		const loginObj = new Login(page)
  17 | 		await loginObj.LoginLink()
  18 | 		const url = await loginObj.getURL()
  19 | 		await expect(url).toBe(EXPECTED_URL)
  20 | 		await loginObj.loginFunctionality(" ", " ")
  21 | 		//await loginObj.empty_username_Password(data.usernameVal, data.passwordVal)
  22 | 		//page.on('Please fill out Username and Password.', dialog => dialog.accept());
  23 | 				await loginObj.dialogAccept();
  24 | 	})
  25 | 
  26 | 	test(`Verify the  login with invalid username  as ${data.usernameVal} and valid password as${data.passwordVal} `, async ({ page }) => {
  27 | 		//	await page.goto('https://demoblaze.com/')
  28 | 		const loginObj = new Login(page)
  29 | 		await loginObj.LoginLink()
  30 | 		await loginObj.loginFunctionality("81269470", data.passwordVal)
  31 | 
  32 | 		//await loginObj.invalid_username_valid_password(data.usernameVal, data.passwordVal)
  33 | 		//page.on('User does not exist.', dialog => dialog.accept());
  34 | 				await loginObj.dialogAccept();
  35 | 
  36 | 	});
  37 | 	test(` Verify the  login with valid username  as ${data.usernameVal} and invalid password as${data.passwordVal}`, async ({ page }) => {
  38 | 		//await page.goto('https://demoblaze.com/')
  39 | 		const loginObj = new Login(page)
  40 | 		await loginObj.LoginLink()
  41 | 		loginObj.loginFunctionality(data.usernameVal, "abcd")
  42 | 
  43 | 		//await loginObj.valid_username_invalid_password(data.usernameVal, data.passwordVal)
  44 | 		//page.on('User does not exist.', dialog => dialog.accept());
  45 | 				await loginObj.dialogAccept();
  46 | 	});
  47 | 
  48 | 	test(`Verify the  login with invalid username  as ${data.usernameVal} and invalid password as${data.passwordVal}`, async ({ page }) => {
  49 | 		//await page.goto('https://demoblaze.com/')
  50 | 		const loginObj = new Login(page)
  51 | 		await loginObj.loginFunctionality("ytii", "uiyu")
  52 | 
  53 | 		//await loginObj.LoginLink(data.usernameVal, data.passwordVal)
  54 | 		//await loginObj.invalid_username_invalid_password()
  55 | 		//page.on('Wrong password.', dialog => dialog.accept)
  56 | 		await loginObj.dialogAccept();
  57 | 	})
  58 | 
  59 | 	test(`Verify Valid user name  as ${data.usernameVal} and valid password as ${data.passwordVal}`, async ({ page }) => {
  60 | 		//	await page.goto('https://demoblaze.com/')
  61 | 		const loginObj = new Login(page)
  62 | 		await loginObj.LoginLink()
  63 | 		// page.on('Wrong password.',dialog => dialog.accept)
  64 | 		await loginObj.loginFunctionality(data.usernameVal, data.passwordVal)
  65 | 				await expect(page).toHaveURL(EXPECTED_URL)
  66 | 
  67 | 
  68 | 		//await loginObj.valid_username_valid_password(data.usernameVal, data.passwordVal)
  69 | 		await expect(page.locator('#nameofuser')).toContainText(`Welcome ${data.usernameVal}`);
  70 | 		console.log(`Welcome ${data.usernameVal}`)
  71 | 		loginObj.logout()
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 	})
  77 | 
  78 | 
  79 | }
  80 | 
  81 | 
```