/// <reference types="cypress" />
describe('Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('System IDs', () => {
    it('Displays application reference', () => {
      cy.get('[data-testid=system-ids-app-ref]')
        .should('contain', 'Application ref:')
        .and('contain', 'DIR0148754');
    });

    it('Displays jigsaw customer no', () => {
      cy.get('[data-testid=system-ids-jigsaw-customer]')
        .should('contain', 'Jigsaw customer no:')
        .and('contain', '263272');
    });

    it('Displays jigsaw case ref', () => {
      cy.get('[data-testid=system-ids-jigsaw-case]')
        .should('contain', 'Jigsaw case ref:')
        .and('contain', '270305');
    });

    it('Displays council tax ref', () => {
      cy.get('[data-testid=system-ids-council-tax]')
        .should('contain', 'Council tax ref:')
        .and('contain', '333333399')
        .and('contain', '399999999');
    });

    it('Displays benefits ref', () => {
      cy.get('[data-testid=system-ids-benefits]')
        .should('contain', 'Benefits ref:')
        .and('contain', '60940760')
        .and('contain', '60940888');
    });

    it('Displays UHW contact ref', () => {
      cy.get('[data-testid=system-ids-uhw]')
        .should('contain', 'UHW contact ref:')
        .and('contain', '334351');
    });

    it('Displays Household ref', () => {
      cy.get('[data-testid=system-ids-household]')
        .should('contain', 'Household ref:')
        .and('contain', '0122132');
    });

    it('Displays Tenancy ref', () => {
      cy.get('[data-testid=system-ids-tenancy]')
        .should('contain', 'Tenancy ref:')
        .and('contain', '0122132/01');
    });

    it('Displays Payment ref', () => {
      cy.get('[data-testid=system-ids-payment]')
        .should('contain', 'Payment ref:')
        .and('contain', '12345');
    });
  });

  describe('Shared plans', () => {
    const selector = '[data-testid="shared-plan-quickview"]';

    it('does not display the Shared Plans quick view box if user is not in valid group', () => {
      cy.get(selector).should('not.exist');
    });

    it('displays the Shared Plans quick view box if user is in valid group', () => {
      cy.setSharedPlanCookie(true);
      cy.visit('http://localhost:3001/customers/5/view');
      cy.get(selector).should('exist');
      cy.get(`${selector} ul`).should('not.be.empty');
    });
  });

  describe('Snapshot', () => {
    const vulnerabilities = '[data-testid="snapshot-vulnerabilities"]';
    const assets = '[data-testid="snapshot-assets"]';

    it('displays the things to note container', () => {
      cy.visit('http://localhost:3001/customers/10/view');
      cy.get('[data-testid="things-to-note"]').should('exist');
    });

    it('hides the things to note container if not in valid group', () => {
      cy.setHackneyCookie(false);
      cy.visit('http://localhost:3001/customers/10/view');
      cy.get('[data-testid="things-to-note"]').should('not.exist');
    });

    it('displays the latest snapshot', () => {
      cy.visit('http://localhost:3001/customers/10/view');
      cy.get(vulnerabilities).should('exist');
      cy.get(assets).should('exist');
    });

    it('does not display latest snapshot if there are no snapshots', () => {
      cy.visit('http://localhost:3001/customers/1/view');
      cy.get(vulnerabilities).should('not.exist');
      cy.get(assets).should('not.exist');
    });

    it('redirects to the correct url after creating a new snapshot', () => {
      cy.visit('http://localhost:3001/customers/10/view');
      cy.get(vulnerabilities).should('exist');

      cy.get('[data-testid=add-vulnerability-snapshot-button]').click({
        force: true
      });
      cy.url().should('eq', 'http://localhost:3001/snapshots/10');
    });
  });
});
