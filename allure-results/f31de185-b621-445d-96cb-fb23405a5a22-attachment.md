# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Signup.spec.js >> Signup and close
- Location: tests\Signup.spec.js:9:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=STORE')
Expected: visible
Error: strict mode violation: locator('text=STORE') resolved to 3 elements:
    1) <a id="nava" href="index.html" class="navbar-brand">…</a> aka getByRole('link', { name: 'PRODUCT STORE' })
    2) <h4>…</h4> aka getByRole('heading', { name: 'PRODUCT STORE' })
    3) <p class="m-0 text-center text-white">Copyright © Product Store</p> aka getByText('Copyright © Product Store')

Call log:
  - Expect "toBeVisible" locator('text=STORE') with timeout 5000ms
  - waiting for locator('text=STORE')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
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
        - link "Log in" [ref=e17] [cursor=pointer]:
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
  1  | import Signup from '../Pages/Signup';
  2  | import { expect, test } from '@playwright/test'
  3  | import {EXPECTED_URL} from '../Utils/Constants.js'
  4  | // url stored in Constants.js file to avoid hardcoding and to make it reusable across the project
  5  | test.beforeEach(async({page})=>{ 
  6  |     await page.goto('/') }
  7  | )
  8  | 
  9  | test('Signup and close', async ({ page }) => {
  10 | 
  11 |   //  await page.goto('https://demoblaze.com/')
> 12 |        await expect(page.locator('text=STORE')).toBeVisible()
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  13 |     const SignObj = new Signup(page)
  14 |     const url =await SignObj.getURL()
  15 |     await expect(url).toBe(EXPECTED_URL)
  16 |     SignObj.SignupLinkClick()
  17 |     await SignObj.SignupData( SignObj.UsernameVal, SignObj.passwordVal)
  18 |     await SignObj.SignupcloseBtn()
  19 | 
  20 | }
  21 | )
  22 | 
  23 | test('Verify Signup functionality', async ({ page }) => {
  24 | 
  25 |  //   await page.goto('https://demoblaze.com/')
  26 |     const SignObj = new Signup(page)
  27 |     await SignObj.SignupLinkClick()
  28 |     await SignObj.SignupData( SignObj.UsernameVal, SignObj.passwordVal)
  29 |     await SignObj.OkbuttonClick()
  30 |      page.on('Sign up successful.', dialog => dialog.accept());
  31 |      await expect(page).toHaveURL(EXPECTED_URL)
  32 |      await expect(page.locator('text=STORE')).toBeVisible()
  33 | })
```