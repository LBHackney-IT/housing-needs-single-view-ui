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
  intercept
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
      await openBrowser({ headless: false });
      await setHackneyCookie(true);
      // await intercept(
      //   'http://localhost:3000/customers?firstName=Matthew&lastName='
      // );
    });

    test('Goto single view home page', async () => {
      await goto('http://localhost:3001');
    });

    test('Search for "Matthew"', async () => {
      await focus(textBox(below('First Name')));
      await write('Matthew');
      await press('Enter');
    });

    // obvs this is wrong
    test('Page contains "Error"', async () => {
      await expect(text('Error').exists()).toBeTruthy();
    });

    afterAll(async () => {
      await closeBrowser();
    });
  });
});
