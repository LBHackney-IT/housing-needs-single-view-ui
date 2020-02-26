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

  it('Logs into Single View with a valid token', () => {
    setHackneyCookie(true);
    cy.visit('http://localhost:3001');
    cy.contains('Welcome to Single View');
  });

  it('Does not log into Single View with an invalid token', () => {
    setHackneyCookie(false);
    cy.visit('http://localhost:3001');
    cy.contains('Please log in');
  });

  it('makes a fake request', () => {
    setHackneyCookie(true);
    cy.visit('http://localhost:3001');
    cy.get('.govuk-input:first').type('John');
    cy.get('.govuk-input:last')
      .type('Smith')
      .type('{enter}');
    cy.contains('Customers with matching details');
  });
});
