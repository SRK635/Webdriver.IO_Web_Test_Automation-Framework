const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I accept cookies$/, async () => {
    await LoginPage.acceptCookies();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I enter (.*) and (.*)$/, async (username, password) => {
    await LoginPage.enterCredentials(username, password)
});

Then(/^I validate (.*) password functionality$/, async (showOrHide) => {
    await LoginPage.validateShowOrHidePassword(showOrHide);
});

Then(/^I should see my avatar$/, async () => {
    await LoginPage.validateAvatar();
});

Then(/^I should see login error message$/, async () => {
    await LoginPage.validateLoginServerError();
});

Then(/^I should see credentials required error message$/, async () => {
    await LoginPage.validateCredentialsRequiredError();
});

When(/^I click on Forgot Password$/, async () => {
    await LoginPage.forgotPassword();
});

Then(/^I should see Password Problems page$/, async () => {
    await LoginPage.validatePasswordProblemsPage();
});

When(/^I click on Facebook button$/, async () => {
    await LoginPage.clickFacebook();
});

When(/^I accept cookies from Facebook$/, async () => {
    await LoginPage.acceptFacebookCookies();
});

Then(/^I should see Facebook login Page$/, async () => {
    await LoginPage.validateFacebookPage();
});
