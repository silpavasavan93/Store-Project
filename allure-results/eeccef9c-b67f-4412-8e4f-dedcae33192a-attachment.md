# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Purchase.spec.js >>  Verifying a successfull purchase of monitor with user name as mia935 and password as 7qeQrh
- Location: tests\Purchase.spec.js:28:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Samsung galaxy s6' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=f1e16]:
        - link "Log out" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e18]:
        - link "Welcome mia935" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "Third slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [active] [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f1e43]:
      - generic [ref=f1e44]:
        - generic [ref=f1e46]:
          - link [ref=f1e47] [cursor=pointer]:
            - /url: prod.html?idp_=10
          - generic [ref=f1e48]:
            - heading [level=4] [ref=f1e49]:
              - link "Apple monitor 24" [ref=f1e50] [cursor=pointer]:
                - /url: prod.html?idp_=10
            - heading "$400" [level=5] [ref=f1e51]
            - paragraph [ref=f1e52]: LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD display with IPS technology and an optimum resolution of 2560x1440. It has a 178 degree horizontal and vertical viewing angle, a "typical" brightness of 375 cd/m2, contrast ratio of 1000:1, and a 12 ms response time.
        - generic [ref=f1e54]:
          - link [ref=f1e55] [cursor=pointer]:
            - /url: prod.html?idp_=14
          - generic [ref=f1e56]:
            - heading [level=4] [ref=f1e57]:
              - link "ASUS Full HD" [ref=f1e58] [cursor=pointer]:
                - /url: prod.html?idp_=14
            - heading "$230" [level=5] [ref=f1e59]
            - paragraph [ref=f1e60]: ASUS VS247H-P 23.6- Inch Full HD
      - list [ref=f1e62]:
        - listitem [ref=f1e63]:
          - button "Previous" [ref=f1e64]
        - listitem [ref=f1e65]:
          - button "Next" [ref=f1e66] [cursor=pointer]
  - generic [ref=f1e68]:
    - generic [ref=f1e71]:
      - heading "About Us" [level=4] [ref=f1e72]
      - paragraph [ref=f1e73]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e76]:
      - heading "Get in Touch" [level=4] [ref=f1e77]
      - paragraph [ref=f1e78]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e79]: "Phone: +440 123456"
      - paragraph [ref=f1e80]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e84]
  - contentinfo [ref=f1e86]:
    - paragraph [ref=f1e87]: Copyright © Product Store
```

# Test source

```ts
  1  | import TestDataGenerator from '../Utils/RandomDataGenerator';
  2  | 
  3  | 
  4  | export default class Purchase {
  5  |     constructor(page) {
  6  |         this.page = page
  7  |         this.mobile = page.getByRole('link', { name: 'Samsung galaxy s6' })
  8  |         this.productName = page.locator('.name');
  9  |         this.addTocartBtn = page.getByRole('link', { name: 'Add to Cart' })
  10 |         this.Homebtn = page.getByRole('link', { name: 'Home' })
  11 |         this.catgryMonitor = page.getByRole('link', { name: 'Monitors' })
  12 |         this.catgryPhones = page.getByRole('link', { name: 'Phones' })
  13 |         this.monitor = page.getByRole('link', { name: 'Apple monitor 24' })
  14 |         this.randomProduct = page.getByRole('link', { name: 'Sony xperia z5' })
  15 |         //same name found so added exact
  16 |         this.CartBtn = page.getByRole('link', { name: 'Cart', exact: true })
  17 |         this.CartProduct = page.getByRole('cell', { name: 'Samsung galaxy s6' })
  18 |         this.PlaceorderBtn = page.getByRole('button', { name: 'Place Order' })
  19 |         //used the util file
  20 |         const testData = new TestDataGenerator();
  21 |         this.FullnameVal = testData.generateRandomFullName()
  22 |         this.countryVal = testData.generateCountry()
  23 |         this.cityVal = testData.generateCityName()
  24 |         this.cardVal = testData.generateFormattedCardNumber()
  25 |         this.monthVal = testData.generateRandomMonth()
  26 |         this.yearval = testData.generateRandomYear()
  27 | 
  28 | 
  29 |         this.Fullname = page.getByRole('textbox', { name: 'name' })
  30 |         this.country = page.getByRole('textbox', { name: 'country' })
  31 |         this.city = page.getByRole('textbox', { name: 'city' })
  32 |         this.Creditcard = page.getByRole('textbox', { name: 'card' })
  33 |         this.month = page.getByRole('textbox', { name: 'month' })
  34 |         this.year = page.getByRole('textbox', { name: 'year' })
  35 |         this.purchaseConfirm = page.getByRole('button', { name: 'purchase' })
  36 | 
  37 |         this.purchaseconfirmText = page.getByRole('heading', { name: 'Thank you for your purchase!' })
  38 |         this.okBtn = page.getByRole('button', { name: 'OK' })
  39 |     }
  40 | 
  41 |     async MobPurchaseflow() {
  42 |         await this.mobile.isVisible()
  43 |         await this.mobile.waitFor({ state: 'visible' })
  44 |         await this.mobile.click()
  45 |         await this.productName.isVisible()
  46 |         await this.addTocartBtn.isVisible()
  47 |         await this.addTocartBtn.waitFor({ state: 'visible' });
  48 | 
  49 |         await this.addTocartBtn.click()
  50 |     }
  51 | 
  52 |     async MonitorPurchaseflow() {
  53 |         await this.catgryMonitor.click()
> 54 |         await this.mobile.waitFor({ state: 'visible' })
     |                           ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  55 |         await this.monitor.click()
  56 |         await this.addTocartBtn.isVisible()
  57 |         await this.addTocartBtn.waitFor({ state: 'visible' });
  58 |        await this.addTocartBtn.click()
  59 | 
  60 |     }
  61 | 
  62 |     async RandomPurchaseflow() {
  63 |         //    await this.catgryPhones.click()
  64 |         await this.randomProduct.isVisible()
  65 |         await this.randomProduct.click()
  66 |         await this.addTocartBtn.isVisible()
  67 |         await this.addTocartBtn.waitFor({ state: 'visible' });
  68 |         await this.addTocartBtn.click()
  69 |     }
  70 | 
  71 |     async CompletePurchaseofMobile() {
  72 |         await this.CartBtn.click()
  73 |         await this.CartProduct.isVisible()
  74 |         await this.PlaceorderBtn.click()
  75 | 
  76 |     }
  77 | 
  78 | 
  79 |     async FillThedata(FullnameVal, countryVal, cityVal, cardVal, monthVal, yearval) {
  80 |         await this.Fullname.fill(FullnameVal)
  81 |         await this.country.fill(countryVal)
  82 |         await this.city.fill(cityVal)
  83 |         await this.Creditcard.fill(cardVal)
  84 |         await this.month.fill(monthVal)
  85 |         await this.year.fill(yearval)
  86 |         await this.purchaseConfirm.click()
  87 | 
  88 | 
  89 |     }
  90 | 
  91 |     async ConfirmOder() {
  92 |         await this.purchaseconfirmText.isVisible()
  93 |         await this.okBtn.click()
  94 |     }
  95 | 
  96 | }
```