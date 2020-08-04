describe('Request documents', () => {
  const requestDocsBtn = '[data-testid="create-document-request-button"]';
  const requestDocsResult = '[data-testid="create-document-request-result"]';
  const requestDocsError = '[data-testid="create-document-request-error"]';

  beforeEach(() => {
    cy.setHackneyCookie(true);
    cy.visit('http://localhost:3001/#request-documents');
  });

  it('displays the request documents button', () => {
    cy.visit('http://localhost:3001/customers/10/view');
    cy.get(requestDocsBtn).should('exist');
  });

  it('creates a document request', () => {
    cy.visit('http://localhost:3001/customers/10/view');
    cy.get(requestDocsBtn).click({ force: true });
    cy.get(requestDocsResult).should('contain', '/requests/my-new-request');
  });

  it('shows an error when request fails', () => {
    cy.visit('http://localhost:3001/customers/99/view');
    cy.get(requestDocsBtn).click({ force: true });
    cy.get(requestDocsError).should(
      'contain',
      'Error creating document request url'
    );
  });
});
