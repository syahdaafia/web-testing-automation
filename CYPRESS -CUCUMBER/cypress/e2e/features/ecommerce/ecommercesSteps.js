import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../../cypress-cucumber/cypress/support/pageObjects/HomePage";

Given('User is on the landing page', function () {
    this.homePage = new HomePage;
    const baseUrl = Cypress.config('baseUrl');
    this.homePage.goTo(baseUrl);
})

When('User logs in with {string} and {string}', function (username, password) {
    this.productPage = this.homePage.login(username, password);
})

When('User adds {string} and {string} to the cart', function (productName1, productName2) {
    this.cartPage = this.productPage.addProducts(productName1, productName2);
})

When('User checks out the items', function () {
    this.cartPage.countTotal().then((total) => {
        expect(total).to.be.lessThan(200000);
    });
    this.confirmationPage = this.cartPage.checkout();

})

Then('Success message should appear on the screen', function () {
    this.confirmationPage.selectLocation();
    this.confirmationPage.getAlert().should('contain', 'few weeks');
})