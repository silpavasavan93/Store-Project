import Signup from '../Pages/Signup';
import { expect, test } from '@playwright/test'
import { EXPECTED_URL } from '../Utils/Constants.js'
// url stored in Constants.js file to avoid hardcoding and to make it reusable across the project
test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('Signup and close', async ({ page }) => {

    //  await page.goto('https://demoblaze.com/')
    const SignObj = new Signup(page)
    const url = await SignObj.getURL()
     expect(url).toBe(EXPECTED_URL)
    SignObj.SignupLinkClick()
    await SignObj.SignupData(SignObj.UsernameVal, SignObj.passwordVal)
    await SignObj.SignupcloseBtn()
})
test('Verify Signup functionality', async ({ page }) => {
    //   await page.goto('https://demoblaze.com/')
    const SignObj = new Signup(page)
    await SignObj.SignupLinkClick()
    await SignObj.SignupData(SignObj.UsernameVal, SignObj.passwordVal)
    await SignObj.OkbuttonClick()
    //page.on('Sign up successful.', dialog => dialog.accept());
    await expect(page).toHaveURL(EXPECTED_URL)
})