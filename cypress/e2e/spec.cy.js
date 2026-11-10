/// <reference types="Cypress" />

describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');
        cy.wait(3000);
        cy.contains('type').click();
        cy.wait(3000);
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    });
});
