/// <reference types="cypress" />
describe('Results Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/search?firstName=Wednesday&lastName=Adams');
  });

  describe('Create new connected record button', () => {
    it('Contains create new connected record button', () => {
      cy.get('.connectRecords > .row > .govuk-button').should(
        'contain',
        'Create new connected record'
      );
    });

    it('Button is disabled unless a record is selected', () => {
      cy.get('.connectRecords > .row > .govuk-button')
        .should('contain', 'Create new connected record')
        .and('have.attr', 'disabled');

      cy.get('.groupedTable > tbody > tr:nth-child(4) > td')
        .first()
        .scrollIntoView()
        .click({ force: true });

      cy.get('.connectRecords > .row > .govuk-button')
        .should('contain', 'Create new connected record')
        .and('not.have.attr', 'disabled');
    });

    it('does not display the button if there are no results', () => {
      cy.visit('http://localhost:3001/search?firstName=fake&lastName=name');
      cy.get('.connectRecords > .row > .govuk-button').should('not.exist');
    });
  });

  describe('Back to search', () => {
    it('Back to search takes you back to search page', () => {
      cy.visit('http://localhost:3001/');
      cy.get('.govuk-input:last')
        .type('Fake')
        .type('{enter}');
      cy.get('.govuk-back-link')
        .scrollIntoView()
        .should('contain', 'Back to search')
        .click();

      cy.get('body').should('contain', 'Search for a customer');
    });
  });

  describe('Search again button', () => {
    it('Back to search takes you back to search page', () => {
      cy.visit('http://localhost:3001/');
      cy.get('.govuk-input:last')
        .type('Fake')
        .type('{enter}');
      cy.get('.govuk-button:last')
        .scrollIntoView()
        .should('contain', 'Search again')
        .click();

      cy.get('body').should('contain', 'Search for a customer');
    });
  });
});
