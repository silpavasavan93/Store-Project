import TestDataGenerator from '../Utils/RandomDataGenerator';


export default class Purchase {
    constructor(page) {
        this.page = page
        this.mobile = page.getByRole('link', { name: 'Samsung galaxy s6' })
        this.productName = page.locator('.name');
        this.addTocartBtn = page.getByRole('link', { name: 'Add to Cart' })
        this.Homebtn = page.getByRole('link', { name: 'Home' })
        this.catgryMonitor = page.getByRole('link', { name: 'Monitors' })
        this.catgryPhones = page.getByRole('link', { name: 'Phones' })
        this.monitor = page.getByRole('link', { name: 'Apple monitor 24' })
        this.randomProduct = page.getByRole('link', { name: 'Sony xperia z5' })
        //same name found so added exact
        this.CartBtn = page.getByRole('link', { name: 'Cart', exact: true })
        this.CartProduct = page.getByRole('cell', { name: 'Samsung galaxy s6' })
        this.PlaceorderBtn = page.getByRole('button', { name: 'Place Order' })
        //used the util file
        const testData = new TestDataGenerator();
        this.FullnameVal = testData.generateRandomFullName()
        this.countryVal = testData.generateCountry()
        this.cityVal = testData.generateCityName()
        this.cardVal = testData.generateFormattedCardNumber()
        this.monthVal = testData.generateRandomMonth()
        this.yearval = testData.generateRandomYear()


        this.Fullname = page.getByRole('textbox', { name: 'name' })
        this.country = page.getByRole('textbox', { name: 'country' })
        this.city = page.getByRole('textbox', { name: 'city' })
        this.Creditcard = page.getByRole('textbox', { name: 'card' })
        this.month = page.getByRole('textbox', { name: 'month' })
        this.year = page.getByRole('textbox', { name: 'year' })
        this.purchaseConfirm = page.getByRole('button', { name: 'purchase' })

        this.purchaseconfirmText = page.getByRole('heading', { name: 'Thank you for your purchase!' })
        this.okBtn = page.getByRole('button', { name: 'OK' })
    }

    async MobPurchaseflow() {
        await this.mobile.isVisible()
        await this.mobile.waitFor({ state: 'visible' })
        await this.mobile.click()
        await this.productName.isVisible()
        await this.addTocartBtn.isVisible()
        await this.addTocartBtn.waitFor({ state: 'visible' });

        await this.addTocartBtn.click()
    }

    async MonitorPurchaseflow() {
        await this.catgryMonitor.click()
        await this.mobile.waitFor({ state: 'visible' })
        await this.monitor.click()
        await this.addTocartBtn.isVisible()
        await this.addTocartBtn.waitFor({ state: 'visible' });
       await this.addTocartBtn.click()

    }

    async RandomPurchaseflow() {
        //    await this.catgryPhones.click()
        await this.randomProduct.isVisible()
        await this.randomProduct.click()
        await this.addTocartBtn.isVisible()
        await this.addTocartBtn.waitFor({ state: 'visible' });
        await this.addTocartBtn.click()
    }

    async CompletePurchaseofMobile() {
        await this.CartBtn.click()
        await this.CartProduct.isVisible()
        await this.PlaceorderBtn.click()

    }


    async FillThedata(FullnameVal, countryVal, cityVal, cardVal, monthVal, yearval) {
        await this.Fullname.fill(FullnameVal)
        await this.country.fill(countryVal)
        await this.city.fill(cityVal)
        await this.Creditcard.fill(cardVal)
        await this.month.fill(monthVal)
        await this.year.fill(yearval)
        await this.purchaseConfirm.click()


    }

    async ConfirmOder() {
        await this.purchaseconfirmText.isVisible()
        await this.okBtn.click()
    }

}