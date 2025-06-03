import LoginPage from "./LoginPage.js";
import DashboardPage from "./DashboardPage.js";
import CartPage from "./CartPage.js";
import CheckoutPage from "./CheckoutPage.js";
import ConfirmationPage from "./ConfirmationPage.js";
import OrderHistoryPage from "./OrderHistoryPage.js";

export default class PageObjectManager{
    constructor(page){
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.confirmationPage = new ConfirmationPage(page);
        this.orderHistoryPage = new OrderHistoryPage(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getConfirmationPage(){
        return this.confirmationPage;
    }

    getOrderHistoryPage(){
        return this.orderHistoryPage;
    }
}