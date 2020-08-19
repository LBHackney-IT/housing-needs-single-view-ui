/// <reference types="cypress" />
describe('Tenancy Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/tenancies/abc');
  });

  describe('Tenancy details', () => {
    it('Displays Tenancy Address', () => {
      cy.get('[data-test="tenancy-address"]').should(
        'contain',
        '1 Hill Street N16 5TT'
      );
    });

    it('Displays Tenancy Heading', () => {
      cy.get('[data-test="tenancy-heading"]').should('contain', 'Tenancy');
    });

    it('Displays Tenancy Type', () => {
      cy.get('[data-test="tenancy-type"]')
        .should('contain', 'Tenancy type:')
        .and('contain', 'Secure');
    });

    it('Displays Tenancy Start Date', () => {
      cy.get('[data-test="tenancy-start-date"]')
        .should('contain', 'Tenancy start date:')
        .and('contain', '1992-06-13');
    });

    it('Displays Tenancy Reference', () => {
      cy.get('[data-test="tenancy-reference"]')
        .should('contain', 'Tenancy reference:')
        .and('contain', '123456/1');
    });

    it('Displays Residents Header', () => {
      cy.get('[data-test="residents-header"]').should('contain', 'Residents');
    });

    it('Displays Resident Full Name', () => {
      cy.get('[data-test="residents-fullName"]').should(
        'contain',
        'Mrs Joan Fisher'
      );
    });

    it('Displays Resident Date Of Birth', () => {
      cy.get('[data-test="residents-dob"]').should('contain', 'Date of birth:');
    });

    it('Displays Resident Mobile Number', () => {
      cy.get('[data-test="residents-mobileNum"]').should('contain', 'Mobile');
    });

    it('Displays Resident Home Number', () => {
      cy.get('[data-test="residents-homeNum"]')
        .should('contain', 'Home')
        .and('contain', '02088881234');
    });

    it('Displays Resident Work Number', () => {
      cy.get('[data-test="residents-workNum"]')
        .should('contain', 'Work:')
        .and('contain', '02077775678');
    });

    it('Displays Resident Email', () => {
      cy.get('[data-test="residents-email"]')
        .should('contain', 'Email:')
        .and('contain', 'sallyfisher90@email.com');
    });

    it('Displays Area and Patch Heading', () => {
      cy.get('[data-test="area-patch-tenancy"]').should('contain', 'Tenancy:');
    });

    it('Displays Area Patch Tenancy', () => {
      cy.get('[data-test="area-patch-list"]')
        .should('contain', 'Homerton 1')
        .and('contain', 'HN10')
        .and('contain', 'Tony James');
    });
  });
});
