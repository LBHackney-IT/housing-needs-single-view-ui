/// <reference types="cypress" />
describe('Tenancy Details Page', () => {
  beforeEach(() => {
    cy.logInAsHousingOfficer(true);
    cy.visit('http://localhost:3001/tenancies/123');
  });

  describe('Tenancy details', () => {
    it('Displays Tenancy Address', () => {
      cy.get('h1').should('contain', '12 Hill Street N16 5TT');
    });

    it('Displays Tenancy Heading', () => {
      cy.get('.tenancyDetails h2').should('contain', 'Tenancy');
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

    it('Displays UPRN', () => {
      cy.get('[data-test="uprn"]')
        .should('contain', 'UPRN:')
        .and('contain', '12345678901');
    });

    it('Displays Residents Header', () => {
      cy.get('#tenant-container h2').should('contain', 'Residents');
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
      cy.get('[data-test="tenant-mobileNum"]')
        .should('contain', 'Mobile')
        .and('contain', '07777123456');
    });

    it('Displays Resident Home Number', () => {
      cy.get('[data-test="tenant-homeNum"]')
        .should('contain', 'Home')
        .and('contain', '02088881234');
    });

    it('Displays Resident Work Number', () => {
      cy.get('[data-test="tenant-workNum"]')
        .should('contain', 'Work:')
        .and('contain', '02012341234');
    });

    it('Displays Resident Email', () => {
      cy.get('[data-test="tenant-email"]')
        .should('contain', 'Email:')
        .and('contain', 'mjf@email.com');
    });

    it('Displays household members', () => {
      cy.get('#household-members')
        .should('contain', 'Miss Sally Fisher')
        .and('contain', 'Dependent child')
        .and('contain', '21/03/1990');
    });

    it('Displays Area and Patch Heading', () => {
      cy.get('.tenancyAreaPatch h2').should('contain', 'Area and Patch');
    });

    it('Displays Area and Patch Tenancy Patch', () => {
      cy.get('[data-test="area-patch-tenancy-patch"]')
        .should('contain', 'Tenancy Patch:')
        .and('contain', 'AB1');
    });

    it('Displays Area and Patch Tenancy Area', () => {
      cy.get('[data-test="area-patch-tenancy-area"]')
        .should('contain', 'Tenancy Area:')
        .and('contain', 'some area');
    });

    it('Displays Area and Patch Officer name', () => {
      cy.get('[data-test="area-patch-officer-name"]')
        .should('contain', 'Officer name:')
        .and('contain', 'The name');
    });

    it('Displays the "Create new process" button', () => {
      cy.get('button#newTenancy').should('contain', 'Create new process');
    });

    it('Does not display the "Create process" button if not in the correct group', () => {
      cy.logInAsHousingNeedsOfficer(true);
      cy.visit('http://localhost:3001/tenancies/123');
      cy.get('button#newTenancy').should('not.exist');
    });

    it('Displays cautionary alerts', () => {
      cy.get('[data-testid=alert-description]').should('have.length', 2);
      cy.get('[data-testid=alert-description]')
        .first()
        .should('contain', 'Physical Abuse or Threat of');
      cy.get('[data-testid=alert-date]')
        .first()
        .should('contain', '2011-11-11');
    });

    it('Displays actions and processes', () => {
      cy.get('[data-testid=task-row-0]')
        .first()
        .should('contain', '04/02/2019: Home visit (In progress)');
    });

    it('Displays rent transactions', () => {
      cy.get('[data-testid=transaction-row-0]').should('contain', '10/11/2014');
    });
  });
});
