import CartPage from "./CartPage";

class ProductPage{
    addProducts(productName1, productName2){
        cy.wait(2000);
        cy.contains('app-card', productName1).find('button').click();
        cy.contains('app-card', productName2).find('button').click();
        cy.contains('a', 'Checkout').click();
        return new CartPage();
    }

} export default ProductPage;