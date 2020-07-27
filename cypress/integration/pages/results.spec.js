/// <reference types="cypress" />
describe('Results Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
  });

  describe('Connect records', () => {
    it('Contains create new connected record button', () => {
      cy.visit(
        'http://localhost:3001/search?firstName=Wednesday&lastName=Adams'
      );
      cy.get('.connectRecords > .row > .govuk-button').should(
        'contain',
        'Create new connected record'
      );
    });

    it('Button is disabled unless a record is selected', () => {
      cy.visit(
        'http://localhost:3001/search?firstName=Wednesday&lastName=Adams'
      );
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

    it('Join relevant records', () => {
      cy.visit(
        'http://localhost:3001/search?firstName=Wednesday&lastName=Adams'
      );

      cy.get('.groupedTable')
        .first()
        .find('tr')
        .then(result => {
          result.each((_, otherThing) => {
            otherThing.click();
          });
        });

      cy.get('.selected').should(
        'have.css',
        'background-color',
        'rgb(158, 219, 158)'
      );

      cy.get('body').should('contain', 'Create new connected record');
      cy.contains('Create new connected record').click({ force: true });

      cy.get('h1')
        .should('contain', 'Miss')
        .and('contain', 'Wednesday')
        .and('contain', 'Adams');

      cy.get('.details__left-column')
        .should('contain', '07666666666')
        .and('contain', '07999666999');

      cy.get('.details__left-column__item')
        .should('contain', '333333399')
        .and('contain', '399999999');

      cy.get('.details__left-column__item')
        .should('contain', '60940760')
        .and('contain', '60940888');
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
