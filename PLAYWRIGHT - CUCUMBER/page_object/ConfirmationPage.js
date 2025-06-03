import { expect } from "@playwright/test";

export default class ConfirmationPage {
    constructor(page) {
        this.page = page
        this.successLoc = page.locator('.hero-primary');
        this.orderNumber = page.locator('label.ng-star-inserted');
        this.orderHistoryButton = page.locator('button[routerlink*=myorders]');

    }

    async checkSucces() {
        await this.successLoc.waitFor();
        await expect(this.successLoc).toHaveText(' Thankyou for the order. ');

    }

    async getOrderNumber() {
        const textOrderNumber = await this.orderNumber.textContent();
        return textOrderNumber.split(' ')[2];
    }

    async clickOrderHistory() {
        await this.orderHistoryButton.click();
    }
}