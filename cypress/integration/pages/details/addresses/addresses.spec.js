describe('Addresses', () => {
  beforeEach(() => {
    cy.logInAsHousingNeedsOfficer(true);
    cy.visit('http://localhost:3001/customers/10');
  });

  describe('Where is this from?', () => {
    const whereFromSummary = '[data-testid="where-from-summary-0"]';
    const whereFromDetails = '[data-testid="where-from-details-0"]';

    it('shows where the address came from on click', () => {
      cy.get(whereFromDetails).should('not.contain', 'JIGSAW');
      cy.get(whereFromSummary).click({ force: true });
      cy.get(whereFromDetails).should('contain', 'JIGSAW');
    });
  });
});
