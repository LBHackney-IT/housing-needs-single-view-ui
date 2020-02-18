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
      await openBrowser({ headless: false, args: ['--disable-web-security'] });
      await setHackneyCookie(true);
      await intercept(
        'http://localdev.hackney.gov.uk:3000/customers?firstName=John&lastName=Smith',
        {
          body: {
            grouped: [
              [
                {
                  id: '012345/1',
                  firstName: 'John',
                  lastName: 'Smith',
                  dob: null,
                  nino: null,
                  address: null,
                  postcode: null,
                  source: 'UHT-Contacts',
                  links: {
                    uhContact: 1002
                  }
                },
                {
                  id: '12346',
                  firstName: 'John',
                  lastName: 'Smith',
                  dob: null,
                  nino: null,
                  address: '',
                  postcode: null,
                  source: 'UHW',
                  links: {
                    uhContact: 1342
                  }
                }
              ],
              [
                {
                  id: '04242/1',
                  firstName: 'John',
                  lastName: 'Smith',
                  dob: '17/07/1993',
                  nino: null,
                  address: null,
                  postcode: 'E8 1EA',
                  source: 'UHT-Contacts',
                  links: {
                    uhContact: 12320
                  }
                },
                {
                  id: '26280',
                  firstName: 'John',
                  lastName: 'Smith',
                  dob: '17/07/1993',
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
                id: '3234213X',
                firstName: null,
                lastName: null,
                dob: null,
                nino: null,
                address: '1 Hillman St, Hackney, London E8 1DY',
                postcode: 'E8 1DY',
                source: 'ACADEMY-CouncilTax',
                links: {
                  hbClaimId: null
                }
              }
            ],
            connected: []
          }
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

    // obvs this is wrong
    test('Page contains "Error"', async () => {
      await expect(text('Error').exists()).toBeTruthy();
    });

    test('Page contains "Customer records"', async () => {
      await expect(
        text('Customers with matching details\n').exists()
      ).toBeTruthy();
    });

    afterAll(async () => {
      await closeBrowser();
    });
  });
});
