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
      cy.contains('Please log in');
    });
  });

  describe('When logged in', () => {
    beforeEach(() => {
      setHackneyCookie(true);
    });

    it('Logs into Single View with a valid token', () => {
      cy.visit('http://localhost:3001');
      cy.contains('Welcome to Single View');
    });

    it('Verify that relevant results are returned', () => {
      cy.get('.govuk-input:first').type('Wednesday');
      cy.get('.govuk-input:last')
        .type('Adams')
        .type('{enter}');
      cy.contains('Customers with matching details');
      cy.contains('Wednesday Adams');
    });

    it('Join relevant records', () => {
      cy.get('.groupedTable').first()
        .find('tr')
        .then(result => {
          result.each((_, otherThing) => {
            otherThing.click();
          });
        });
      cy.contains('Connect records').click();
    });

    it('User sees customer info', () => {
      cy.get('h1').should('contain', 'Miss Wednesday Adams');
    });
  });
});
