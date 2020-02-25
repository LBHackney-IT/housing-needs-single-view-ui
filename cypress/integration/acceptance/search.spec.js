/// <reference types="cypress" />
import jwt from 'jsonwebtoken';
import { FakeServer } from 'simple-fake-server';

describe('Search', () => {
  let fakeServer;
  const body = {
    grouped: [],
    ungrouped: [],
    connected: [
      {
        id: 10,
        firstName: 'John',
        lastName: 'Smith',
        dob: null,
        nino: null,
        address: '',
        source: 'SINGLEVIEW',
        links: [
          {
            id: 26,
            customer_id: 10,
            system_id: 5,
            remote_id: '111111/1',
            first_name: 'John',
            last_name: 'Smith',
            address: '33 address, Address, Stamford Hill, LAMAMA, ZO6 5FE',
            nino: 'SC1234565',
            dob: '1946-02-03T00:00:00.000Z',
            created_at: '2020-02-10T16:32:28.405Z',
            updated_at: '2020-02-10T16:32:28.405Z',
            system_name: 'ACADEMY-Benefits'
          }
        ]
      }
    ]
  };

  beforeEach(async () => {
    fakeServer = new FakeServer(8080);
    fakeServer.start();
    //const url = `http://localdev.hackney.gov.uk:3000/customers?firstName=John&lastName=Smith`;
    //cy.server();
    //cy.route(url, 'response');
    // await nock('http://localdev.hackney.gov.uk:3000')
    //   .get('/customers')
    //   .query({ firstName: 'John', lastName: 'Smith' })
    //   .reply(200, 'domain matched');
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

  it('makes a fake request', () => {
    fakeServer.http
      .get()
      .to('/customers?firstName=John&lastName=Smith')
      .willReturn(body);
    setHackneyCookie(true);
    cy.visit('http://localhost:3001');
    cy.get('.govuk-input:first').type('John');
    cy.get('.govuk-input:last')
      .type('Smith')
      .type('{enter}');
    cy.contains('Customers with matching details');
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

  // it('opens the page', () => {
  //   cy.visit('http://localhost:3001');
  //   const Http = new XMLHttpRequest();
  //   const url = 'http://localdev.hackney.gov.uk:3000/customers';
  //   Http.open('GET', url);
  //   Http.send();

  //   Http.onreadystatechange = e => {
  //     console.log(Http.responseText);
  //   };
  // });

  //   it('Logs into Single View with a valid token', () => {
  //     setHackneyCookie(true);
  //     cy.visit('http://localhost:3001');
  //     cy.contains('Welcome to Single View');
  //   });

  //   it('Does not log into Single View with an invalid token', () => {
  //     setHackneyCookie(false);
  //     cy.visit('http://localhost:3001');
  //     cy.contains('Please log in');
  //   });

  // it('Logs into Single View with a valid token', () => {
  //   // setHackneyCookie(true);
  //   cy.visit('http://localhost:3001');
  //   cy.get('.govuk-input:first').type('John');
  //   cy.get('.govuk-input:last')
  //     .type('Smith')
  //     .type('{enter}');
  //   cy.contains('Customers with matching details');
  // });
});
