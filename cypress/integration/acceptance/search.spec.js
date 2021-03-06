/// <reference types="cypress" />
describe('Search', () => {
  describe('When not logged in', () => {
    it('Does not log into Single View with an invalid token', () => {
      cy.logInAsHousingNeedsOfficer(false);
      cy.visit('http://localhost:3001');
      cy.get('body').should('contain', 'Please log in');
    });
  });

  describe('When logged in', () => {
    beforeEach(() => {
      cy.logInAsHousingNeedsOfficer(true);
    });

    it('Logs into Single View with a valid token', () => {
      cy.visit('http://localhost:3001');
      cy.get('body').should('contain', 'Welcome to Single View');
    });

    it('Verify that relevant results are returned', () => {
      cy.get('.govuk-input:first').type('Wednesday');
      cy.get('#lastName')
        .type('Adams')
        .type('{enter}');
      cy.get('body')
        .should('contain', 'Customers with matching details')
        .and('contain', 'Wednesday Adams');
    });

    it('Shows an error if no name in entered', () => {
      cy.visit('http://localhost:3001');
      cy.get('[data-testid=search-by-name-button-test]').click();
      cy.get('[data-testid=search-by-name-error-test]').should(
        'contain',
        'Please enter a name'
      );
    });
  });
});
