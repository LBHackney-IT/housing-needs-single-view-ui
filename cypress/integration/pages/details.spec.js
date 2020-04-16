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
        cy.get(pathToTd)
          .should('contain', 'Stage:')
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
        cy.get(pathToMoreDetails)
          .should('contain', 'More details')
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

    describe('Council Tenancy', () => {
      const pathToMoreDetails =
        '#quickAccess > div > div:nth-child(3) > div > ul > li > a';
      const pathToPopUpBox =
        '#quickAccess > div > div:nth-child(3) > div > ul > li > div.popup-overlay > div > div > div > div';
      const rowSelectorPopUpBox = rowNumber => {
        return `${pathToPopUpBox} > table > tbody > :nth-child(${rowNumber})`;
      };
      it('Displays Council Tenancy', () => {
        cy.get('#quickAccess > div > div:nth-child(3) > h3').should(
          'contain',
          'Council Tenancy'
        );
      });

      it('Displays current tenancy', () => {
        cy.get('#quickAccess > div > div:nth-child(3) > p');
      });

      it('Can click more details and display pop up box with previous tenancies', () => {
        cy.get(pathToMoreDetails)
          .should('contain', 'More details')
          .scrollIntoView()
          .click({ force: true });
        cy.get(pathToPopUpBox).should('contain', 'Previous Tenancies');
      });

      describe('Council Tenancy More details', () => {
        it('Displays Address', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(1)} > :nth-child(1)`).should(
            'contain',
            'Address:'
          );
          cy.get(`${rowSelectorPopUpBox(1)} > :nth-child(1)`)
            .siblings()
            .should('contain', '001 Cemetery LaneForest GateLondonE7 8LS')
            .and('have.length', 1);
        });

        it('Displays Start Date', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(2)} > :nth-child(1)`)
            .should('contain', 'Start Date:')
            .siblings()
            .should('contain', '18/07/2019')
            .and('have.length', 1);
        });

        it('Displays End Date', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(3)} > :nth-child(1)`)
            .should('contain', 'End Date:')
            .siblings()
            .should('contain', '01/01/1900')
            .and('have.length', 1);
        });

        it('Displays Tenure', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(4)} > :nth-child(1)`)
            .should('contain', 'Tenure:')
            .siblings()
            .should('contain', 'Temp Annex')
            .and('have.length', 1);
        });

        it('Displays Property Ref', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(5)} > :nth-child(1)`)
            .should('contain', 'Property Ref:')
            .siblings()
            .should('contain', '10090323559')
            .and('have.length', 1);
        });

        it('Displays Rent', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(6)} > :nth-child(1)`)
            .should('contain', 'Rent:')
            .siblings()
            .should('contain', '£216.54')
            .and('have.length', 1);
        });

        it('Displays Balance', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(7)} > :nth-child(1)`)
            .should('contain', 'Balance:')
            .siblings()
            .should('contain', '£2.00')
            .and('have.length', 1);
        });
      });
    });

    describe('Benefits', () => {
      const pathToTbody =
        '#quickAccess > div > div:nth-child(4) > table > tbody';
      const pathToMoreDetails =
        '#quickAccess > div > div:nth-child(4) > div > ul > li > a';
      const pathToPopUpBox =
        '#quickAccess > div > div:nth-child(4) > div > ul > li > div.popup-overlay > div > div > div';
      const pathToDetailsTbody =
        '#quickAccess > div > div:nth-child(4) > div > ul > li > div.popup-overlay > div > div > div > table > tbody > tr > td:nth-child(2) > table > tbody';
      const rowSelectorTr = rowNumber => {
        return `${pathToTbody} > :nth-child(${rowNumber})`;
      };
      const rowSelectorPopUpBox = rowNumber => {
        return `${pathToDetailsTbody} > :nth-child(${rowNumber})`;
      };

      it('Displays Benefits', () => {
        cy.get('#quickAccess > div > div:nth-child(4) > h3');
      });

      it('Displays Live Claim', () => {
        const pathToTd = rowSelectorTr(1);
        cy.get(pathToTd)
          .should('contain', 'Live claim:')
          .siblings()
          .should('contain', 'Yes');
      });

      it('Displays Universal Credit', () => {
        const pathToTd = rowSelectorTr(2);
        cy.get(pathToTd)
          .should('contain', 'Universal Credit:')
          .siblings()
          .should('contain', 'Yes');
      });

      it('Can click more details and display pop up box with Benefits Information', () => {
        cy.get(pathToMoreDetails)
          .should('contain', 'More details')
          .scrollIntoView()
          .click({ force: true });
        cy.get(pathToPopUpBox).should('contain', 'Benefits information');
      });

      describe('Benefits More details', () => {
        it('Displays Income', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(pathToPopUpBox).should('contain', 'Income');
        });

        it('Displays Child Benefit', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(1)} > :nth-child(1)`)
            .should('contain', 'Child Benefit')
            .next()
            .should('contain', '1 x')
            .next()
            .should('contain', 'Weekly')
            .next()
            .should('contain', '£34.40');
        });

        it('Displays Miscellaneous Income', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(2)} > :nth-child(1)`)
            .should('contain', 'Miscellaneous Income')
            .next()
            .should('contain', '')
            .next()
            .should('contain', '')
            .next()
            .should('contain', '£0.00');
        });

        it('Displays Universal Credit Award', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(3)} > :nth-child(1)`)
            .should('contain', 'Universal Credit Award')
            .next()
            .should('contain', '1 x')
            .next()
            .should('contain', 'Monthly')
            .next()
            .should('contain', '£826.57');
        });
      });
    });

    describe('Council Tax', () => {
      const pathToMoreDetails =
        '#quickAccess > div > div:nth-child(5) > div > ul > li > a';
      const pathToPopUpBox =
        '#quickAccess > div > div:nth-child(5) > div > ul > li > div.popup-overlay > div > div > div';
      const pathToDetailsTbody =
        '#quickAccess > div > div:nth-child(5) > div > ul > li > div.popup-overlay > div > div > div > table > tbody';
      const pathToSecondTbody =
        '#quickAccess > div > div:nth-child(5) > div > ul > li > div.popup-overlay > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > table > tbody';
      const rowSelectorPopUpBox = rowNumber => {
        return `${pathToDetailsTbody} > :nth-child(${rowNumber})`;
      };
      const rowSelectorSecondTbody = rowNumber => {
        return `${pathToSecondTbody} > :nth-child(${rowNumber})`;
      };
      it('Displays Council Tax', () => {
        cy.get('#quickAccess > div > div:nth-child(5) > h3');
      });

      it('Displays Balance', () => {
        const pathToTd =
          '#quickAccess > div > div:nth-child(5) > table > tbody > tr > td:nth-child(1)';
        cy.get(pathToTd)
          .should('contain', 'Balance:')
          .siblings()
          .should('contain', '£55.55')
          .and('have.length', 1);
      });

      it('Can click more details and display pop up box with Council tax information', () => {
        cy.get(pathToMoreDetails)
          .should('contain', 'More details')
          .scrollIntoView()
          .click({ force: true });
        cy.get(pathToPopUpBox).should('contain', 'Council tax information');
      });

      describe('Council Tax More details', () => {
        it('Displays Council tax ref', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(1)} > :nth-child(1)`)
            .should('contain', 'Council tax ref')
            .siblings()
            .should('contain', '333333399399999999')
            .and('have.length', 1);
        });

        it('Displays Account balance', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(2)} > :nth-child(1)`)
            .should('contain', 'Account balance')
            .siblings()
            .should('contain', '£55.55')
            .and('have.length', 1);
        });

        it('Displays Payment method', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorPopUpBox(3)} > :nth-child(1)`)
            .should('contain', 'Payment method')
            .siblings()
            .should('contain', 'CASH MONTHLY')
            .and('have.length', 1);
        });

        it('Displays Recent transactions', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(pathToPopUpBox).should('contain', 'Recent transactions');
        });

        it('Displays transaction', () => {
          cy.get(pathToMoreDetails)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelectorSecondTbody(1)} > :nth-child(1)`)
            .should('contain', '08/01/2010')
            .next()
            .should('contain', 'SOME COSTS')
            .next()
            .should('contain', '-£2.50');
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
        cy.get(pathToTd)
          .should('contain', 'Bidding no:')
          .siblings()
          .should('contain', '2156200');
      });

      it('Displays Band', () => {
        const pathToTd =
          '#housingRegister > table > tbody > tr:nth-child(2) > td:nth-child(1)';
        cy.get(pathToTd)
          .should('contain', 'Band:')
          .siblings()
          .should('contain', 'Homeless')
          .and('have.length', 1);
      });

      it('Can click more details and display pop up box with housing register information', () => {
        const pathToPopUpBox =
          '#housingRegister > div > ul > li > div.popup-overlay > div > div > div';
        cy.get(pathToMoreDetailsAnchor)
          .should('contain', 'More details')
          .and('have.attr', 'href');
        cy.get(pathToMoreDetailsAnchor)
          .scrollIntoView()
          .click({ force: true });
        cy.get(pathToPopUpBox).should(
          'contain',
          'Housing Register Information'
        );
      });

      describe('Housing Register More Details', () => {
        const pathToHousingRegisterInformationTable =
          '#housingRegister > div > ul > li > div.popup-overlay > div > div > div > table > tbody';
        const rowSelector = rowNumber => {
          return `${pathToHousingRegisterInformationTable} > :nth-child(${rowNumber})`;
        };
        it('Displays Application Ref', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(1)} > :nth-child(1)`)
            .should('contain', 'Application Ref:')
            .siblings()
            .should('contain', 'DIR0148754')
            .and('have.length', 1);
        });

        it('Displays Application Status', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(2)} > :nth-child(1)`)
            .should('contain', 'Application status:')
            .siblings()
            .should('contain', 'Active')
            .and('have.length', 1);
        });

        it('Displays Bidding no', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(3)} > :nth-child(1)`)
            .should('contain', 'Bidding no:')
            .siblings()
            .should('contain', '2156200')
            .and('have.length', 1);
        });

        it('Displays Band', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(4)} > :nth-child(1)`)
            .should('contain', 'Band:')
            .siblings()
            .should('contain', 'Homeless')
            .and('have.length', 1);
        });

        it('Displays Effective Band Date', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(5)} > :nth-child(1)`)
            .should('contain', 'Effective Band Date:')
            .siblings()
            .should('contain', '18/07/2019')
            .and('have.length', 1);
        });

        it('Displays Bedroom requirements', () => {
          cy.get(pathToMoreDetailsAnchor)
            .scrollIntoView()
            .click({ force: true });
          cy.get(`${rowSelector(6)} > :nth-child(1)`)
            .should('contain', 'Bedroom requirements:')
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

      it('Requests correct COMINO doc', () => {
        cy.get('.activity > table > tbody > tr > td > strong > p')
          .first()
          .scrollIntoView()
          .find('a')
          .click({ force: true });

        cy.get('iframe')
          .should('have.attr', 'title', 'document')
          .and('have.attr', 'src')
          .and('match', /hncomino\/documents\/40564358\/view/);
      });

      it('Requests correct UHW doc', () => {
        cy.get('.activity > table > tbody > tr > td > strong > p')
          .eq(1)
          .scrollIntoView()
          .find('a')
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
          .find('td:nth-child(2)')
          .click({ force: true })
          .should('not.contain', '...')
          .and('not.contain', 'Read more')
          .and('not.contain', 'Read less');
      });
    });
  });
});
