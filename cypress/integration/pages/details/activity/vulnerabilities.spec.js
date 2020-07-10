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
      'http://localhost:3001/snapshots/js783hdi'
    );
  });

  it('Does not display snapshot in the activity feed if customer has no snapshots', () => {
    cy.visit('http://localhost:3001/customers/5/view#things-to-note');

    cy.get('.activity > table > tbody').should(
      'not.contain',
      'Vulnerability snapshot'
    );
  });

  it('Displays orange and blue dots next to the title if a vulnerability snapshot has an asset and vulnerability', () => {
    cy.visit('http://localhost:3001/customers/1/view#things-to-note');

    cy.get('[data-testid=assets-dot]')
      .eq(0)
      .should('be.visible');
    cy.get('[data-testid=vulnerabilities-dot]')
      .eq(0)
      .should('be.visible');
  });

  it('Displays orange dot next to the title if a vulnerability snapshot has an asset', () => {
    cy.visit('http://localhost:3001/customers/1/view#things-to-note');

    cy.get('[data-testid=assets-dot]')
      .eq(2)
      .should('be.visible');
  });

  it('Displays blue dot next to the title if a vulnerability snapshot has a vulnerability', () => {
    cy.visit('http://localhost:3001/customers/1/view#things-to-note');

    cy.get('[data-testid=vulnerabilities-dot]')
      .eq(2)
      .should('be.visible');
  });
});
