/// <reference types="cypress" />
describe('Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('Addresses', () => {
    describe('Where is this from?', () => {
      it('Displays Where is this from as an expandable menu', () => {
        cy.contains('Where is this from?');
        cy.get('.govuk-details').first();
        'not.contain', 'JIGSAW';

        cy.get('.govuk-details__summary > .govuk-details__summary-text')
          .first()
          .scrollIntoView()
          .click({ force: true });

        cy.get('.govuk-details > .govuk-details__text');
        'contain', 'JIGSAW';
      });
    });
  });

  describe('System IDs', () => {
    it('Displays application reference', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(1)'
      ).as('applicationRefRow');

      cy.get('@applicationRefRow')
        .should('contain', 'Application ref:')
        .and('contain', 'DIR0148754');
    });

    it('Displays jigsaw customer no', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(2)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Jigsaw customer no:')
        .and('contain', '263272');
    });

    it('Displays jigsaw case ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(3)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Jigsaw case ref:')
        .and('contain', '270305');
    });

    it('Displays council tax ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(4)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Council tax ref:')
        .and('contain', '333333399')
        .and('contain', '399999999');
    });

    it('Displays benefits ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(5)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Benefits ref:')
        .and('contain', '60940760')
        .and('contain', '60940888');
    });


    it('Displays UHW contact ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(6)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'UHW contact ref:')
        .and('contain', '334351');
    });

    it('Displays Household ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(7)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Household ref:')
        .and('contain', '0122132');
    });

    it('Displays Tenancy ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(8)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Tenancy ref:')
        .and('contain', '0122132/01');
    });

    it('Displays Payment ref', () => {
      cy.get(
        '.details__left-column > :nth-child(5) > table > tbody > :nth-child(9)'
      ).as('idRow');

      cy.get('@idRow')
        .should('contain', 'Payment ref:')
        .and('contain', 'No Data');
    });
  });

  describe('Activity', () => {
    describe('Search', () => {
      it('can search by note title', () => {
        const testNoteTitle = 'Case Note';

        cy.get('#search')
          .scrollIntoView()
          .should('be.visible')
          .type(testNoteTitle, { force: true });

        cy.get('.activity > table > tbody > tr > :nth-child(2)')
          .should('have.length', '4')
          .each($el => cy.wrap($el).should('contain', testNoteTitle));
      });

      it('can search by note text', () => {
        const testNoteText = 'Change in Circs ICL';

        cy.get('#search')
          .scrollIntoView()
          .should('be.visible')
          .type(testNoteText, { force: true });

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

          cy.get('.activity__search button').click({ force: true });

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

          cy.get('.activity > table > tbody > tr > :nth-child(2)')
            .should('have.length', '42')
            .each($el => cy.wrap($el).should('contain', 'Document'));

          cy.get('.activity__search button').click({ force: true });

          cy.get('.selectedFilter').should('not.be.visible');
        });
      });
    });

    describe('Documents', () => {
      it('Displays title as a clickable link', () => {
        cy.get('.activity > table > tbody > tr > td > strong > p > a').each(
          $el =>
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
          .find('td:nth-child(2)')
          .click({ force: true })
          .should('not.contain', '...')
          .and('not.contain', 'Read more')
          .and('not.contain', 'Read less');
      });
    });
  });
});
