/// <reference types="cypress" />
describe('Search', () => {
  describe('When not logged in', () => {
    it('Does not log into Single View with an invalid token', () => {
      cy.setHackneyCookie(false);
      cy.visit('http://localhost:3001');
      cy.get('body').should('contain', 'Please log in');
    });
  });

  describe('When logged in', () => {
    beforeEach(() => {
      cy.setHackneyCookie(true);
    });

    it('Logs into Single View with a valid token', () => {
      cy.visit('http://localhost:3001');
      cy.get('body').should('contain', 'Welcome to Single View');
    });

    it('Verify that relevant results are returned', () => {
      cy.get('.govuk-input:first').type('Wednesday');
      cy.get('.govuk-input:last')
        .type('Adams')
        .type('{enter}');
      cy.get('body').should('contain', 'Customers with matching details');
      cy.get('body').should('contain', 'Wednesday Adams');
    });

    it('Join relevant records', () => {
      cy.get('.groupedTable')
        .first()
        .scrollIntoView()
        .find('tr')
        .then(result => {
          result.each((_, otherThing) => {
            otherThing.click();
            console.log(otherThing);
          });
        });

      cy.get('.selected').should(
        'have.css',
        'background-color',
        'rgb(158, 219, 158)'
      );
    });

    it('Connects records', () => {
      cy.get('body').should('contain', 'Create new connected record');
      cy.contains('Create new connected record')
        .scrollIntoView()
        .click({ force: true });
    });

    it('User sees customer info', () => {
      cy.get('h1')
        .should('contain', 'Miss')
        .and('contain', 'Wednesday')
        .and('contain', 'Adams');
    });

    it('User sees customer phone number', () => {
      cy.get('.details__left-column')
        .should('contain', '07666666666')
        .and('contain', '07999666999');
    });

    it('User sees customer Academy-CouncilTax IDs', () => {
      cy.get('.details__left-column__item')
        .should('contain', '333333399')
        .and('contain', '399999999');
    });

    it('User sees customer Academy-Benefits IDs', () => {
      cy.get('.details__left-column__item')
        .should('contain', '60940760')
        .and('contain', '60940888');
    });
  });

  describe('Back to search button', () => {
    beforeEach(() => {
      cy.setHackneyCookie(true);
      cy.visit(
        'http://localhost:3001/search?firstName=wednesday&lastName=adams'
      );
    });

    it('Back to search takes you back to search after viewing record', () => {
      cy.get('.govuk-button')
        .first()
        .click();
      cy.get('.govuk-back-link')
        .scrollIntoView()
        .should('contain', 'Back to search')
        .click();

      cy.get('body').should('contain', 'Customers with matching details');
    });

    it('Back to search takes you back to search after connecting records', () => {
      cy.get('.groupedTable')
        .first()
        .scrollIntoView()
        .find('tr')
        .then(result => {
          result.each((_, otherThing) => {
            otherThing.click();
            console.log(otherThing);
          });
        });

      cy.get('.govuk-button')
        .last()
        .scrollIntoView()
        .click({ force: true });

      cy.get('.govuk-back-link')
        .scrollIntoView()
        .should('contain', 'Back to search')
        .click();

      cy.get('body').should('contain', 'Customers with matching details');
    });

    it('Back to search takes you back to search after viewing record and clicking on more details in quick access', () => {
      cy.get('.govuk-button')
        .first()
        .click();

      cy.get('.quick-access__item__links')
        .last()
        .click();

      cy.get('.close').click();

      cy.get('.govuk-back-link')
        .scrollIntoView()
        .should('contain', 'Back to search')
        .click();

      cy.get('body').should('contain', 'Customers with matching details');
    });
  });
});
