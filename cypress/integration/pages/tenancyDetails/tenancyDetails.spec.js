/// <reference types="cypress" />
describe('Tenancy Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/tenancies/abc');
  });

  describe('Tenancy details', () => {
    
    it('Displays Tenancy Reference', () => {
      cy.get('[data-test="tenancy-reference]')
        .should('contain', 'Tenancy reference:')
        .and('contain', '123456/1');
    });
  });

  // describe('Shared plans', () => {
  //   const selector = '[data-testid="shared-plan-quickview"]';

  //   it('does not display the Shared Plans quick view box if user is not in valid group', () => {
  //     cy.get(selector).should('not.exist');
  //   });

  //   it('displays the Shared Plans quick view box if user is in valid group', () => {
  //     cy.logInWithSharedPlanGroup(true);
  //     cy.visit('http://localhost:3001/customers/5/view');
  //     cy.get(selector).should('exist');
  //     cy.get(`${selector} ul`).should('not.be.empty');
  //   });
  // });
});
