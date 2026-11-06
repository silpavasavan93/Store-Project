import { test, expect } from '@playwright/test'
import Login from '../Pages/Login'
import LoginCredentials from '../Test-Data/LoginCredentials.json' with {type: 'json'}
import Purchase from '../Pages/Purchase'
import { EXPECTED_URL } from '../Utils/Constants.js'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
}
)
for (const data of LoginCredentials) {

    test(` complete the purchase of  mobile of user ${data.usernameVal} and ${data.passwordVal}`, async ({ page }) => {
        //  await page.goto('https://demoblaze.com/')
        await expect(page.locator('body')).toContainText('STORE')
        const LoginOb = new Login(page)
        await LoginOb.LoginLink()
        await LoginOb.loginFunctionality(data.usernameVal, data.passwordVal)
        await LoginOb.dialogAccept();
        const PurchaseOb = new Purchase(page)
        await PurchaseOb.MobPurchaseflow()
      //  page.on('Product added.', dialog => dialog.accept())
        await PurchaseOb.CompletePurchaseofMobile()
        await PurchaseOb.FillThedata(PurchaseOb.FullnameVal, PurchaseOb.countryVal, PurchaseOb.cityVal, PurchaseOb.cardVal, PurchaseOb.monthVal, PurchaseOb.yearval)
        await PurchaseOb.ConfirmOder()

    })
    test(` Verifying a successfull purchase of monitor with user name as ${data.usernameVal} and password as ${data.passwordVal}`, async ({ page }) => {

        // await page.goto('https://demoblaze.com/')
        page.content('STORE')
        const LoginOb = new Login(page)
         await LoginOb.LoginLink()
        await LoginOb.loginFunctionality(data.usernameVal, data.passwordVal)
        const PurchaseOb = new Purchase(page)
        await PurchaseOb.MonitorPurchaseflow()
        //await LoginOb.dialogAccept();
    })

    test(` Verifying a successfull purchase of a random product with user name as ${data.usernameVal} and password as ${data.passwordVal}`, async ({ page }) => {
        //  await page.goto('https://demoblaze.com/')
        page.content('STORE')
        const LoginOb = new Login(page)
       await  LoginOb.LoginLink()
        await LoginOb.loginFunctionality(data.usernameVal, data.passwordVal)
        const PurchaseOb = new Purchase(page)
        await PurchaseOb.RandomPurchaseflow()
       // await LoginOb.dialogAccept()
    })


}
