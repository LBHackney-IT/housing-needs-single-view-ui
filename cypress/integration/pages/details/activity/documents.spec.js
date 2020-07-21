describe('Documents', () => {
  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/customers/5/view');
  });

  it('Displays title as a clickable link', () => {
    cy.get('.activity > table > tbody > tr > td > div > strong > button').each(
      $el =>
        cy
          .wrap($el)
          .should('contain', 'Document')
          .and('not.contain', 'Note')
          .and('not.contain', 'Academy')
    );
  });

  it('Requests correct COMINO doc', () => {
    cy.get('.activity > table > tbody > tr > td > div > strong > button')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.get('iframe')
      .should('have.attr', 'title', 'document')
      .and('have.attr', 'src')
      .and('match', /hncomino\/documents\/40564358\/view/);
  });

  it('Requests correct UHW doc', () => {
    cy.get('.activity > table > tbody > tr > td > div > strong > button')
      .eq(1)
      .scrollIntoView()
      .click({ force: true });

    cy.get('iframe')
      .should('have.attr', 'title', 'document')
      .and('have.attr', 'src')
      .and('match', /uhw\/documents\/8355548\/view/);
  });

  it('Requests correct JIGSAW doc', () => {
    cy.get('.activity > table > tbody > tr > td > div > strong > button')
      .eq(-2)
      .should('contain', 'Document');

    cy.get(
      '#main-content > div > div:nth-child(2) > div.details__right-column > div.activity > table > tbody > tr:nth-child(72) > td:nth-child(3) > p:nth-child(2)'
    ).should('contain', 'JIGSAW');
  });
});
