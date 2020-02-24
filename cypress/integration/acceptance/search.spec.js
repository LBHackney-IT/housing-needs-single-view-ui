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

  it('opens the page', () => {
    cy.visit('http://localdev.hackney.gov.uk:3001');
  });

  it('Logs into Single View with a valid token', () => {
    Cypress.config();
    setHackneyCookie(true);
    cy.visit('http://localdev.hackney.gov.uk:3001');
    cy.get('#Welcome to Single View').should('exist');
  });
});
