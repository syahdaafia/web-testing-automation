import ConfirmationPage from "./ConfirmationPage";

class CartPage {
    countTotal() {
        let result = 0;
        return cy.get('tr td.col-sm-1:nth-child(4)').each(($el) => {
            const str = $el.text();
            const num = Number(str.split(' ')[1]);
            result += num;
        }).then(() => {
            return result;
        })
    }

    checkout() {
        cy.get('.btn-success').click();
        return new ConfirmationPage();
    }

} export default CartPage;