import { expect } from "@playwright/test";

export default class OrderHistoryPage {
    constructor(page) {
        this.page = page;
        this.table = page.locator("tbody");
        this.row = page.locator('tbody tr');
        this.orderId = this.row.locator('th');
        this.viewButton = this.row.locator('button:has-text("View")');
        this.successView = page.locator('.email-title');
    }

    async clickView(orderNumber) {
        await this.table.waitFor();
        const orderIdCount = await this.orderId.count();

        for (let i = 0; i < orderIdCount; ++i) {
            if (await this.orderId.nth(i).textContent() === orderNumber) {
                await this.viewButton.nth(i).click();
                break;
            }
        }
    }

    async checkSucces(){
        await this.successView.waitFor();
        await expect(this.successView).toContainText(' order summary ');
    }
}