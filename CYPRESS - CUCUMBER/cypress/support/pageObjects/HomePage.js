import ProductPage from "./ProductPage";

class HomePage {
    login(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('[value="user"]').click();
        cy.wait(1000);
        cy.get('#okayBtn').click();
        cy.get('select.form-control').select('teach');
        cy.get('#terms').check();
        cy.get('#signInBtn').click();
        return new ProductPage();
    }

    goTo(url){
        cy.visit(url);
    }
} export default HomePage;