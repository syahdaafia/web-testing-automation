import { Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { chromium } from 'playwright';
import PageObjectManager from '../../page_object/PageObjectManager.js';

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pageObjectManager = new PageObjectManager(this.page);
});

After(async function () {
    console.log("Skenario selesai");
    if (this.page) {
        await this.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
    if (this.browser) {
        await this.browser.close();
    }
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'failedScreenshot1.png' });
    }
});