/// <reference types="cypress" />
import jwt from 'jsonwebtoken';
describe('Details Page', () => {
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
  describe('Documents', () => {
    it('Displays title as a clickable link', () => {
      setHackneyCookie(true);

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

  describe('Read more', () => {
    it('Displays read more button if note is longer than 128 characters', () => {
      setHackneyCookie(true);

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
});
