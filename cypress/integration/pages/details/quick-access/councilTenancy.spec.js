describe('Council Tenancy', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5');
  });

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
