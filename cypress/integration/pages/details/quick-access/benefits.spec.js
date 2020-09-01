describe('Benefits', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5');
  });

  const pathToTbody = '#quickAccess > div > div:nth-child(4) > table > tbody';
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
