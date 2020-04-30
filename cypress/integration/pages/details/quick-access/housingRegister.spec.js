describe('Housing Register', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  const pathToMoreDetailsAnchor = '#housingRegister > div > ul > li > button';

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
    cy.get(pathToPopUpBox).should('contain', 'Housing Register Information');
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
