// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import jwt from 'jsonwebtoken';

const logInWithGroups = groups => {
  if (typeof groups.length === 'undefined') groups = [groups];
  const token = jwt.sign({ groups }, 'a-secure-signature');
  cy.setCookie('hackneyToken', token, {
    url: 'http://localhost:3001',
    domain: 'localhost'
  });
};

const setHackneyCookie = isValidGroup => {
  const group = isValidGroup
    ? 'housingneeds-singleview-beta'
    : 'some-other-group';
  logInWithGroups([group]);
};

const logInWithSharedPlanGroup = isValidGroup => {
  const groups = isValidGroup
    ? ['shared-plan-singleview', 'housingneeds-singleview-beta']
    : ['housingneeds-singleview-beta'];
  logInWithGroups(groups);
};

const logInAsHousingOfficer = manager => {
  const groups = manager
    ? ['area-housing-manager-dev']
    : ['housing-officer-dev'];
};

Cypress.Commands.add('logInWithSharedPlanGroup', logInWithSharedPlanGroup);
Cypress.Commands.add('setHackneyCookie', setHackneyCookie);
Cypress.Commands.add('logInAsHousingOfficer', logInAsHousingOfficer);
Cypress.Commands.add('loginWithGroups', logInWithGroups);
