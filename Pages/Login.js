export default class Login {
    constructor(page) {
        this.page = page
        this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.LoginBtn = page.locator('#logInModal').getByRole('button', { name: 'Log in' })
        this.logoutBtn = page.getByRole('link', { name: 'Log out', exact: true })
        
    }

    async LoginLink() {
        await this.loginLink.click()

    }
    // one function is enough , we can change the parameters in spec.js file

    async loginFunctionality(usernameVal, passwordVal) {
        await this.username.fill(usernameVal)
        await this.password.fill(passwordVal)
        await this.LoginBtn.click()
    }

    async logout() {
        await this.logoutBtn.click()

    }
    async getURL() {
        return this.page.url()
        // return this.page.url() is used to get the current URL of the page. It returns a promise that resolves to a string representing the URL of the page.
        // this return means that the function getURL() will return the current URL of the page when it is called. This can be useful for verifying that the user has been redirected to the correct page after logging in or performing other actions on the website.
    }
    async dialogAccept() {
        this.page.on('dialog', dialog => dialog.accept());
    }

}