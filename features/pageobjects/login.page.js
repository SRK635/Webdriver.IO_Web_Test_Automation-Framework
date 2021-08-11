const Page = require('./page');
// const {mochaEachHooks} = require("@wdio/allure-reporter/build/constants");
const constants = require('../utilities/constants');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//input[@data-testid="username"]') }
    get inputPassword () { return $('//input[@data-testid="password"]') }
    get btnSubmit () { return $('//button[@data-testid="login__cta"]') }
    get btnAcceptAll () {return $('//button[@data-testid="cookieBanner__acceptAllButton"]')}
    get divAvatar () { return $('//input[@data-testid="avatar"]')}
    get paraServerError () { return $('//p[@data-testid="login__error--server"]')}
    get passwordProblemsContent () { return $('//h1[text()="Password Problems?"]')}
    get paraUsernameError() { return $('//p[@data-testid="login__error--username"]')}
    get paraPasswordError() { return $('//p[@data-testid="login__error--password"]')}
    get imageShowPassword() { return $('//*[text()="Show Password"]/../..')}
    get imageHidePassword() { return $('//*[text()="Hide Password"]/../..')}
    get btnForgotPassword() {return $('//a[@data-testid="forgotPassword__button"]')}
    get btnFacebook() {return $('//button[@data-testid="facebook-button"]')}
    get btnAcceptCookiesFB() {return $('//button[@data-testid="cookie-policy-dialog-accept-button"]')}
    get spanDepopOnFB() {return $('//span[contains(text(),"Depop")]')}



    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async enterCredentials (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async acceptCookies () {
        if(await this.btnAcceptAll.isDisplayed()){
            await this.btnAcceptAll.click();
        }
    }
    async forgotPassword () {
        await this.btnForgotPassword.click();
    }

    open () {
        return super.open('login');
    }

    async validateAvatar() {
        // expect(await this.inputSearch).toBeDisplayed();
        expect(await this.divAvatar.isDisplayed()).toBe(true);
    }

    async validateLoginServerError() {
        const actualServerError = await  this.paraServerError.getText();
        expect(actualServerError).toEqual(constants.expectedServerError);
    }

    async validatePasswordProblemsPage() {
        const actualPasswordProblemPageContent = await  this.passwordProblemsContent.getText();
        expect(actualPasswordProblemPageContent).toEqual(constants.expectedPasswordProblemPageContent);
    }

    async validateCredentialsRequiredError() {
        const actualUsernameError = await this.paraUsernameError.getText();
        const actualPasswordError = await this.paraPasswordError.getText();
        expect(actualUsernameError).toEqual(constants.expectedUsernameError);
        expect(actualPasswordError).toEqual(constants.expectedPasswordError);
    }

    async validateShowOrHidePassword (showOrHide) {
        if(showOrHide === 'hide'){
            if(!await this.imageShowPassword.isDisplayed()){
                await this.imageHidePassword.click();
            }
            const getTypeAttribute = await this.inputPassword.getAttribute('type');
            expect(getTypeAttribute).toEqual(constants.expectedPasswordAttribute);
        } else {
            if(!await this.imageHidePassword.isDisplayed()){
                await this.imageShowPassword.click();
            }
            const getTypeAttribute = await this.inputPassword.getAttribute('type');
            expect(getTypeAttribute).toEqual(constants.expectedTextAttribute);
        }
    }

    async clickFacebook() {
        await this.btnFacebook.click();
    }

    async acceptFacebookCookies() {
        await browser.waitUntil(
            async () => (await browser.getWindowHandles().length > 1,
                    {
                        timeout: 15000,
                        timeoutMsg: 'expected new window handle to be present',
                        interval: 2000,
                    }
            ));
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        await this.btnAcceptCookiesFB.click();
    }

    async validateFacebookPage() {
        expect(await this.spanDepopOnFB).toHaveText(constants.expectedLoginFacebookWith);
    }
}

module.exports = new LoginPage();
