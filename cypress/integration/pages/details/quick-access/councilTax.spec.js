describe('Council Tax', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

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
