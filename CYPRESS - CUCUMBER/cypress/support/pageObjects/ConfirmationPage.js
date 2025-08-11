class ConfirmationPage {
    selectLocation() {
        cy.get('.validate').type('indonesia');
        cy.wait(6000);
        cy.get('.suggestions li a', { timeout: 15000 }).click();
        cy.get('input[type="checkbox"]').check({ force: true });
        cy.get('.btn-success').click();
    }

    getAlert() {
        return cy.get('.alert');
    }

} export default ConfirmationPage;