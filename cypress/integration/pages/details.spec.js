/// <reference types="cypress" />
describe('Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('Quick Access', () => {
    describe('Case Information', () => {
      const pathToUl = '#quickAccess > div > div:nth-child(1) > div > ul';
      const rowSelectorUl = rowNumber => {
        return `${pathToUl} > :nth-child(${rowNumber})`;
      };
      const pathToMoreDetails = `${rowSelectorUl(3)} > a`;
      const pathToPopUpBox =
        '#quickAccess > div > div:nth-child(1) > div > ul > li:nth-child(3) > div.popup-overlay > div > div > div';
      const rowSelectorPopUpBox = rowNumber => {
        return `${pathToPopUpBox} > table > tbody > :nth-child(${rowNumber})`;
      };
      it('Displays Case Information', () => {
        cy.get('#quickAccess > div > div:nth-child(1) > h3').should(
          'contain',
          'Case Information'
        );
      });

      it('Displays Stage', () => {
        const pathToTd =
          '#quickAccess > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)';
        cy.get(pathToTd).should('contain', 'Stage:');
        cy.get(pathToTd)
          .siblings()
          .should('contain', 'Main duty accepted');
      });

      it('Displays Link to PHP', () => {
        cy.get(`${rowSelectorUl(1)} > a`)
          .should('contain', 'Link to PHP')
          .and('have.attr', 'href');
      });

      it('Displays Link to Jigsaw', () => {
        cy.get(`${rowSelectorUl(2)} > a`)
          .should('contain', 'Link to Jigsaw')
          .and('have.attr', 'href');
      });

      it('Can click more details and display pop up box with case details', () => {
        cy.get(pathToMoreDetails).should('contain', 'More details');
        cy.get(pathToMoreDetails)
          .scrollIntoView()
          .click({ force: true });
        cy.get(pathToPopUpBox).should('contain', 'Case details');
      });

      describe('Case information More details', () => {
        it('Displays Tenancy ID', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(1)} > :nth-child(1)`).should(
            'contain',
            'Tenancy ID'
          );
          cy.get(`${rowSelectorPopUpBox(1)} > :nth-child(1)`)
            .siblings()
            .should('contain', '59538')
            .and('have.length', 1);
        });
      });
    });

    describe('Housing Register', () => {
      const pathToMoreDetailsAnchor = '#housingRegister > div > ul > li > a';

      it('Displays Housing Register', () => {
        cy.get('#quickAccess > div > #housingRegister').should(
          'contain',
          'Housing Register'
        );
      });

      it('Displays Bidding no', () => {
        const pathToTd =
          '#housingRegister > table > tbody > tr:nth-child(1) > td:nth-child(1)';
        cy.get(pathToTd).should('contain', 'Bidding no:');
        cy.get(pathToTd)
          .siblings()
          .should('contain', '2156200');
      });

      it('Displays Band', () => {
        const pathToTd =
          '#housingRegister > table > tbody > tr:nth-child(2) > td:nth-child(1)';
        cy.get(pathToTd).should('contain', 'Band:');
        cy.get(pathToTd)
          .siblings()
          .should('contain', 'Homeless')
          .and('have.length', 1);
      });

      it('Can click more details and display pop up box with housing register information', () => {
        const pathToPopUpBox =
          '#housingRegister > div > ul > li > div.popup-overlay > div > div > div';
        cy.get(pathToMoreDetailsAnchor).
        should('contain', 'More details')
        .and('have.attr', 'href');;
        cy.get(pathToMoreDetailsAnchor)
          .scrollIntoView()
          .click({ force: true });
        cy.get(pathToPopUpBox).should(
          'contain',
          'Housing Register Information'
        );
      });

      describe('Housing Register More Details', () => {
        const pathToHousingRegisterInformationTable = '#housingRegister > div > ul > li > div.popup-overlay > div > div > div > table > tbody';
        const rowSelector = rowNumber => {
          return `${pathToHousingRegisterInformationTable} > :nth-child(${rowNumber})`;
        };
        it('Displays Application Ref', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(1)} > :nth-child(1)`).should(
            'contain',
            'Application Ref:'
          );
          cy.get(`${rowSelector(1)} > :nth-child(1)`)
            .siblings()
            .should('contain', 'DIR0148754')
            .and('have.length', 1);
        });

        it('Displays Bidding no', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(2)} > :nth-child(1)`).should(
            'contain',
            'Bidding no:'
          );
          cy.get(`${rowSelector(2)} > :nth-child(1)`)
            .siblings()
            .should('contain', '2156200')
            .and('have.length', 1);
        });

        it('Displays Band', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(3)} > :nth-child(1)`).should(
            'contain',
            'Band:');
          cy.get(`${rowSelector(3)} > :nth-child(1)`)
            .siblings()
            .should('contain', 'Homeless')
            .and('have.length', 1);
        });

        it('Displays Effective Band Date', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(4)} > :nth-child(1)`).should(
            'contain',
            'Effective Band Date:'
          );
          cy.get(`${rowSelector(4)} > :nth-child(1)`)
            .siblings()
            .should('contain', '18/07/2019')
            .and('have.length', 1);
        });

        it('Displays Bedroom requirements', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(5)} > :nth-child(1)`).should(
            'contain',
            'Bedroom requirements:'
          );
          cy.get(`${rowSelector(5)} > :nth-child(1)`)
            .siblings()
            .should('contain', '2')
            .and('have.length', 1);
        });
      });
    });
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
    const tablePath = '.details__left-column > :nth-child(5) > table > tbody';
    const systemIdRowSelector = rowNumber => {
      return `${tablePath} > :nth-child(${rowNumber})`;
    };

    it('Displays application reference', () => {
      cy.get(systemIdRowSelector(1))
        .should('contain', 'Application ref:')
        .and('contain', 'DIR0148754');
    });

    it('Displays jigsaw customer no', () => {
      cy.get(systemIdRowSelector(2))
        .should('contain', 'Jigsaw customer no:')
        .and('contain', '263272');
    });

    it('Displays jigsaw case ref', () => {
      cy.get(systemIdRowSelector(3))
        .should('contain', 'Jigsaw case ref:')
        .and('contain', '270305');
    });

    it('Displays council tax ref', () => {
      cy.get(systemIdRowSelector(4))
        .should('contain', 'Council tax ref:')
        .and('contain', '333333399')
        .and('contain', '399999999');
    });

    it('Displays benefits ref', () => {
      cy.get(systemIdRowSelector(5))
        .should('contain', 'Benefits ref:')
        .and('contain', '60940760')
        .and('contain', '60940888');
    });

    it('Displays UHW contact ref', () => {
      cy.get(systemIdRowSelector(6))
        .should('contain', 'UHW contact ref:')
        .and('contain', '334351');
    });

    it('Displays Household ref', () => {
      cy.get(systemIdRowSelector(7))
        .should('contain', 'Household ref:')
        .and('contain', '0122132');
    });

    it('Displays Tenancy ref', () => {
      cy.get(systemIdRowSelector(8))
        .should('contain', 'Tenancy ref:')
        .and('contain', '0122132/01');
    });

    it('Displays Payment ref', () => {
      cy.get(systemIdRowSelector(9))
        .should('contain', 'Payment ref:')
        .and('contain', '12345');
    });
  });

  describe('Activity', () => {
    describe('Search', () => {
      it('can search by note title', () => {
        const testNoteTitle = 'Case Note';

        cy.get('#searchActivity')
          .scrollIntoView()
          .should('be.visible')
          .type(testNoteTitle, { force: true });

        cy.get('.activity > table > tbody > tr > :nth-child(2)')
          .should('have.length', '4')
          .each($el => cy.wrap($el).should('contain', testNoteTitle));
      });

      it('can search by note text', () => {
        const testNoteText = 'Change in Circs ICL';

        cy.get('#searchActivity')
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
