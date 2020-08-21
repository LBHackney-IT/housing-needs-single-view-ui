/// <reference types="cypress" />
describe('Tenancy Details Page', () => {
  
  const tenancy = {
  "tenancy": {
    "id": "123456/1",
    "address": "123 Kosher Avenue",
    "type": "Secure",
    "startDate": "1992-06-13",
    "tenants": [
      {
        "title": "Mrs",
        "forename": "Joan",
        "surname": "Fisher",
        "fullName": "Mrs Joan Fisher",
        "dob": "1970-02-30",
        "mobileNum": "07777123456",
        "homeNum": "02088881234",
        "workNum": "02012345678",
        "email": "mjf@email.com"
      },
      {
        "title": "Miss",
        "forename": "Sally",
        "surname": "Fisher",
        "fullName": "Miss Sally Fisher",
        "dob": "1990-03-21",
        "mobileNum": "07777456789",
        "homeNum": "02088881234",
        "workNum": "02077775678",
        "email": "sallyfisher90@email.com"
      }
    ]
  }
}
  
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
      cy.get('[data-test="tenant-header"]').should('contain', 'Residents');
    });

    it('Displays Resident Full Name', () => {
      cy.get('[data-test="tenant-fullName"]').should(
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
      cy.get('[data-test="area-patch-tenancy"]').should('contain', 'Tenancy:');
    });

    it('Displays Area Patch Tenancy', () => {
      cy.get('[data-test="area-patch-content"]')
        .should('contain', 'Homerton 1')
        .and('contain', 'HN10')
        .and('contain', 'Tony James');
    });
  });
});
