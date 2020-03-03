/// <reference types="cypress" />
import jwt from 'jsonwebtoken';
describe('Documents', () => {
  it('Has a link', () => {
    const token = jwt.sign(
      { groups: ['housingneeds-singleview-beta'] },
      'a-secure-signature'
    );
    cy.setCookie('hackneyToken', token, {
      url: 'http://localhost:3001',
      domain: 'localhost'
    });
    cy.visit('http://localhost:3001/customers/5/view');

    cy.get('tbody > tr > td:nth-child(2) > a')
      .should('have.attr', 'href')
      .and('include', '#/');
  });
});
