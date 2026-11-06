# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Purchase.spec.js >>  Verifying a successfull purchase of a random product with user name as mia935 and password as 7qeQrh
- Location: tests\Purchase.spec.js:58:12

# Error details

```
TypeError: LoginOb.valid_username_valid_password is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [active] [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]
      - button "Next" [ref=e32] [cursor=pointer]
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=e45]:
      - listitem [ref=e46]:
        - button "Previous" [ref=e47]
      - listitem [ref=e48]:
        - button "Next" [ref=e49] [cursor=pointer]
  - generic [ref=e51]:
    - generic [ref=e54]:
      - heading "About Us" [level=4] [ref=e55]
      - paragraph [ref=e56]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e59]:
      - heading "Get in Touch" [level=4] [ref=e60]
      - paragraph [ref=e61]: "Address: 2390 El Camino Real"
      - paragraph [ref=e62]: "Phone: +440 123456"
      - paragraph [ref=e63]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e67]
  - contentinfo [ref=e69]:
    - paragraph [ref=e70]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import Login from '../Pages/Login'
  3  | import LoginCredentials from '../Test-Data/LoginCredentials.json' with {type: 'json'}
  4  | import Purchase from '../Pages/Purchase'
  5  | import {EXPECTED_URL} from '../Utils/Constants.js'
  6  | 
  7  | test.beforeEach(async({page})=>{ 
  8  |     await page.goto('/') }
  9  | )
  10 | for (const data of LoginCredentials) {
  11 | 
  12 |     // test(` Verifying a successfull purchase of mobile phone with user name as ${data.usernameVal} and password as ${data.passwordVal}`, async ({ page }) => {
  13 | 
  14 |     //     await page.goto('https://demoblaze.com/')
  15 |     //     page.content('STORE')
  16 |     //     const LoginOb = new Login(page)
  17 |     //     LoginOb.LoginLink()
  18 |     //     await LoginOb.valid_username_valid_password(data.usernameVal, data.passwordVal)
  19 |     //     const PurchaseOb = new Purchase(page)
  20 |     //     await PurchaseOb.MobPurchaseflow()
  21 | 
  22 |     //     page.on('Product added.', dialog => dialog.accept())
  23 | 
  24 |     // })
  25 | 
  26 | 
  27 |     test(` complete the purchase of  mobile of user ${data.usernameVal} and ${data.passwordVal}`, async ({ page }) => {
  28 |       //  await page.goto('https://demoblaze.com/')
  29 |         await expect(page.locator('body')).toContainText('STORE')
  30 | 
  31 |         const LoginOb = new Login(page)
  32 |         await LoginOb.LoginLink()
  33 |         await LoginOb.valid_username_valid_password(data.usernameVal, data.passwordVal)
  34 |        page.on('dialog', dialog => dialog.accept());
  35 | 
  36 |         const PurchaseOb = new Purchase(page)
  37 |         await PurchaseOb.MobPurchaseflow()
  38 |         page.on('Product added.', dialog => dialog.accept())
  39 |         await PurchaseOb.CompletePurchaseofMobile()
  40 |         await PurchaseOb. FillThedata(PurchaseOb.FullnameVal,PurchaseOb.countryVal,PurchaseOb.cityVal,PurchaseOb.cardVal,PurchaseOb.monthVal,PurchaseOb.yearval)
  41 |         await PurchaseOb.ConfirmOder()
  42 | 
  43 |     })
  44 |     test(` Verifying a successfull purchase of monitor with user name as ${data.usernameVal} and password as ${data.passwordVal}`, async ({ page }) => {
  45 | 
  46 |        // await page.goto('https://demoblaze.com/')
  47 |         page.content('STORE')
  48 |         const LoginOb = new Login(page)
  49 |         LoginOb.LoginLink()
  50 |         await LoginOb.valid_username_valid_password(data.usernameVal, data.passwordVal)
  51 | 
  52 |         const PurchaseOb = new Purchase(page)
  53 |         await PurchaseOb.MonitorPurchaseflow()
  54 |         page.on('Product added.', dialog => dialog.accept())
  55 |     })
  56 | 
  57 | 
  58 |       test.only(` Verifying a successfull purchase of a random product with user name as ${data.usernameVal} and password as ${data.passwordVal}`, async ({ page }) => {
  59 | 
  60 |       //  await page.goto('https://demoblaze.com/')
  61 |         page.content('STORE')
  62 |         const LoginOb = new Login(page)
  63 |         LoginOb.LoginLink()
> 64 |         await LoginOb.valid_username_valid_password(data.usernameVal, data.passwordVal)
     |                       ^ TypeError: LoginOb.valid_username_valid_password is not a function
  65 |         const PurchaseOb = new Purchase(page)
  66 |         await PurchaseOb.RandomPurchaseflow()
  67 |         page.on('Product added.', dialog => dialog.accept())
  68 |     })
  69 | 
  70 | 
  71 | }
  72 | 
```