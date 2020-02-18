import jwt from 'jsonwebtoken';
const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  press,
  text,
  focus,
  textBox,
  setCookie,
  below,
  intercept,
  waitFor
} = require('taiko');

describe('Search', () => {
  const setHackneyCookie = async isValidGroup => {
    const group = isValidGroup
      ? 'housingneeds-singleview-beta'
      : 'some-other-group';
    const token = jwt.sign({ groups: [group] }, 'a-secure-signature');

    await setCookie('hackneyToken', token, {
      url: 'http://localhost:3001',
      domain: 'localhost'
    });
  };

  beforeAll(async () => {
    process.env.REACT_APP_HN_API_URL = 'http://localhost:3000';
  });

  describe('Login to Single View with valid token', () => {
    beforeAll(async () => {
      await openBrowser({ headless: false });
      await setHackneyCookie(true);
    });

    test('Goto single view home page', async () => {
      await goto('http://localhost:3001');
    });

    test('Page contains "Welcome to Single View"', async () => {
      await expect(text('Welcome to Single View').exists()).toBeTruthy();
    });

    afterAll(async () => {
      await closeBrowser();
    });
  });

  describe('Cannot login to Single View with invalid token', () => {
    beforeAll(async () => {
      await openBrowser({ headless: false });
      await setHackneyCookie(false);
    });

    test('Goto single view home page', async () => {
      await goto('http://localhost:3001');
    });

    test('Page contains "Please log in"', async () => {
      await expect(text('Please log in').exists()).toBeTruthy();
    });

    afterAll(async () => {
      await closeBrowser();
    });
  });

  describe('Search Single View', () => {
    beforeAll(async () => {
      await openBrowser({ headless: true });
      await setHackneyCookie(true);
      await intercept(
        'http://localdev.hackney.gov.uk:3000/customers?firstName=john&lastName=smith',
        request => {
          request.respond({
            grouped: [
              [
                {
                  id: '014541/1',
                  firstName: 'Leon John',
                  lastName: 'Smith',
                  dob: null,
                  nino: null,
                  address: null,
                  postcode: null,
                  source: 'UHT-Contacts',
                  links: {
                    uhContact: 1852
                  }
                },
                {
                  id: '41565',
                  firstName: 'Leon John',
                  lastName: 'Smith',
                  dob: null,
                  nino: null,
                  address: '',
                  postcode: null,
                  source: 'UHW',
                  links: {
                    uhContact: 1852
                  }
                }
              ],
              [
                {
                  id: '043362/1',
                  firstName: 'John',
                  lastName: 'Smith',
                  dob: '17/05/1939',
                  nino: null,
                  address: null,
                  postcode: 'N1 6PN',
                  source: 'UHT-Contacts',
                  links: {
                    uhContact: 11920
                  }
                },
                {
                  id: '26280',
                  firstName: 'John',
                  lastName: 'Smith',
                  dob: '17/05/1939',
                  nino: null,
                  address: '',
                  postcode: null,
                  source: 'UHW',
                  links: {
                    uhContact: 11920
                  }
                }
              ]
            ],
            ungrouped: [
              {
                id: '30108713X',
                firstName: null,
                lastName: null,
                dob: null,
                nino: null,
                address: '4 Stuart House, Queen Anne Road, London, E9 7AJ',
                postcode: 'E9 7AJ',
                source: 'ACADEMY-CouncilTax',
                links: {
                  hbClaimId: null
                }
              }
            ],
            connected: []
          });
        }
      );
    });

    test('Goto single view home page', async () => {
      await goto('http://localhost:3001');
    });

    test('Search for "John Smith"', async () => {
      await focus(textBox(below('First Name')));
      await write('John');
      await focus(textBox(below('Last Name')));
      await write('Smith');
      await press('Enter');
      await waitFor('Create a single view of a customer');
    }, 30000);

    test('Page contains "Customer records"', async () => {
      await expect(text('Customers with matching details\n').exists()).toBeTruthy();
    });

    afterAll(async () => {
      await closeBrowser();
    });
  });
});
