describe('Case Information', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

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
