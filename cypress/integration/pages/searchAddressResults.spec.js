describe('Results Page', () => {
  beforeEach(() => {
    cy.logInAsHousingNeedsOfficer(true);
  });

  describe('Search', () => {
    it('Shows title and the searched address', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get('#main-content > div > h1').should('contain', 'Search by address');
      cy.get('#main-content > div > h2').should('contain', '1 hill');
    });

    it('Shows option for records per page', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get('#items-per-page').should('contain', '25 items');
    });

    it('Shows the address', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get('[data-testid=address-row-0] > td:nth-child(1)').should(
        'contain',
        '1 acacia avenue'
      );
    });

    it('Shows the post code', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get('[data-testid=address-row-0] > td:nth-child(2)').should(
        'contain',
        'A1 2BC'
      );
    });

    it('Shows the name', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get(
        '[data-testid=address-row-0] > td:nth-child(3) > p:nth-child(1)'
      ).should('contain', 'Ms Elena Thomson');
    });

    it('Shows the date of birth', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get(
        '[data-testid=address-row-0] > td:nth-child(4) > p:nth-child(1)'
      ).should('contain', '03/01/1954');
    });

    it('Shows the tenancy type', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get('[data-testid=address-row-0] > td:nth-child(5)').should(
        'contain',
        'Secure'
      );
    });

    it('Shows the status', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get('[data-testid=address-row-0] > td:nth-child(6)').should(
        'contain',
        'Terminated'
      );
    });

    it('Shows the addresses sorted', () => {
      cy.visit(
        'http://localhost:3001/tenancies?address=1%20hill&former_tenancies=true'
      );
      cy.get(`[data-testid=address-row-0]`).should(
        'contain',
        '1 acacia avenue'
      );
      cy.get(`[data-testid=address-row-1]`).should(
        'contain',
        '2 acacia avenue'
      );
      cy.get(`[data-testid=address-row-2]`).should(
        'contain',
        '10 top of the hill'
      );
    });
  });
});
