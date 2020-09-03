/// <reference types="cypress" />
describe('Tenancy Details Page', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/tenancies/123');
  });

  describe('Tenancy details', () => {
    it('Displays Tenancy Address', () => {
      cy.get('[data-test="tenancy-address"]').should(
        'contain',
        '12 Hill Street N16 5TT'
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
        .and('contain', '13/06/1992');
    });

    it('Displays Tenancy Reference', () => {
      cy.get('[data-test="tenancy-reference"]')
        .should('contain', 'Tenancy reference:')
        .and('contain', '123456/1');
    });

    it('Displays Residents Header', () => {
      cy.get('[data-test="tenant-header"]').should('contain', 'Residents');
    });

    it('Displays Resident Full Name', () => {
      cy.get('[data-test="tenant-fullname-link"]').should(
        'contain',
        'Mrs Joan Fisher'
      );
    });

    it('Displays Resident Date Of Birth', () => {
      cy.get('[data-test="tenant-dob"]').should('contain', 'Date of birth:');
    });

    it('Displays Resident Mobile Number', () => {
      cy.get('[data-test="tenant-mobileNum"]').should('contain', 'Mobile');
    });

    it('Displays Resident Home Number', () => {
      cy.get('[data-test="tenant-homeNum"]')
        .should('contain', 'Home')
        .and('contain', '02088881234');
    });

    it('Displays Resident Work Number', () => {
      cy.get('[data-test="tenant-workNum"]')
        .should('contain', 'Work:')
        .and('contain', '02077775678');
    });

    it('Displays Resident Email', () => {
      cy.get('[data-test="tenant-email"]')
        .should('contain', 'Email:')
        .and('contain', 'sallyfisher90@email.com');
    });

    it('Displays Area and Patch Heading', () => {
      cy.get('[data-test="area-patch-heading"]').should(
        'contain',
        'Area and Patch'
      );
    });

    it('Displays Area and Patch Tenancy Content', () => {
      cy.get('[data-test="area-patch-content"]')
        .should('contain', 'Income Collection Patch:')
        .and('contain', '105')
    });
  });
});
