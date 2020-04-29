describe('Activity', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('Search', () => {
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

  describe('Documents', () => {
    it('Displays title as a clickable link', () => {
      cy.get(
        '.activity > table > tbody > tr > td > p > strong > button'
      ).each($el =>
        cy
          .wrap($el)
          .should('contain', 'Document')
          .and('not.contain', 'Note')
          .and('not.contain', 'Academy')
      );
    });

    it('Requests correct COMINO doc', () => {
      cy.get('.activity > table > tbody > tr > td > p > strong > button')
        .first()
        .scrollIntoView()
        .click({ force: true });

      cy.get('iframe')
        .should('have.attr', 'title', 'document')
        .and('have.attr', 'src')
        .and('match', /hncomino\/documents\/40564358\/view/);
    });

    it('Requests correct UHW doc', () => {
      cy.get('.activity > table > tbody > tr > td > p > strong > button')
        .eq(1)
        .scrollIntoView()
        .click({ force: true });

      cy.get('iframe')
        .should('have.attr', 'title', 'document')
        .and('have.attr', 'src')
        .and('match', /uhw\/documents\/8355548\/view/);
    });
  });

  describe('Read more', () => {
    it('Displays read more button if note is longer than 128 characters', () => {
      cy.get('.activity > table > tbody > tr:nth-child(3) > td:nth-child(2)')
        .should('contain', '...')
        .and('contain', 'Read more')
        .and('not.contain', 'Read less');
      cy.get(
        '.activity > table > tbody > tr:nth-child(3) > td:nth-child(2) > span'
      )
        .click({ force: true })
        .should('contain', 'Read less')
        .and('not.contain', 'Read more');

      cy.get('.activity > table > tbody > tr:nth-child(3) > td:nth-child(2)')
        .first()
        .scrollIntoView()
        .find('span')
        .click({ force: true })
        .should('contain', 'Read more')
        .and('not.contain', 'Read less');
    });

    it('Does not display read more/less button if note is less than 128 characters', () => {
      cy.get('.activity > table > tbody > tr:nth-child(4)')
        .first()
        .scrollIntoView()
        .find('td:nth-child(3)')
        .click({ force: true })
        .should('not.contain', '...')
        .and('not.contain', 'Read more')
        .and('not.contain', 'Read less');
    });
  });
});
