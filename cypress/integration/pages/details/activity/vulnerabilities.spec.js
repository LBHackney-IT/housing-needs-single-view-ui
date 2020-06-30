describe('Vulnerabilities', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
  });

  it('Does not display vulnerability snapshot in the activity feed if the flag is disabled', () => {
    cy.visit('http://localhost:3001/customers/1/view');

    cy.get('.activity > table > tbody').should(
      'not.contain',
      'Vulnerability snapshot'
    );
  });

  it('Displays vulnerability snapshot in the activity feed if the flag is enabled', () => {
    cy.visit('http://localhost:3001/customers/1/view#things-to-note');

    cy.get('.activity > table > tbody > tr:nth-child(2)').should(
      'contain',
      'Vulnerability snapshot'
    );

    cy.get('[data-testid=full-vulnerabilities-snapshot-link]').should(
      'have.attr',
      'href',
      `${Cypress.env('REACT_APP_VULNERABILITIES_URL')}/snapshots/js783hdi`
    );
  });

  it('Does not display snapshot in the activity feed if customer has no snapshots', () => {
    cy.visit('http://localhost:3001/customers/5/view#things-to-note');

    cy.get('.activity > table > tbody').should(
      'not.contain',
      'Vulnerability snapshot'
    );
  });
});
