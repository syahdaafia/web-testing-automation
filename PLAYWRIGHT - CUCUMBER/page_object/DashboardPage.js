export default class DashboardPage {
    constructor(page){
        this.page = page;
        this.cardBody = page.locator('.card-body');
        this.cardBodyTitle = this.cardBody.locator('b');
        this.addToCartButton = this.cardBody.locator('text=" Add To Cart"');
        this.cartButton = page.locator('[routerlink*=cart]');
    }

    async searchAddProduct(productTitle){
        await this.cardBody.first().waitFor();
        const cardBodyCount = await this.cardBody.count();
        for (let i=0; i<cardBodyCount; ++i){
        if(await this.cardBodyTitle.nth(i).textContent() === productTitle){
            await this.addToCartButton.nth(i).click();
            break;
        }}
    }

    async clickCartButton(){
        await this.cartButton.click();
    }


}