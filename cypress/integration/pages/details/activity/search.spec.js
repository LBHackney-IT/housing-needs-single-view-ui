describe('Search', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  it('can search by note title', () => {
    const testNoteTitle = 'Case Note';

    cy.get('#searchActivity')
      .scrollIntoView()
      .should('be.visible')
      .type(testNoteTitle, { force: true });

    cy.get('.activity > table > tbody > tr > td:nth-child(2)')
      .should('have.length', '4')
      .each($el => cy.wrap($el).should('contain', testNoteTitle));
  });

  it('can search by note text', () => {
    const testNoteText = 'Change in Circs ICL';

    cy.get('#searchActivity')
      .scrollIntoView()
      .should('be.visible')
      .type(testNoteText, { force: true });

    cy.get('.activity > table > tbody > tr > td:nth-child(2)')
      .should('have.length', '1')
      .each($el => cy.wrap($el).should('contain', testNoteText));
  });

  describe('filters', () => {
    beforeEach(() => {
      cy.get('.activity__search button')
        .first()
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

      cy.get('.activity > table > tbody > tr > td:nth-child(2)')
        .should('have.length', '34')
        .each($el => cy.wrap($el).should('contain', 'Note'));

      cy.get('.activity__search button')
        .first()
        .click({ force: true });

      cy.get('.selectedFilter').should('not.be.visible');
    });

    it('can filter by documents', () => {
      cy.get('.activity__filters > :nth-child(2)')
        .should('be.visible')
        .and('contain', 'All Documents')
        .click({ force: true });

      cy.get('.selectedFilter')
        .should('be.visible')
        .and('contain', 'All Documents');

      cy.get('.activity > table > tbody > tr > td:nth-child(2)')
        .should('have.length', '42')
        .each($el => cy.wrap($el).should('contain', 'Document'));

      cy.get('.activity__search button')
        .first()
        .click({ force: true });

      cy.get('.selectedFilter').should('not.be.visible');
    });
  });
});
