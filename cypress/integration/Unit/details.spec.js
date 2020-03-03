/// <reference types="cypress" />
import jwt from 'jsonwebtoken';
describe('Documents', () => {
  it('Displays title as a clickable link', () => {
    const token = jwt.sign(
      { groups: ['housingneeds-singleview-beta'] },
      'a-secure-signature'
    );
    cy.setCookie('hackneyToken', token, {
      url: 'http://localhost:3001',
      domain: 'localhost'
    });
    cy.visit('http://localhost:3001/customers/5/view');

    cy.get('.activity > table > tbody > tr > td > strong > a').each($el =>
      cy
        .wrap($el)
        .should('contain', 'Document')
        .and('not.contain', 'Note')
        .and('not.contain', 'Academy')
        .and('have.attr', 'href')
    );
  });
});
