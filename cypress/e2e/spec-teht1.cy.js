/// <reference types="Cypress" />

describe('Testataan wikipedia', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');
        cy.wait(3000);
        cy.get('#p-search > a').click();
        cy.get('#searchform > div > button').type('Jamk').click;
        /*
        cy.wait(3000);
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
            */
    });
});
