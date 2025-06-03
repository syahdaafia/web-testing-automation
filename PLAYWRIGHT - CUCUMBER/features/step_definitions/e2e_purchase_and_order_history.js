import { Given, When, Then } from '@cucumber/cucumber';

Given('user is on the login page', {timeout: 10000}, async function () {
    this.loginPage = this.pageObjectManager.getLoginPage();
    await this.loginPage.goTo();
});


When('user login with email {string} and password {string}', async function (email, password) {
    this.email = email;
    await this.loginPage.login(email, password);
});


When('user adds product {string} to the cart', {timeout: 10000}, async function (productTitle) {
    this.productTitle = productTitle;
    this.dashboardPage = this.pageObjectManager.getDashboardPage();
    await this.dashboardPage.searchAddProduct(productTitle);
});


When('user clicks cart button', async function () {
    await this.dashboardPage.clickCartButton();
});

Then('the product should be displayed on the cart page', {timeout: 10000}, async function () {
    this.cartPage = this.pageObjectManager.getCartPage();
    await this.cartPage.checkTitle(this.productTitle);
});

When('user clicks delete product button', async function () {
    await this.cartPage.deleteProduct();
});

Then('user should see no products in cart message', async function () {
    await this.cartPage.checkNoProducts();
})

When('user clicks the checkout button', async function () {
    await this.cartPage.clickCheckout();
});

When('user fills payment information with CCV {string}, country, and checks name {string}', {timeout: 10000}, async function (ccv, name) {
    const checkoutPage = this.pageObjectManager.getCheckoutPage();
    await checkoutPage.checkEmail(name);
    await checkoutPage.fillCheckoutInformation(ccv, name)

});

Then('the order confirmation message should be displayed', async function () {
    const confirmationPage = this.pageObjectManager.getConfirmationPage();
    this.orderNumber = await confirmationPage.getOrderNumber();
    await confirmationPage.clickOrderHistory();
});

When('user views the order with the order number from confirmation', async function () {
    this.orderHistoryPage = this.pageObjectManager.getOrderHistoryPage();
    await this.orderHistoryPage.clickView(this.orderNumber);
});

Then('user should see order details successfully', async function () {
    await this.orderHistoryPage.checkSucces();
});



