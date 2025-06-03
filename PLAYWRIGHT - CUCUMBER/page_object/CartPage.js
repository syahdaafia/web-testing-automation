import { expect } from "@playwright/test";

export default class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('.totalRow button');
        this.deleteButton = page.locator('.btn-danger');
        this.message = page.locator('h1');
    }

    async checkTitle(productTitle) {
        await this.page.locator("div li").first().waitFor();
        const productLocator = this.page.locator('h3', { hasText: productTitle });
        expect(await productLocator.isVisible()).toBeTruthy();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async deleteProduct(){
        await this.deleteButton.click();
    }

    async checkNoProducts(){
        expect (await this.page.locator('h1', {hasText:'No Products in Your Cart !'}.isVisible)).toBeTruthy();
    }
}