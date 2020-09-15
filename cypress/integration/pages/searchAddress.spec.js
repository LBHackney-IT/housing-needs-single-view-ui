describe('Results Page', () => {
  beforeEach(() => {
    cy.logInAsHousingNeedsOfficer(true);
  });

  describe('Search', () => {
    it('Has the correct title for the section', () => {
      cy.visit('http://localhost:3001');
      cy.get('#main-content > div > div > h2').should(
        'contain',
        'Search by address for Council tenancies, leaseholders or freeholders'
      );
    });

    it('Has the correct filter options', () => {
      cy.visit('http://localhost:3001');

      cy.get('[data-testid=current-tenants-test]').should(
        'contain',
        'Current tenants'
      );

      cy.get('[data-testid=former-tenants-test]').should(
        'contain',
        'Former tenants'
      );

      cy.get('[data-testid=leaseholders-test]').should(
        'contain',
        'Leaseholders'
      );

      cy.get('[data-testid=freeholders-test]').should('contain', 'Freeholders');
    });

    it('Can search for an address with a filter selected', () => {
      cy.visit('http://localhost:3001');
      cy.get('#current_tenancies').click();
      cy.get('#address')
        .click({ force: true })
        .type('1 Hill');
      cy.get('[data-testid=search-by-address-button-test]').click({
        force: true
      });
    });

    it('Shows an error when a filter is not selected', () => {
      cy.visit('http://localhost:3001');
      cy.get('#address')
        .click({ force: true })
        .type('1 Hill');
      cy.get('[data-testid=search-by-address-button-test]').click({
        force: true
      });
      cy.get('[data-testid=error-test]').should(
        'contain',
        'Please select at least one option and add an address'
      );
    });

    it('Shows an error when the address is not typed in', () => {
      cy.visit('http://localhost:3001');
      cy.get('#current_tenancies').click();
      cy.get('[data-testid=search-by-address-button-test]').click({
        force: true
      });
      cy.get('[data-testid=error-test]').should(
        'contain',
        'Please select at least one option and add an address'
      );
    });
  });
});
