import { test, expect } from '@playwright/test'
import Login from '../Pages/Login'
import LoginCredentials from '../Test-Data/LoginCredentials.json' with {type: 'json'}
import { EXPECTED_URL } from '../Utils/Constants.js'


test.beforeEach(async ({ page }) => {
	await page.goto('/')
}
)
for (const data of LoginCredentials) {

	test(`Verify the Invalid login test cases with user empty name as ${data.usernameVal} and  empty password as${data.passwordVal}`, async ({ page }) => {

		//await page.goto('https://demoblaze.com/')
		const loginObj = new Login(page)
		await loginObj.LoginLink()
		const url = await loginObj.getURL()
		await expect(url).toBe(EXPECTED_URL)
		await loginObj.loginFunctionality(" ", " ")
		//await loginObj.empty_username_Password(data.usernameVal, data.passwordVal)
		//page.on('Please fill out Username and Password.', dialog => dialog.accept());
		await loginObj.dialogAccept();
	})

	test(`Verify the  login with invalid username  as ${data.usernameVal} and valid password as${data.passwordVal} `, async ({ page }) => {
		//	await page.goto('https://demoblaze.com/')
		const loginObj = new Login(page)
		await loginObj.LoginLink()
		await loginObj.loginFunctionality("81269470", data.passwordVal)
		await loginObj.dialogAccept();

	});
	test(` Verify the  login with valid username  as ${data.usernameVal} and invalid password as${data.passwordVal}`, async ({ page }) => {
		//await page.goto('https://demoblaze.com/')
		const loginObj = new Login(page)
		await loginObj.LoginLink()
		await loginObj.loginFunctionality(data.usernameVal, "abcd")
		await loginObj.dialogAccept();
	});

	test(`Verify the  login with invalid username  as ${data.usernameVal} and invalid password as${data.passwordVal}`, async ({ page }) => {
		//await page.goto('https://demoblaze.com/')
		const loginObj = new Login(page)
		await loginObj.LoginLink()
		await loginObj.loginFunctionality("ytii", "uiyu")
		await loginObj.dialogAccept();
	})

	test(`Verify Valid user name  as ${data.usernameVal} and valid password as ${data.passwordVal}`, async ({ page }) => {
		//	await page.goto('https://demoblaze.com/')
		const loginObj = new Login(page)
		await loginObj.LoginLink()
		// page.on('Wrong password.',dialog => dialog.accept)
		await loginObj.loginFunctionality(data.usernameVal, data.passwordVal)
		await expect(page).toHaveURL(EXPECTED_URL)
		await expect(page.locator('#nameofuser')).toContainText(`Welcome ${data.usernameVal}`);
		await loginObj.logout()
	})


}

