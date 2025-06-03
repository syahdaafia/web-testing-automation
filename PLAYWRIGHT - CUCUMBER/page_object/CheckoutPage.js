import { expect } from "@playwright/test";

export default class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.ccvField = page.locator('.ng-untouched input').nth(1);
        this.nameCard = page.locator('.ng-untouched input').nth(2);
        this.countryOption = page.locator('[placeholder*=Country]');
        this.indonesia = page.locator('text= Indonesia');
        this.emailLoc = page.locator('.user__name label');
        this.orderButton = page.locator('.action__submit');

    }

    async checkEmail(name) {
        await expect(this.emailLoc).toContainText(name);
    }

    async fillCheckoutInformation(ccv, name) {
        await this.ccvField.fill(ccv);
        await this.nameCard.fill(name);
        await this.countryOption.pressSequentially('ind');
        await this.indonesia.click();
        await this.orderButton.click();
    }
}