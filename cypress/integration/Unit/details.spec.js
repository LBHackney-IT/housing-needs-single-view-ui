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
    cy.contains('Activity').scrollIntoView();
  });

  describe('Search Activity', () => {
    it('can search by note tile', () => {
      const testNoteTitle = 'Case Note';

      cy.get('#search')
        .scrollIntoView()
        .should('be.visible')
        .type(testNoteTitle);

      cy.get('.activity > table > tbody > tr > :nth-child(2)')
        .should('have.length', '4')
        .each($el => cy.wrap($el).should('contain', testNoteTitle));
    });

    it('can search by note text', () => {
      const testNoteText = 'Change in Circs ICL';

      cy.get('#search')
        .scrollIntoView()
        .should('be.visible')
        .type(testNoteText);

      cy.get('.activity > table > tbody > tr > :nth-child(2)')
        .should('have.length', '1')
        .each($el => cy.wrap($el).should('contain', testNoteText));
    });

    describe('filters', () => {
      beforeEach(() => {
        cy.get('.activity__search button')
          .should('be.visible')
          .click({ force: true });

        cy.get('.activity__filters')
          .should('be.visible')
          .children()
          .should('have.length', '2');
      });

      it('can filter by notes', () => {
        cy.get('.activity__filters > :nth-child(1)')
          .should('be.visible')
          .and('contain', 'All Notes')
          .click({ force: true });

        cy.get('.selectedFilter')
          .should('be.visible')
          .and('contain', 'All Notes');

        cy.get('.activity > table > tbody > tr > :nth-child(2)')
          .should('have.length', '34')
          .each($el => cy.wrap($el).should('contain', 'Note'));

        cy.get('.selectedFilter')
          .click()
          .should('not.be.visible');
      });

      it('can filter by documents', () => {
        cy.get('.activity__filters > :nth-child(2)')
          .should('be.visible')
          .and('contain', 'All Documents')
          .click({ force: true });
        cy.get('.selectedFilter')
          .should('be.visible')
          .and('contain', 'All Documents');

        cy.get('.activity > table > tbody > tr > :nth-child(2)')
          .should('have.length', '42')
          .each($el => cy.wrap($el).should('contain', 'Document'));

        cy.get('.selectedFilter')
          .click()
          .should('not.be.visible');
      });
    });
  });

  describe('Documents', () => {
    it('Has a link', () => {
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
