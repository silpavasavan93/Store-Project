import TestDataGenerator from '../Utils/RandomDataGenerator';
export default class Signup {
    constructor(page) {
        this.page = page;
        this.signUpBtn = page.getByRole('link', { name: 'Sign up' })
        this.UserName = page.locator('#sign-username')
        this.Password = page.locator('#sign-password')
        this.OkBtn = page.locator('#signInModal').getByRole('button', { name: 'Sign up' })
        this.CloseBtn = page.locator('#signInModal').getByRole('button', { name: 'Close' }).last()

        const testData = new TestDataGenerator();

        this.UsernameVal = testData.generateUsername()
        this.passwordVal = testData.generatePassword(6)
    }

    async SignupLinkClick() {
        await this.signUpBtn.click()
    }

    async SignupData(UsernameVal, passwordVal) {
        await this.UserName.fill(UsernameVal)
        console.log(UsernameVal)
        await this.Password.fill(passwordVal)
        console.log(passwordVal)
        return {
            username: UsernameVal,
            password: passwordVal
        }

    }

    async OkbuttonClick() {
        await this.OkBtn.click()
    }

    async SignupcloseBtn() {
        await this.CloseBtn.click()

    }
    async getURL() {
        return this.page.url()
    }

}
