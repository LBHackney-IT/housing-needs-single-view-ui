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

  beforeEach(() => {
    setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('Search Activity', () => {

    it('can filter by note tile', () => {
      const testNoteTitle = 'Case Note';

      cy.get('#search')
        .should('be.visible')
        .type(testNoteTitle);

      cy.get('.activity > table > tbody > tr > :nth-child(2)')
        .should('have.length', '4')
        .each($el => cy.wrap($el).should('contain', testNoteTitle));
    });

    it('can filter by note text', () => {
      const testNoteText = 'Change in Circs ICL';

      cy.get('#search')
        .should('be.visible')
        .type(testNoteText);

      cy.get('.activity > table > tbody > tr > :nth-child(2)')
        .should('have.length', '1')
        .each($el => cy.wrap($el).should('contain', testNoteText));
    });
  });

  describe('Documents', () => {
    it('Has a link', () => {
      cy.get('tbody > tr > td > a').each($el =>
        cy.wrap($el).should('contain', 'Document')
      );
    });
  });
});
