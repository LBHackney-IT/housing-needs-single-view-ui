describe('Read more', () => {
  beforeEach(() => {
    cy.logInAsHousingNeedsOfficer(true);
    cy.visit('http://localhost:3001/customers/5');
  });

  it('Displays read more button if note is longer than 128 characters', () => {
    cy.get('.activity > table > tbody > tr:nth-child(4) > td:nth-child(2)')
      .should('contain', '...')
      .and('contain', 'Read more')
      .and('not.contain', 'Read less');
    cy.get(
      '.activity > table > tbody > tr:nth-child(4) > td:nth-child(2) > span'
    )
      .click({ force: true })
      .should('contain', 'Read less')
      .and('not.contain', 'Read more');

    cy.get('.activity > table > tbody > tr:nth-child(4) > td:nth-child(2)')
      .first()
      .scrollIntoView()
      .find('span')
      .click({ force: true })
      .should('contain', 'Read more')
      .and('not.contain', 'Read less');
  });

  it('Does not display read more/less button if note is less than 128 characters', () => {
    cy.get('.activity > table > tbody > tr:nth-child(5)')
      .first()
      .scrollIntoView()
      .find('td:nth-child(3)')
      .click({ force: true })
      .should('not.contain', '...')
      .and('not.contain', 'Read more')
      .and('not.contain', 'Read less');
  });
});
