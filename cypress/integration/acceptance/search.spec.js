/// <reference types="cypress" />
import jwt from 'jsonwebtoken';

describe('Search', () => {
  const setHackneyCookie = async isValidGroup => {
    const group = isValidGroup
      ? 'housingneeds-singleview-beta'
      : 'some-other-group';
    const token = jwt.sign({ groups: [group] }, 'a-secure-signature');
    await cy.setCookie('hackneyToken', token, {
      url: 'http://localhost:3001',
      domain: 'localhost'
    });
  };
  describe('When not logged in', () => {
    it('Does not log into Single View with an invalid token', () => {
      setHackneyCookie(false);
      cy.visit('http://localhost:3001');
      cy.get('body').should('contain', 'Please log in');
    });
  });

  describe('When logged in', () => {
    beforeEach(() => {
      setHackneyCookie(true);
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

    it('Connects reconds', () => {
      cy.get('body').should('contain', 'Connect records');
      cy.contains('Connect records')
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
});
