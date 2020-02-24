/// <reference types="cypress" />
import jwt from 'jsonwebtoken';
const nock = require('nock');

describe('Search', () => {
  beforeEach(async () => {
    //const url = `http://localdev.hackney.gov.uk:3000/customers?firstName=John&lastName=Smith`;
    //cy.server();
    //cy.route(url, 'response');

    await nock('http://localdev.hackney.gov.uk:3000')
      .get('/customers')
      //.query({ firstName: 'John', lastName: 'Smith' })
      .reply(200, 'domain matched');

    // const scope = nock('http://localdev.hackney.gov.uk:3000')
    //   .get('/customers?firstName=John&lastName=Smith')
    //   .reply(200, {
    //     license: {
    //       key: 'mit',
    //       name: 'MIT License',
    //       spdx_id: 'MIT',
    //       node_id: 'MDc6TGljZW5zZTEz'
    //     }
    //   });
    // cy.route('/local/', {
    //   id: 'wabalubadubdub'
    // });
  });

  const setHackneyCookie = async isValidGroup => {
    const group = isValidGroup
      ? 'housingneeds-singleview-beta'
      : 'some-other-group';
    const token = jwt.sign({ groups: [group] }, 'a-secure-signature');
    await cy.setCookie('hackneyToken', token, {
      url: 'http://localhost:3001',
      domain: 'localhost'
    });
  };

  it('opens the page', () => {
    cy.visit('http://localhost:3001');
    const Http = new XMLHttpRequest();
    const url = 'http://localdev.hackney.gov.uk:3000/customers';
    Http.open('GET', url);
    Http.send();

    Http.onreadystatechange = e => {
      console.log(Http.responseText);
    };
  });

  it('Logs into Single View with a valid token', () => {
    setHackneyCookie(true);
    cy.visit('http://localhost:3001');
    cy.contains('Welcome to Single View');
  });

  it('Does not log into Single View with an invalid token', () => {
    setHackneyCookie(false);
    cy.visit('http://localhost:3001');
    cy.contains('Please log in');
  });

  it('Logs into Single View with a valid token', () => {
    setHackneyCookie(true);
    cy.visit('http://localhost:3001');
    cy.get('.govuk-input:first').type('John');
    cy.get('.govuk-input:last')
      .type('Smith')
      .type('{enter}');
    cy.contains('Customers with matching details');
  });
});
