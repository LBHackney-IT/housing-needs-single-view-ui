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
  });
});
