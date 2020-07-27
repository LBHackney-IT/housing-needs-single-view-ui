/// <reference types="cypress" />
describe('Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  describe('System IDs', () => {
    const tablePath = '.details__left-column > :nth-child(5) > table > tbody';
    const systemIdRowSelector = rowNumber => {
      return `${tablePath} > :nth-child(${rowNumber})`;
    };

    it('Displays application reference', () => {
      cy.get(systemIdRowSelector(1))
        .should('contain', 'Application ref:')
        .and('contain', 'DIR0148754');
    });

    it('Displays jigsaw customer no', () => {
      cy.get(systemIdRowSelector(2))
        .should('contain', 'Jigsaw customer no:')
        .and('contain', '263272');
    });

    it('Displays jigsaw case ref', () => {
      cy.get(systemIdRowSelector(3))
        .should('contain', 'Jigsaw case ref:')
        .and('contain', '270305');
    });

    it('Displays council tax ref', () => {
      cy.get(systemIdRowSelector(4))
        .should('contain', 'Council tax ref:')
        .and('contain', '333333399')
        .and('contain', '399999999');
    });

    it('Displays benefits ref', () => {
      cy.get(systemIdRowSelector(5))
        .should('contain', 'Benefits ref:')
        .and('contain', '60940760')
        .and('contain', '60940888');
    });

    it('Displays UHW contact ref', () => {
      cy.get(systemIdRowSelector(6))
        .should('contain', 'UHW contact ref:')
        .and('contain', '334351');
    });

    it('Displays Household ref', () => {
      cy.get(systemIdRowSelector(7))
        .should('contain', 'Household ref:')
        .and('contain', '0122132');
    });

    it('Displays Tenancy ref', () => {
      cy.get(systemIdRowSelector(8))
        .should('contain', 'Tenancy ref:')
        .and('contain', '0122132/01');
    });

    it('Displays Payment ref', () => {
      cy.get(systemIdRowSelector(9))
        .should('contain', 'Payment ref:')
        .and('contain', '12345');
    });
  });

  describe('Shared plans', () => {
    const selector = '[data-testid="shared-plan-quickview"]';

    it('does not display the Shared Plans quick view box if the cookie is not set', () => {
      cy.get(selector).should('not.exist');
    });

    it('can set a shared plan cookie', () => {
      cy.visit('http://localhost:3001/#shared_plan');
      cy.visit('http://localhost:3001/customers/5/view');
      cy.get(selector).should('exist');
    });

    it('displays the Shared Plans quick view box', () => {
      cy.setSharedPlanCookie(true);
      cy.get(selector).should('exist');
    });

    it('displays a list of existing plans', () => {
      cy.get(`${selector} ul`).should('not.be.empty');
    });
  });

  describe('Vulnerability snapshot', () => {
    const vulnerabilities = '[data-testid="snapshot-vulnerabilities"]';
    const assets = '[data-testid="snapshot-assets"]';

    beforeEach(() => {
      cy.visit('http://localhost:3001/#things-to-note');
    });

    it('displays the latest vulnerability snapshot', () => {
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
