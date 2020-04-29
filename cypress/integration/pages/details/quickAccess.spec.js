describe('Quick Access', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('Case Information', () => {
    const pathToUl = '#quickAccess > div > div:nth-child(1) > div > ul';
    const rowSelectorUl = rowNumber => {
      return `${pathToUl} > :nth-child(${rowNumber})`;
    };
    const pathToMoreDetails = `${rowSelectorUl(3)} > button`;
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
        '#quickAccess > div > div:nth-child(1) > table > tbody > tr > th:nth-child(1)';
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
      '#quickAccess > div > div:nth-child(3) > div > ul > li > button';
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
      '#quickAccess > div > div:nth-child(4) > div > ul > li > button';
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
      '#quickAccess > div > div:nth-child(5) > div > ul > li > button';
    const pathToPopUpBox =
      '#quickAccess > div > div:nth-child(5) > div > ul > li > div.popup-overlay > div > div > div';
    const pathToDetailsTbody =
      '#quickAccess > div > div:nth-child(5) > div > ul > li > div.popup-overlay > div > div > div > table > tbody';
    const pathToSecondTbody =
      '#quickAccess > div > div:nth-child(5) > div > ul > li > div.popup-overlay > div > div > div > table > tbody > td:nth-child(4) > th:nth-child(2) > table > tbody';
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
        '#quickAccess > div > div:nth-child(5) > table > tbody > tr > th:nth-child(1)';
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
        cy.get('.content > table > tbody')
          .should('contain', '08/01/2010')
          .and('contain', 'SOME COSTS')
          .and('contain', '-£2.50');
      });
    });
  });

  describe('Housing Register', () => {
    const pathToMoreDetailsAnchor =
      '#housingRegister > div > ul > li > button';

    it('Displays Housing Register', () => {
      cy.get('#quickAccess > div > #housingRegister').should(
        'contain',
        'Housing Register'
      );
    });

    it('Displays Bidding no', () => {
      const pathToTd =
        '#housingRegister > table > tbody > tr:nth-child(1) > th:nth-child(1)';
      cy.get(pathToTd)
        .should('contain', 'Bidding no:')
        .siblings()
        .should('contain', '2156200');
    });

    it('Displays Band', () => {
      const pathToTd =
        '#housingRegister > table > tbody > tr:nth-child(2) > th:nth-child(1)';
      cy.get(pathToTd)
        .should('contain', 'Band:')
        .siblings()
        .should('contain', 'Homeless')
        .and('have.length', 1);
    });

    it('Can click more details and display pop up box with housing register information', () => {
      const pathToPopUpBox =
        '#housingRegister > div > ul > li > div.popup-overlay > div > div > div';
      cy.get(pathToMoreDetailsAnchor).should('contain', 'More details');
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
