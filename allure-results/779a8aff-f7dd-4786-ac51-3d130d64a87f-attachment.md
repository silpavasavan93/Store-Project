# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Purchase.spec.js >>  complete the purchase of  mobile of user mia935 and 7qeQrh
- Location: tests\Purchase.spec.js:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#logInModal') to be hidden
    56 × locator resolved to visible <div tabindex="-1" role="dialog" id="logInModal" class="modal fade show" aria-labelledby="logInModalLabel">…</div>

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: mia935
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: 7qeQrh
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [active] [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - img "Third slide" [ref=e46]
      - button "Previous" [ref=e47] [cursor=pointer]
      - button "Next" [ref=e50] [cursor=pointer]
  - generic [ref=e54]:
    - generic [ref=e56]:
      - link "CATEGORIES" [ref=e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e60] [cursor=pointer]:
        - /url: "#"
    - list [ref=e63]:
      - listitem [ref=e64]:
        - button "Previous" [ref=e65]
      - listitem [ref=e66]:
        - button "Next" [ref=e67] [cursor=pointer]
  - generic [ref=e69]:
    - generic [ref=e72]:
      - heading "About Us" [level=4] [ref=e73]
      - paragraph [ref=e74]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e77]:
      - heading "Get in Touch" [level=4] [ref=e78]
      - paragraph [ref=e79]: "Address: 2390 El Camino Real"
      - paragraph [ref=e80]: "Phone: +440 123456"
      - paragraph [ref=e81]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e85]
  - contentinfo [ref=e87]:
    - paragraph [ref=e88]: Copyright © Product Store
```

# Test source

```ts
  1  | export default class Login {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.loginLink = page.getByRole('link', { name: 'Log in' })
  5  |         this.username = page.locator('#loginusername')
  6  |         this.password = page.locator('#loginpassword')
  7  |         this.LoginBtn = page.locator('#logInModal').getByRole('button', { name: 'Log in' })
  8  |         this.logoutBtn = page.getByRole('link', { name: 'Log out', exact: true })
  9  |     }
  10 | 
  11 |     async LoginLink() {
  12 |         await this.loginLink.click()
  13 | 
  14 |     }
  15 |     // one function is enough , we can change the parameters in spec.js file
  16 | 
  17 |     async loginFunctionality(usernameVal, passwordVal) {
  18 |         await this.username.fill(usernameVal)
  19 |         await this.password.fill(passwordVal)
  20 |         await this.LoginBtn.waitFor({ state: 'visible' });
  21 |         await this.LoginBtn.click()
  22 |         await this.page.locator('#logInModal')
> 23 |         .waitFor({ state: 'hidden' });
     |          ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  24 |     }
  25 | 
  26 |     async logout() {
  27 |         await this.logoutBtn.click()
  28 | 
  29 |     }
  30 |     async getURL() {
  31 |         return this.page.url()
  32 |         // return this.page.url() is used to get the current URL of the page. It returns a promise that resolves to a string representing the URL of the page.
  33 |         // this return means that the function getURL() will return the current URL of the page when it is called. This can be useful for verifying that the user has been redirected to the correct page after logging in or performing other actions on the website.
  34 |     }
  35 |     async dialogAccept() {
  36 |         this.page.on('dialog', dialog => dialog.accept());
  37 |     }
  38 | 
  39 | }
```